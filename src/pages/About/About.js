import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../../components/About/AboutSection";

export default function About() {
  return (
    <div className="container">
      <Helmet>
        <title>About | Infinite Digital Cunsultants</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <link rel="canonical" href="https://theinfinitedigital.com/about" />
      </Helmet>
      <main>
        <div className="max-w-full mx-auto overflow-hidden">
          <AboutSection/>
        </div>
      </main>
    </div>
  );
}
