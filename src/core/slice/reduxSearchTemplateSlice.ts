import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
  users: [],
};

const searchTemplateSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setSearch, setUsers } = searchTemplateSlice.actions;
export default searchTemplateSlice.reducer;
