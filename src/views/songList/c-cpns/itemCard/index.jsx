import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemCardWrapper } from "./style";
const ItemCard = memo((props) => {
  const { cardConetnt } = props;
  return (
    <ItemCardWrapper>
      <div className="img">
        <img src={cardConetnt.coverImgUrl} alt="" />
        <div className="title"></div>
      </div>
      <div className="songName">{cardConetnt.name}</div>
    </ItemCardWrapper>
  );
});

ItemCard.propTypes = {
  cardConetnt: PropTypes.object,
};

export default ItemCard;
