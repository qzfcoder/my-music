import TtRequest from "../index";

export function getEntireRoomList(offset = 0, size = 20) {
  return TtRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
}
