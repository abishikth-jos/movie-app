import Image from "next/image";
import Link from "next/link";

// Types
import type { NextPage } from "next";

// Hooks
import useHomeData from "../hooks/useHomeData";

// Components
import Heading from "../components/Heading";
import LinkText from "../components/LinkText";
import MovieCard from "../components/Card/Movie";
import PersonCard from "../components/Card/Person";
import LoaderCard from "../components/Card/Loader";
import FeaturedCard from "../components/Card/Featured";

const Home: NextPage = () => {
  const { data, loading, error } = useHomeData();

  return (
    <div className="relative px-6 space-y-10 md:px-0">
      <section className="grid items-center gap-10 py-8 md:grid-cols-2 ">
        <div className="space-y-8 text-center md:text-left">
          <span className="px-4 py-2 text-white rounded-full bg-cyan-800">
            Watch Anywhere
          </span>

          <h1 className="text-5xl font-black leading-tight text-cyan-800">
            The Best{" "}
            <span className="underline text-brand-blue">Movie App</span> of the
            World
          </h1>

          <p className="text-xl text-gray-400 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            reprehenderit voluptatibus natus tenetur nisi ut praesentium minima
            rem, voluptas, eaque dolorum officiis consectetur. Nesciunt
            dignissimos, magnam eaque natus iure ab?
          </p>

          <div className="flex flex-col items-center justify-center gap-5 md:justify-start md:flex-row">
            <button className="px-10 py-2 text-white transition-colors rounded-lg bg-cyan-800 hover:bg-cyan-800/90">
              Join Now
            </button>

            <Link href="/about">
              <a className="hidden px-10 py-2 text-gray-700 transition-colors rounded-md md:block hover:bg-gray-100/70">
                Learn More
              </a>
            </Link>
          </div>
        </div>

        <div className="hidden md:block md:ml-auto">
          <Image
            src="/heading.svg"
            width={500}
            height={500}
            alt="header image"
          />
        </div>
      </section>

      <div className="space-y-24">
        <section className="space-y-6">
          <Heading>Watch Next</Heading>

          <div className="grid gap-4 md:grid-cols-3">
            {error && <p>Something went wrong! Please try again later.</p>}
            {loading || error ? (
              <LoaderCard count={3} type="card-large" />
            ) : (
              data?.discovery
                ?.slice(0, 3)
                .map((item) => <FeaturedCard key={item.id} movie={item} />)
            )}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Heading>Trending Movies</Heading>
            <LinkText>See more</LinkText>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {error && <p>Something went wrong! Please try again later.</p>}
            {loading || error ? (
              <LoaderCard count={6} />
            ) : (
              data?.trending?.movie.map((item) => (
                <MovieCard key={item.id} movie={item} />
              ))
            )}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Heading>Trending Series</Heading>
            <LinkText>See more</LinkText>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {error && <p>Something went wrong! Please try again later.</p>}
            {loading || error ? (
              <LoaderCard count={6} />
            ) : (
              data?.trending?.tv.map((item) => (
                <MovieCard key={item.id} type="tv" movie={item} />
              ))
            )}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Heading>Trending Actors</Heading>
            <LinkText href="/actors">See more</LinkText>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
            {error && <p>Something went wrong! Please try again later.</p>}
            {loading || error ? (
              <LoaderCard count={6} />
            ) : (
              data?.trending?.person.map((item) => (
                <PersonCard key={item.id} person={item} />
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
