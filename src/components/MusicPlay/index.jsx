import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { MusicPlayWrapper } from "./style";
import { fetchMusicDataAction } from "@/store/modules/music";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

const MusicPlay = memo((props) => {
  const { musicUrl } = useSelector(
    (state) => ({
      musicUrl: (state.music && state.music?.musicUrl) || "",
    }),
    shallowEqual
  );
  console.log("musicUrl", musicUrl);
  return (
    <MusicPlayWrapper>
      <audio src={musicUrl?.data?.[0]?.url || ""} controls="controls">
        Your browser does not support the audio element.
      </audio>
    </MusicPlayWrapper>
  );
});

MusicPlay.propTypes = {};

export default MusicPlay;
