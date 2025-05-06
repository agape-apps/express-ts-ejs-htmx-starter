import React from 'react';
import HtmxHeader from './partials/HtmxHeader';
import HtmxFooter from './partials/HtmxFooter';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <html lang="en" data-theme="aqua">
      <head>
        <HtmxHeader title={title} />
      </head>
      <body>
        {children}
        <HtmxFooter />
      </body>
    </html>
  );
};

export default Layout;