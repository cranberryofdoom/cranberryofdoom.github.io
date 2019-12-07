import React from "react";
import classNames from "classnames";
import "./Modal.scss";

export default function Modal({ children, onClick, show }) {
  return (
    <div
      className={classNames("modal-component", { show })}
      onClick={onClick.bind(this)}
    >
      {children}
    </div>
  );
}
