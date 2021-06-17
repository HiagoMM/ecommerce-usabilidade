import styled from "styled-components";
import Color from "color";
import { Paper } from "@material-ui/core";
export const Container = styled.div`
  width: 100%;

  .card-1 {
    margin: 3rem 0rem;
    width: 100%;
    border-radius: 10px;
    background-color: #f3f3f3;
    user-select: none;
    cursor: pointer;
    img {
      user-select: none;
      width: 100%;
    }
  }
  .card-1:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background-color: ${() => Color("#f3f3f3").lighten(0.3).string()};
  }
`;

export const CardImage = styled.div<{
  image: string;
  height: string;
  cover?: boolean;
}>`
  background-image: url("${(props) => props.image}");
  height: ${(props) => props.height};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${(props) => (props.cover ? "cover" : "contain")}; ;
`;

export const Coupon = styled(Paper)`
  padding: 1rem;
  margin: 3rem 0.5rem;
  display: flex;
  flex-direction: column;
  height: 17rem;
  h3 {
    margin: 0px;
    font-weight: normal;
    margin-top: 10px;
  }
  p {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
  .button {
    border-radius: 30px;
  }
`;
