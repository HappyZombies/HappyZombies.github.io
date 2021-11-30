import { createStore, combineReducers } from "redux";

const defaultLinkState = {
  link: process.env.PUBLIC_URL,
};

const link = (state = defaultLinkState, action) => {
  if (action.type === "UPDATE_LINK") {
    return { link: action.payload.link };
  }
  return state;
};

export default createStore(combineReducers({ link }));
