/* eslint-disable no-undef */
import React from "react";
import { hydrate } from "react-dom";

// -----------Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AES, enc } from "crypto-js";
import axios from "axios";
// -----------GraphQL[APOLLO_CLIENT]
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import https from "https";
import fetch from "node-fetch";
// -----------Router
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./Routes";

// -----------Internal_import
import reducers from "./store/reducers";

const client = new ApolloClient({
	ssrForceFetchDelay: 100,
	connectToDevTools: true,
	link: createHttpLink({
		fetch,
		uri: `https://localhost:3000/api/graphql`,
		credentials: "same-origin",
		fetchOptions: { agent: new https.Agent({ rejectUnauthorized: false }) }
	}),
	cache: new InMemoryCache({ dataIdFromObject: o => o.id }).restore(
		window.__APOLLO_STATE__
	)
});

const axiosInstance = axios.create({ baseURL: "/api" });

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

let DecryptUsersList = AES.decrypt(window.INITIAL_STATE, "secret key 123");
let UsersList_State = JSON.parse(DecryptUsersList.toString(enc.Utf8));

const store = createStore(reducers, UsersList_State, enhancer);
function Render(Route) {
	hydrate(
		<ApolloProvider client={client}>
			<Provider store={store}>
				<BrowserRouter>{renderRoutes(Route)}</BrowserRouter>
			</Provider>
		</ApolloProvider>,
		document.querySelector("#root")
	);
}

Render(routes);
