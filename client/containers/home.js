import React from "react";
import { Helmet } from "react-helmet";
import { hot } from "react-hot-loader";
import classes from "./home.css";

const Home = () => {
	return (
		<div className='center-align' style={{ marginTop: "200px" }}>
			<Helmet>
				<title>My Title</title>
				<meta name='description' content='Helmet application' />
				<meta property='og:title' content='The Rock' />
				<meta property='og:type' content='video.movie' />
				<meta property='og:url' content='http://www.imdb.com/title/tt0117500/' />
				<meta
					property='og:image'
					content='http://ia.media-imdb.com/images/rock.jpg'
				/>
			</Helmet>
			<h3>Welcome to you</h3>
			<p className={classes.red}>Check out these awesome features</p>
		</div>
	);
};

export default hot(module)(Home);
