import React from 'react';
import Layout from './Layout';

interface IndexProps {
  title: string;
}

const IndexPage: React.FC<IndexProps> = ({ title }) => {
  return (
    <Layout title={title}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your first htmx-app. Probably.</h1>
        <div id="content-swap">
          <button
            type="button"
            hx-get="/congrats/1"
            hx-swap="innerHTML"
            hx-target="#content-swap"
            className="btn btn-primary"
          >
            Click Me.
          </button>
        </div>
        <hr className="my-4" />
        <p>Created to make your dev-life easier</p>
      </div>
    </Layout>
  );
};

export default IndexPage;