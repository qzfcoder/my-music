import TtRequest from "../index";

export function getRankDetailData(params) {
  return TtRequest.get({
    url: "/top/list",
    params: params,
  });
}
