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
      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <div className="card-container">
          <div className="card">
            <h3>Project 1</h3>
            <p>Project description goes here.</p>
          </div>
          <div className="card">
            <h3>Project 2</h3>
            <p>Project description goes here.</p>
          </div>
        </div>
      </section>
      <section id="resume" className="resume">
        <h2>Resume</h2>
        <div className="card-container">
          <div className="card">
            <h3>Experience 1</h3>
            <p>Experience description goes here.</p>
          </div>
          <div className="card">
            <h3>Experience 2</h3>
            <p>Experience description goes here.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <div className="card-container">
          <div className="card">
            <h3>Email</h3>
            <p>email@example.com</p>
          </div>
          <div className="card">
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Michael Yik. All rights reserved.</p>
      </footer>
    </>
  );
}
