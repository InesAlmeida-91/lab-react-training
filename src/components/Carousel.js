import { useState } from 'react';

function Carousel({images}) {
const [imgNum, setImgNum] = useState(0)

const handleLeftClick = () => {
    if(imgNum > 0) {
        setImgNum(images - 1)
    } else {
        setImgNum(images.length - 1);
      }
    };

    const handleRightClick = () => {
        if (imgNum < images.length - 1) {
          setImgNum(imgNum + 1);
        } else {
          setImgNum(0);
        }
      };

    return(
        <div>
            <button onClick={handleLeftClick}>Left</button>
            <img className="carousel-img"src={images[imgNum]} alt="Carousel img"/>
            <button onClick={handleRightClick}>Rigth</button>
        </div>
    )
}

export default Carousel;