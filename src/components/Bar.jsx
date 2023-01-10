import { useState } from "react";

export default function Bar(props) {
  //   const [isExpanded, setIsExpanded] = useState(false);
  const [showBack, setShowBack] = useState(false);

  function dynamicBgColor() {
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

  function handleOnMouseEnter() {
    setShowBack(true);
  }

  function handleOnMouseLeave() {
    setShowBack(false);
  }

  function handleClick() {
    if (card.variant === "click") {
      //   setShowBack(!showBack);
    }
  }

  function handleFocus() {
    if (card.variant === "focus") {
      //   setShowBack(true);
    }
  }

  function handleBlur() {
    if (card.variant === "focus") {
      //   setShowBack(false);
    }
  }

  return (
    <div
      className="bar--tile-front"
      style={{ backgroundColor: dynamicBgColor() }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {showBack ? (
        <div className="bar--tile-back">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      ) : (
        <img src={props.coverImg} className="card--image" />
      )}
    </div>
  );
}
