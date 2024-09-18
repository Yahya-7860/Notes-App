import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push({
        title: action.payload.title,
        content: action.payload.content,
        _id: action.payload.id,
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note._id != action.payload);
    },
    replaceAllNotes: (state, action) => {
      state.notes.push(action.payload);
    },
    clearRedux: (state, action) => {
      state.notes = [];
    },
  },
});

export const { addNote, deleteNote, replaceAllNotes, clearRedux } =
  noteSlice.actions;
export default noteSlice.reducer;
