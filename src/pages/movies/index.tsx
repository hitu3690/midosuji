import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import apis from "@/apis";
import { TheMovieDatabaseResponse } from "@/apis/tmdb";

type Props = { movies: TheMovieDatabaseResponse };

const Movies: NextPage<Props> = ({ movies }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {movies?.results &&
          movies.results.map((result) => (
            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>{result.title} &rarr;</h2>
                <p>{result.overview}</p>
              </a>
            </div>
          ))}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await apis.tmdb.getMovies();

  return {
    props: {
      movies: response,
    },
    revalidate: 5,
  };
};

export default Movies;
