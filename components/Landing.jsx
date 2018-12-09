import React from "react";
import "./Landing.scss";
import Sprinkles from "./Sprinkles";

export default function Landing({ onClick }) {
  return (
    <section className="landing-component full">
      <Sprinkles />
      <div className="section-content">
        <header>
          <h1 className="huge">Ashley Qian</h1>
          <div className="subheader huge">
            <a
              onClick={onClick.bind(this, "work")}
              className="mint"
              href="#work"
            >
              Software engineer
            </a>{" "}
            by day,{" "}
            <a
              onClick={onClick.bind(this, "make")}
              className="mint"
              href="#make"
            >
              artist
            </a>{" "}
            by night,{" "}
            <a
              className="mint"
              onClick={onClick.bind(this, "play")}
              href="#play"
            >
              kid
            </a>{" "}
            at heart.
          </div>
        </header>
      </div>
    </section>
  );
}
