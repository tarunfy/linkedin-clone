import { atom } from "recoil";

export const handlePostState = atom({
  key: "handlePostState",
  default: true,
});

export const getPostState = atom({
  key: "getPostState",
  default: {},
});

export const useSSRPostsState = atom({
  key: "useSSRPostsState",
  default: true,
});
