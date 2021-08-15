import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import MoviesList from "../components/MoviesList";
import requests from "../utils/requests";
import Nav from "../components/Nav";

interface HomePagePorps {
	results: any[];
}

const Home: NextPage<HomePagePorps> = ({ results }) => {
	return (
		<div>
			<Head>
				<title>Movie DB</title>
				<meta name="description" content="movie database" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<MoviesList results={results} />
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const genre = ctx.query.genre;
	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre as string]?.url || requests["trending"].url
		}`
	).then((res) => res.json());

	return {
		props: {
			results: request?.results,
		},
	};
};
