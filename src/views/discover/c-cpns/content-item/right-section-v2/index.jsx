import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV2Wrapper } from "./style";
import ContentTitleV2 from "@/components/ContentTitleV2";
import ArtistCardV2 from "@/components/ArtistCardV2";
const SectionV2 = memo((props) => {
  const { topArtists, title } = props;
  console.log(1, topArtists);
  return (
    <SectionV2Wrapper>
      <ContentTitleV2 titleName={title}></ContentTitleV2>
      <ul>
        {topArtists.map((artist) => {
          return (
            <li key={artist.id}>
              <ArtistCardV2 itemData={artist}></ArtistCardV2>
            </li>
          );
        })}
      </ul>
    </SectionV2Wrapper>
  );
});

SectionV2.propTypes = {
  topArtists: PropTypes.array,
  title: PropTypes.string,
};

export default SectionV2;
