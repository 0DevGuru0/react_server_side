import { matchRoutes } from "react-router-config";
import Redis from "ioredis";
import renderer from "../helpers/renderer";
import createStore from "../helpers/createStore";
import routes from "../../client/Routes";

let redis = new Redis();
export default () => (req, res) => {
	const store = createStore(req);
	const page = req.query.page || 1;
	const promise = matchRoutes(routes, req.path)
		.map(({ route }) => {
			return route.loadData ? route.loadData(store, page) : null;
		})
		.map(pro => {
			if (pro) {
				return new Promise(resolve => pro.then(resolve).catch(resolve));
			}
			return null;
		});
	Promise.all(promise).then(() => {
		let context = {};
		const pageRender = renderer(req, store, context, res);
		Promise.all([pageRender]).then(async value => {
			if (context.notFound) {
				res.status(404);
			}
			redis.incrby("totalVisit", 1);

			res.send(value[0]);
		});
	});
};
