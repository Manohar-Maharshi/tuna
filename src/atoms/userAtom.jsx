import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: { hel: "fj" },
});

export const isLoggedIn = selector({
  key: "isLoggedIn",
  get: ({ get }) => {
    const user = get(userState);
    if (Object.keys(user).length === 0) {
      return false;
    } else {
      return true;
    }
  },
});
