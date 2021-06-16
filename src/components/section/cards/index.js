import React from "react";
import DoublePurchaseCardComponent from "./double-purchase";
import OrficeEnhancementCardComponent from "./orfice-enhancements";

const CardComponent = ({ data, section }) => {
  const cardType = data?.cardType ?? "single";
  const cards = {
    double: DoublePurchaseCardComponent,
    orfice: OrficeEnhancementCardComponent,
  };
  const CardToRender = cards[cardType];
  return CardToRender ? <CardToRender section={section} data={data} /> : null;
};

export default CardComponent;
