// Main Page for Skrolltoon Website
// This assumes a Next.js framework from your source code

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const featuredItems = [
    { title: "The Crownless King", author: "Josie", cover: "/covers/crownless-king.jpg" },
    { title: "Bloodbound Umbra", author: "Malakai", cover: "/covers/bloodbound-umbra.jpg" },
    { title: "Echoes of Eternity", author: "Jane Doe", cover: "/covers/echoes-of-eternity.jpg" }
];

const genres = ["Fantasy", "Sci-Fi", "Romance", "Thriller", "Horror"];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
    };

    return (
        <div>
            <Head>
                <title>Skrolltoon - Your Storytelling Hub</title>
                <meta name="description" content="Discover and share stories on Skrolltoon." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="main-container">
                <header className="hero">
                    <h1>Welcome to Skrolltoon</h1>
                    <p>Your hub for discovering and sharing captivating stories.</p>
                    <Link href="/creator/dashboard">
                        <a className="cta-button">Go to Creator Dashboard</a>
                    </Link>
                </header>

                <section className="carousel">
                    <h2>Featured Stories</h2>
                    <div className="carousel-container">
                        <button onClick={handlePrev}>&lt;</button>
                        <div className="carousel-slide">
                            <img
                                src={featuredItems[currentSlide].cover}
                                alt={featuredItems[currentSlide].title}
                                className="carousel-image"
                            />
                            <div className="carousel-info">
                                <h3>{featuredItems[currentSlide].title}</h3>
                                <p>By {featuredItems[currentSlide].author}</p>
                            </div>
                        </div>
                        <button onClick={handleNext}>&gt;</button>
                    </div>
                </section>

                <section className="genres">
                    <h2>Explore by Genre</h2>
                    <ul className="genre-list">
                        {genres.map((genre) => (
                            <li key={genre} className="genre-item">
                                <Link href={`/genre/${genre.toLowerCase()}`}>
                                    <a>{genre}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="upcoming">
                    <h2>Upcoming Releases</h2>
                    <p>Stay tuned for new and exciting stories coming soon!</p>
                </section>

                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Skrolltoon. All rights reserved.</p>
                </footer>
            </main>
        </div>
    );
}
