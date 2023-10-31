import React from "react";
import { CHANGE_LANGUAGE } from "../types";
import useLanguage from "../hooks/useLanguage";

const initialState = "en";

function LanguageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return (state = action.payload);
    default:
      return state;
  }
}

export default LanguageReducer;