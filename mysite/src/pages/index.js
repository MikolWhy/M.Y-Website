import React from 'react';
import Head from 'next/head';
import Clock from '../components/clock';
export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Yik's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <h1>Michael Yik</h1>
      </header>
      <section className="about">
        <h2>About</h2>
        <p>
          Placeholder text for the about section. Here you can introduce
          yourself, your skills, and your interests.
        </p>
        <Clock />
      </section>
      <section className="portfolio">
        <h2>Portfolio</h2>
        <p>
          Placeholder text for the portfolio section. Here you can showcase your
          projects and work experience.
        </p>
      </section>
      <section className="resume">
        <h2>Resume</h2>
        <p>
          Placeholder text for the resume section. Here you can provide a link
          to your resume or display your resume directly on the page.
        </p>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>
          Placeholder text for the contact section. Here you can provide
          information on how people can get in touch with you, such as email,
          phone, or social media.
        </p>
      </section>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Michael Yik. All rights reserved.</p>
      </footer>
    </>
  );
}
