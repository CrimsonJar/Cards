import React, { ReactNode } from "react";
import "./cards.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Card } from "react-bootstrap";
type CardsProps = {
  children?: ReactNode;
};
const Cards: React.FC<CardsProps> = ({ children }) => {
  return (
    <div className='card'>
      <div className='card-body'>{children}</div>
    </div>
  );
};
export default Cards;
