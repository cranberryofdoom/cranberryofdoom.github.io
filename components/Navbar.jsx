import React from "react";
import "./Navbar.scss";

export default function Navbar({ onClick }) {
  return (
    <nav>
      <a onClick={onClick.bind(this, "work")} href="#work">
        💻 Work
      </a>
      <a onClick={onClick.bind(this, "make")} href="#make">
        🎨 Make
      </a>
      <a onClick={onClick.bind(this, "play")} href="#play">
        ✨ Play
      </a>
    </nav>
  );
}
