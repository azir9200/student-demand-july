import { createSlice,  PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const academicFacultySlice = createSlice({
  name: "academicFaculty",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});
export const { setName } = academicFacultySlice.actions;
export default academicFacultySlice.reducer;
