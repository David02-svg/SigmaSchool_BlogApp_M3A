import React from "react";

const IconButton = ({className, onClick}) => {
  let margin = "light rounded";

  return (
    <button className={margin} onClick={onClick}>
      <i className={className} style={{ fontSize: "24px" }} />
    </button>
  );
}

export default IconButton;