import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setClicked] = useState(true);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <img
      className="glasses-img"
      src={isClicked ? img : imgClicked}
      alt="glasses img"
      onClick={handleClick}
    />
  );
}

export default ClickablePicture;