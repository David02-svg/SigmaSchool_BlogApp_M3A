import { Button } from "react-bootstrap";
import React from "react";

const TextButton = ( { onClick} ) => {
  let margin = "light rounded-pill";

  return (
    <Button variant={margin}  onClick={onClick}>
      {text}
    </Button>
  );
};

export default TextButton;