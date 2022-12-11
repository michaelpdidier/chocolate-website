import { useState } from "react";

export default function Bar(props) {
  //   const [isExpanded, setIsExpanded] = useState(false);
  const [showBack, setShowBack] = useState(false);

  function color() {
    console.log(props.id);
    switch (props.id % 3) {
      case 0:
        return "var(--dark-brown)";
      case 1:
        return "var(--main-brown)";
      case 2:
        return "var(--med-dark-brown)";
      case 3:
    }
  }

  function handleOnMouseOver() {
    console.log("moused over");
  }

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  function handleFocus() {
    if (card.variant === "focus") {
      setShowBack(true);
    }
  }

  function handleBlur() {
    if (card.variant === "focus") {
      setShowBack(false);
    }
  }

  return (
    <div className="bar--tile" style={{ backgroundColor: color() }}>
      <img src={props.coverImg} className="card--image" />
    </div>
  );
}
