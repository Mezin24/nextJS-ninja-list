import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
  const pageName = children.type.name;
  return (
    <>
      <Head>
        <title>Ninjas | {pageName}</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div className='content'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
