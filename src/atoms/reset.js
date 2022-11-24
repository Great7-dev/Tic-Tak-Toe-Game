import { atom } from "recoil";

export const resetState = atom({
  key: "resetState", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});
export const resetAllState = atom({
    key: "resetAllState", // unique ID (with respect to other atoms/selectors)
    default:Array(9).fill(""), // default value (aka initial value)
  });