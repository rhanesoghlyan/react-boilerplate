/*
 * AboutPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <title>About Page</title>
        <meta
          name="description"
          content="About page of React.js Boilerplate application"
        />
      </Helmet>

      <h1>About page</h1>
    </div>
  );
}
