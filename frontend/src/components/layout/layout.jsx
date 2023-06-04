import Header from './header';
import Footer from './footer';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <main className="flex-grow ">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;