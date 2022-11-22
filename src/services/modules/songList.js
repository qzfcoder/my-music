import TtRequest from "../index";

export function getCatlistData(params) {
  return TtRequest.get({
    url: "/playlist/catlist",
    params: params,
  });
}
export function getCatPlaylistData(params) {
  return TtRequest.get({
    url: "/top/playlist",
    params: params,
  });
}
