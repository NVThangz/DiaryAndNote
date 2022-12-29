
// import { SET_TASKS, SET_TASKS_ID } from "./action";

// const initialState = {
//     taskID: 1,
//     tasks: [],
// }

// function taskReducer(state = initialState, action) {
//     switch (action.type) {
//         case SET_TASKS_ID:
//             return {...state, taskID: action.payload}
//         case SET_TASKS:
//             return {...state, task: action.payload}
//         default: state
//     }
// }

// export default taskReducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import {defaultFont, noteState} from "../types/noteTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "../asyncstorage";


type initialStateType = {
  noteList: noteState[];
};

const noteList: noteState[] = [
  // {
  //   id: '1',
  //   title: '1984',
  //   desc: 'George Orwell',
  //   date: new Date(),
  //   font: defaultFont,
  //   position: {"latitude": 21.03924551286744, "longitude": 105.78181743621825, "name": "Trường Đại học Ngoại ngữ, Cầu Giấy, Hà Nội, Vietnam"},
  // },
  // {
  //   id: '2',
  //   title: 'ABC',
  //   desc: 'Xyz',
  //   date: new Date('2000-12-17T03:24:00'),
  //   font: defaultFont,
  //   position: {"latitude": 21.050280086190043, "longitude": 105.7897138595581, "name": "Bệnh viện E, 89, Đường Trần Cung, Cầu Giấy, Hà Nội, Vietnam"}
  // },
  // {
  //   id: '3',
  //   title: '123',
  //   desc: '112233',
  //   date: new Date('2005-12-17T03:24:00'),
  //   font: defaultFont,
  //   position: {"latitude": 21.039550301365562, "longitude": 105.78388441354036, "name": "136, Xuân Thủy, Cầu Giấy, Hà Nội, Vietnam"}
  // },
];

const initialState:initialStateType = {
  noteList,
}

const noteSlice =  createSlice({
  name: "note",
  initialState,
  reducers: {
    setNotes(state, action: PayloadAction<noteState[]>) {
      state.noteList = action.payload;
    },
    addNote(state, action: PayloadAction<noteState>) {
      state.noteList.push(action.payload);
      storeData(state.noteList)
    },
    updateNote: (state, action: PayloadAction<noteState>) => {
      const {
        payload: { title, id, desc , date, font, position, medias, stickers},
      } = action;
      
      state.noteList = state.noteList.map((Note) =>
      Note.id === id ? { ...Note, desc, title , date, font, position, medias, stickers} : Note,
      );
      storeData(state.noteList)
    },
    deleteNote: (state, action: PayloadAction<{ id: string }>) => {
      state.noteList = state.noteList.filter((note) => note.id !== action.payload.id);
      storeData(state.noteList)
    },
    sortNotesByTime: (state) => {
      state.noteList = state.noteList.sort((a,b)=> new Date(b.date).getTime()-new Date(a.date).getTime());
    },
  },
});





export const { addNote, updateNote, deleteNote, sortNotesByTime, setNotes } = noteSlice.actions;
// export const selectBookList = (state: taskSlice) => state.task.TaskState;
export default noteSlice.reducer;