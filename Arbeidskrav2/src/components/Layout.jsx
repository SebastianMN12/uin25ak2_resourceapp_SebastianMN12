import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
