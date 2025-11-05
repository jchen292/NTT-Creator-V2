import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Your List of Tips, Notes, or TODOS</h1>
      <h3>Created by Jordan Chen</h3>

      <nav style={styles.nav}>
        <Link style={styles.link} to="/">
          NTT Main Page
        </Link>
        {" | "}
        <Link style={styles.link} to="/about">
          About Page
        </Link>
        {" | "}
        <Link style={styles.link} to="/contact">
          Contact Page
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    color: "#21B6A8",
    textAlign: "center",
    background: "#4D5A5B",
    border: "1px #21B6A8 solid",
    borderRadius: "8px",
    padding: "10px 0",
    marginBottom: "20px",
  },
  nav: {
    marginTop: "10px",
  },
  link: {
    color: "#21B6A8",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Header;
