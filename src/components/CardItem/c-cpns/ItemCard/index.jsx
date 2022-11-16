import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemCardWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import IconMusic from "@/assets/svg/icon_music.jsx";
import IconPlay from "@/assets/svg/icon_play.jsx";
const ItemCard = memo((props) => {
  const { ItemData } = props;
  const navigate = useNavigate();
  function toPlayListClickHandle(e) {
    navigate(`/playlist`, {
      replace: false,
      state: { id: ItemData.id },
    });
    // console.log("toPlayListClickHandle", e);
  }
  return (
    <ItemCardWrapper>
      <div
        className="img-card"
        onClick={(e) => toPlayListClickHandle(ItemData)}
      >
        <img src={ItemData.coverImgUrl} alt="" />
        <div className="img-bottom-play">
          <div className="IconMusic">
            <IconMusic width="24" height="24"></IconMusic>
          </div>
          <div className="subscribedCount">
            <span>{ItemData.subscribedCount}</span>
          </div>
          <div className="IconPlay">
            <IconPlay width="22" height="22"></IconPlay>
          </div>
        </div>
      </div>
      <div className="img-card-title">{ItemData.name}</div>
    </ItemCardWrapper>
  );
});

ItemCard.propTypes = {
  ItemData: PropTypes.object,
};

export default ItemCard;
