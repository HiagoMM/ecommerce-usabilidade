import { Paper } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useRef } from "react";
import Swipe from "react-easy-swipe";
import { Container } from "./slider.styles";

interface SliderProps {
  cols: number;
  itens: any[];
  title: string;
  subTitle: string;
}

export const Slider: React.FC<SliderProps> = ({
  title,
  itens,
  cols,
  subTitle,
}) => {
  const containerRef = useRef(null);

  const onSwipeMove = (position, e) => {
    containerRef.current.swiper.scrollLeft =
      containerRef.current.swiper.scrollLeft - position.x / 2;
  };

  const handleNext = () => {
    const itemSize = containerRef.current.swiper.offsetWidth / cols;
    containerRef.current.swiper.scrollLeft =
      containerRef.current.swiper.scrollLeft + itemSize;
  };

  const handleBack = () => {
    const itemSize = containerRef.current.swiper.offsetWidth / cols;
    containerRef.current.swiper.scrollLeft =
      containerRef.current.swiper.scrollLeft - itemSize;
  };
  return (
    <Container cols={cols}>
      <div className="title-container">
        <div className="title">
          <h1>{title}</h1>
          <span>{subTitle}</span>
          <ArrowForwardIosIcon />
        </div>
        <div className="arrows">
          <Paper className="arrow" onClick={handleBack}>
            <ArrowBackIosIcon />
          </Paper>
          <Paper className="arrow" onClick={handleNext}>
            <ArrowForwardIosIcon />
          </Paper>
        </div>
      </div>
      <div className="content-wrapper">
        <Swipe
          tagName="div"
          className="content"
          innerRef={(ref) => {}}
          ref={containerRef}
          onSwipeMove={onSwipeMove}
          allowMouseEvents
        >
          {itens.map((item, index) => (
            <div className="item" key={index}>
              {item}
            </div>
          ))}
        </Swipe>
      </div>
    </Container>
  );
};
