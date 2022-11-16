import TtRequest from "../index";

export function getMusicUrlData(params) {
  return TtRequest.get({
    url: "/song/url",
    params: params,
  });
}
