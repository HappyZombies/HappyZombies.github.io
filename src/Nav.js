import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

function Nav({ children, link }) {
  return (
    <>
      <nav id="App-nav-menu">
        {link !== process.env.PUBLIC_URL ? (
          <Link to={process.env.PUBLIC_URL}>
            &lt;-<i>Home</i>
          </Link>
        ) : null}
        <Link to={link}>&lt;-</Link>
      </nav>
      {children}
    </>
  );
}

const mapStateToProps = (state) => ({
  link: state.link.link,
});

export default connect(mapStateToProps, null)(Nav);
