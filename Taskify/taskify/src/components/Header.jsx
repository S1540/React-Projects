import logo from "./../assets/logo.jpg";

function Header() {
  return (
    <>
      <div className="app">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav className="nav-links">
            <a href="#">Home</a> <a href="#">Tasks</a> <a href="#">About</a>
          </nav>
        </header>
      </div>
    </>
  );
}
export default Header;
