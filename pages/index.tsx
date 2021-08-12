import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Movie DB</title>
				<meta name="description" content="movie database" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Nav />
		</div>
	);
};

export default Home;
