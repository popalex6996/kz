import React, { useState } from "react";
import "./index.css";
import Spacer from "../Spacer";
import Button from "../Button";
// import Modal from "../Modal";

interface ImageCarouselProps {
  images: { src: string; title: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [selected, setSelected] = useState<number>(0);
  const [isGallery, setGallery] = useState(false);
  const handleClick = (e: any) => {
    let value = e.target.getAttribute("data-value");
    if (value !== null) {
      setSelected(+value);
    }
  };
  const toggleGallery = () => {
    setGallery((isVisible) => !isVisible);
  };

  return (
    <div className="slider-wrapper">
      <div className="open-image-btn-wrapper">
        <Button
          onClick={toggleGallery}
          icon="expand"
          iconClassName="fa-solid"
          color="#711d1d"
        />
      </div>
      <div className="slider">
        <div
          className="slide-items"
          style={
            selected >= 1
              ? { transform: `translateX(-${selected * 200}px` }
              : {}
          }
        >
          {images.map((img) => (
            <img
              key={img.title + "image"}
              src={img.src}
              alt={img.title}
              className="item"
              onClick={toggleGallery}
            />
          ))}
        </div>
        <Spacer height={10} />
        <ul onClick={handleClick} className="indicators">
          <Button
            onClick={() =>
              setSelected(selected - 1 < 0 ? images.length - 1 : selected - 1)
            }
            icon="caret-left"
            iconClassName="fa-solid"
            color="#711d1d"
          />
          {images.map((img, index) => (
            <img
              key={img.title + "indicator"}
              data-value={index}
              src={img.src}
              alt={img.title}
              className={selected === index ? "active indicator" : "indicator"}
            />
          ))}
          <Button
            onClick={() =>
              setSelected(selected + 1 === images.length ? 0 : selected + 1)
            }
            icon="caret-right"
            iconClassName="fa-solid"
            color="#711d1d"
          />
        </ul>
      </div>
      {/* <Modal onBackdropClick={toggleGallery} isVisible={isGallery}>
        <div className="gallery-wrapper">
          <div className="gallery-close-btn-wrapper">
            <Button
              className="close-gallery-btn"
              onClick={toggleGallery}
              icon="xmark"
              iconClassName="fa-solid"
              color="#711d1d"
            />
          </div>
          <div className="gallery-slider">
            <div
              className="slide-items"
              style={
                selected >= 1
                  ? { transform: `translateX(-${selected * 500}px` }
                  : {}
              }
            >
              {images.map((img) => (
                <img
                  key={img.title + "image"}
                  src={img.src}
                  alt={img.title}
                  className="gallery-item"
                  onClick={toggleGallery}
                />
              ))}
            </div>
            <Spacer height={10} />
            <ul onClick={handleClick} className="indicators">
              <Button
                onClick={() =>
                  setSelected(
                    selected - 1 < 0 ? images.length - 1 : selected - 1,
                  )
                }
                icon="caret-left"
                iconClassName="fa-solid"
                color="#711d1d"
              />
              {images.map((img, index) => (
                <img
                  key={img.title + "indicator"}
                  data-value={index}
                  src={img.src}
                  alt={img.title}
                  className={
                    selected === index
                      ? "active gallery-indicator"
                      : "gallery-indicator"
                  }
                />
              ))}
              <Button
                onClick={() =>
                  setSelected(selected + 1 === images.length ? 0 : selected + 1)
                }
                icon="caret-right"
                iconClassName="fa-solid"
                color="#711d1d"
              />
            </ul>
          </div>
        </div>
      </Modal>*/}
    </div>
  );
};
export default ImageCarousel;
