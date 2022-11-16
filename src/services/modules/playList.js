import TtRequest from "../index";

export function getPlayListData(params) {
  return TtRequest.get({
    url: "/playlist/detail",
    params: params,
  });
}
export function getPlaySongListData(params) {
  return TtRequest.get({
    url: "/playlist/track/all",
    params: params,
  });
}
export function getSimiPlaySongListData(params) {
  return TtRequest.get({
    url: "/personalized",
    params: params,
  });
}
