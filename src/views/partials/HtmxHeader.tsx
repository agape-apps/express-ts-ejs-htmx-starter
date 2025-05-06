import React from 'react';

interface HtmxHeaderProps {
  title: string;
}

const HtmxHeader: React.FC<HtmxHeaderProps> = ({ title }) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      {/* HTMX is bundled in app.js */}
      <script src="/static/app.js" defer></script>
      <link rel="stylesheet" href="/static/app.css" />
    </>
  );
};

export default HtmxHeader;