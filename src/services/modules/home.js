import TtRequest from "../index";

export function getHomeBannerData() {
  return TtRequest.get({
    url: "/banner",
  });
}
export function getHotListData() {
  return TtRequest.get({
    url: "/playlist/hot",
  });
}
// 精品歌单标签列表
export function getHighqualityData() {
  return TtRequest.get({
    url: "/playlist/highquality/tags",
  });
}
// 获取精品歌单
export function getHighqualityListData(params) {
  return TtRequest.get({
    url: "/top/playlist/highquality",
    params: params
  });
}
// 获取精品歌单 /top/album?offset=0&limit=30&year=2019&month=6
export function getAlbumData(params) {
  return TtRequest.get({
    url: "/top/album",
    params: params
  });
}
// 获取精品歌单 /top/album?offset=0&limit=30&year=2019&month=6
export function getToplistData(params) {
  return TtRequest.get({
    url: "/toplist",
    params: params
  });
}
// 获取精品歌单 /top/album?offset=0&limit=30&year=2019&month=6
export function getToplistDetailData(params) {
  return TtRequest.get({
    url: "/toplist/detail",
    params: params
  });
}
// 获取精品歌单 /top/album?offset=0&limit=30&year=2019&month=6
export function getTopArtistsData(params) {
  return TtRequest.get({
    url: "/top/artists",
    params: params
  });
}
export function getTopPopularData(params) {
  return TtRequest.get({
    url: "/dj/toplist/popular",
    params: params
  });
}
