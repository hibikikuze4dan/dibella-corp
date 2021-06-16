import React from "react";
import OrficeEnhancementCardComponent from "./orfice-enhancements";

const CardComponent = ({ data }) => {
  const cardType = data?.cardType ?? "single";
  const cards = {
    orfice: OrficeEnhancementCardComponent,
  };
  const CardToRender = cards[cardType];
  return CardToRender ? <CardToRender data={data} /> : null;
};

export default CardComponent;
