import { atom } from "recoil";

export const showSuccessModalState = atom({
  key: "successModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});