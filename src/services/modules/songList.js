import TtRequest from "../index";

export function getCatlistData(params) {
  return TtRequest.get({
    url: "/playlist/catlist",
    params: params,
  });
}
