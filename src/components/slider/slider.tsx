import React from "react";
import { Container } from "./slider.styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Paper } from "@material-ui/core";

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
  return (
    <Container>
      <div className="title-container">
        <div className="title">
          <h1>{title}</h1>
          <span>{subTitle}</span>
          <ArrowForwardIosIcon />
        </div>
        <div className="arrows">
          <Paper className="arrow">
            <ArrowBackIosIcon />
          </Paper>
          <Paper className="arrow">
            <ArrowForwardIosIcon />
          </Paper>
        </div>
      </div>
    </Container>
  );
};
