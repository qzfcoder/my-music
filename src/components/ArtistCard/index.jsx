import PropTypes from "prop-types";
import React, { memo } from "react";
import { ArtistCardWrapper } from "./style";
const ArtistCard = memo((props) => {
  const { itemData } = props;
  return (
    <ArtistCardWrapper>
      <div className="artist-img">
        <img src={itemData.picUrl} alt="" />
      </div>
      <div className="artist-content">
        <div className="name">{itemData.name}</div>
        <div className="desc">xxxxx</div>
      </div>
    </ArtistCardWrapper>
  );
});

ArtistCard.propTypes = {
  itemData: PropTypes.object,
};

export default ArtistCard;
