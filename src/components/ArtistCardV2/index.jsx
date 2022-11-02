import PropTypes from "prop-types";
import React, { memo } from "react";
import { ArtistCardV2Wrapper } from "./style";
const ArtistCardV2 = memo((props) => {
  const { itemData } = props;
  return (
    <ArtistCardV2Wrapper>
      <div className="artist-img">
        <img src={itemData.avatarUrl} alt="" />
      </div>
      <div className="artist-content">
        <div className="name">{itemData.nickName}</div>
        <div className="desc">{itemData.mainAuthDesc ?? "xxxxx"}</div>
      </div>
    </ArtistCardV2Wrapper>
  );
});

ArtistCardV2.propTypes = {
  itemData: PropTypes.object,
};

export default ArtistCardV2;
