import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="container">
      <Helmet>
        <title>About - yoursite.com</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main style={{ padding: "1rem 0" }}>
        <h2>About</h2>
      </main>
    </div>
  );
}
