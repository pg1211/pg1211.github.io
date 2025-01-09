import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio website showcasing projects and experiences" />
        <meta name="keywords" content="portfolio, web development, projects" />
        <meta name="author" content="Prakhar Gupta" />
        <title>Prakhar Gupta</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <main>
        {children}
      </main>
    </>
  );
}