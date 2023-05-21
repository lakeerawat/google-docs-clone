import { configureStore } from "@reduxjs/toolkit";
import DocsFileReducer from "./docSlice";

export default configureStore({
  reducer: {
    docsfile: DocsFileReducer,
  },
});
