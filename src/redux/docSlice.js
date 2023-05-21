import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const docSlice = createSlice({
  name: "docsfile",
  initialState: {
    docs: [
      {
        id: "4c4c1134-bd6b-47ae-8cd3-4c375bded731",
        name: "physics notes",
        boldText: true,
        italicText: false,
        underlineText: true,
        colorText: "green",
        rightText: false,
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "4c4c1134-bd6b-47ae-8cd3-4c375bded732",
        name: "chemistry Notes",
        boldText: false,
        italicText: true,
        underlineText: true,
        colorText: "",
        rightText: false,
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      {
        id: "4c4c1134-bd6b-47ae-8cd3-4c375bded733",
        name: "Bio Notes",
        boldText: false,
        italicText: true,
        underlineText: false,
        colorText: "",
        rightText: true,
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "4c4c1134-bd6b-47ae-8cd3-4c375bded734",
        name: "java Notes",
        boldText: false,
        italicText: false,
        underlineText: false,
        colorText: "",
        rightText: false,
        para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    doc: {
      name: "",
      boldText: false,
      italicText: false,
      underlineText: false,
      colorText: "",
      rightText: false,
      para: "",
    },
  },
  reducers: {
    getDocs: (state, action) => {
      state.doc = state.docs.find((item) => item.id === action.payload);
    },
    addDocs: (state, action) => {
      const newData = { ...action.payload, id: uuidv4() };
      state.docs = [newData, ...state.docs];
    },
    // deletedocs: (state, action) => {
    //   state.docs = state.docs.filter(
    //     (item) => item.id !== action.payload
    //   );
    // },

    updateDocs: (state, action) => {
      state.docs = state.docs.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    // setFilter: (state, action) => {
    //   state.filterData = action.payload;
    // },
  },
});
export const { getDocs, addDocs, updateDocs } = docSlice.actions;
export default docSlice.reducer;
