import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionV1Wrapper } from "./style";
import ContentTitleV2 from "@/components/ContentTitleV2";
import ArtistCard from "@/components/ArtistCard";
const SectionV1 = memo((props) => {
  const { topArtists, title } = props;
  console.log(1, topArtists);
  return (
    <SectionV1Wrapper>
      <ContentTitleV2 titleName={title}></ContentTitleV2>
      <ul>
        {topArtists.map((artist) => {
          return (
            <li key={artist.id}>
              <ArtistCard itemData={artist}></ArtistCard>
            </li>
          );
        })}
      </ul>
    </SectionV1Wrapper>
  );
});

SectionV1.propTypes = {
  topArtists: PropTypes.array,
  title: PropTypes.string,
};

export default SectionV1;
