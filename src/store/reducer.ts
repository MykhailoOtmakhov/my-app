// // import {INote} from '../types/note';
// // import { Action } from '../actions';

// // export const initialState = {
// // 	notes:[
// // 	{
// //     name : "Shopping list",
// //     content: "Tomatoes, bread",
// //     category: "Task",
// //     created: "April 20, 2021",
// //     id: crypto.randomUUID(),
// //   },
// //   {
// //     name : "The theory of evolution", 
// //     content: "The theory of evolution bla bla",
// //     category: "Random Thought",
// //     created: "April 27, 2021",
// //     id: crypto.randomUUID(),
// //   },
// //   {
// //     name : "Dantist's Visite", 
// //     content: "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
// //     category: "Random Thought",
// //     created: "May 05, 2021",
// //     id: crypto.randomUUID(),
// //   },
// //   {
// //     name : "Father's Visite", 
// //     content: "I’m gonna have a vaction on the 3/6/2024, I moved it from 4/7/2024",
// //     category: "Idea",
// //     created: "May 05, 2023",
// //     id: crypto.randomUUID(),
// //   },
// //   {
// //     name : "Todo list",
// //     content: "Exams 2/5/2023, vacation 2/8/2023",
// //     category: "Task",
// //     created: "May 20, 2022",
// //     id: crypto.randomUUID(),
// //   },
// //   {
// //     name : "The theory of evolution", 
// //     content: "The theory of evolution bla bla",
// //     category: "Random Thought",
// //     created: "April 27, 2021",
// //     id: crypto.randomUUID(),
// //     isArchived: true,
// //   },
// //   {
// //     name : "Build a camp", 
// //     content: "Build a camp on Burning Man",
// //     category: "Idea",
// //     created: "August 05, 2021",
// //     id: crypto.randomUUID(),
// //   }
// // ]
// // }

// // export interface NotesState {
// // 	notes: INote[];
// // }

// // // type Action = {type: "ADD_NOTE", payload: INote}

// // export const rootReducer = (state: NotesState = initialState, action: Action) => {
// // 	switch(action.type){
// // 		case "ADD_NOTE": {
// // 			return {...state, notes: [...state.notes, action.payload]}
// // 		}
// // 		default:
// // 			return state
// // 	}
// // }

// import {INote, NoteState } from '../types/note';
// import { Action
// 	// , ActionRemove, ActionArchive
//  } from '../actions';

// export const initialState: NoteState = {
// 	notes:[
// 	{
//     name : "Shopping list",
//     content: "Tomatoes, bread",
//     category: "Task",
//     created: "April 30, 2021",
//     id: crypto.randomUUID(),
//   },
//   {
//     name : "The theory of evolution", 
//     content: "The theory of evolution bla bla",
//     category: "Random Thought",
//     created: "April 27, 2021",
//     id: crypto.randomUUID(),
//   },
//   {
//     name : "Dantist's Visite", 
//     content: "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
//     category: "Random Thought",
//     created: "May 05, 2021",
//     id: crypto.randomUUID(),
//   },
//   {
//     name : "Father's Visite", 
//     content: "I’m gonna have a vaction on the 3/6/2024, I moved it from 4/7/2024",
//     category: "Idea",
//     created: "May 05, 2023",
//     id: crypto.randomUUID(),
//   },
//   {
//     name : "Todo list",
//     content: "Exams 2/5/2023, vacation 2/8/2023",
//     category: "Task",
//     created: "May 20, 2022",
//     id: crypto.randomUUID(),
//   },
//   {
//     name : "The theory of evolution2", 
//     content: "The theory of evolution bla bla",
//     category: "Random Thought",
//     created: "April 27, 2021",
//     id: crypto.randomUUID(),
//     isArchived: true,
//   },
//   {
//     name : "Build a camp", 
//     content: "Build a camp on Burning Man",
//     category: "Idea",
//     created: "August 05, 2021",
//     id: crypto.randomUUID(),
//   }
// ]
// }

// // const initialState = {
// // 	notes: []
// // }

// // export interface NotesState {
// // 	notes: INote[];
// // }

// // type Action = {type: "ADD_NOTE", payload: string}

// export const rootReducer = (
// 	state: NoteState = initialState,
// 	action: Action
// 	):NoteState => {
// 	switch(action.type){
// 		case "ADD_SOME_NOTES": {
// 			return {...state, notes: [...state.notes, action.payload]}
// 		}
// 		case "ADD_NOTE": {
// 			return {...state, notes: [...state.notes, action.payload]}
// 		}
// 		case "REMOVE_NOTE": {
// 			const updatedNotes: INote[] = state.notes.filter(
//         (note) => note.id !== action.payload.id
//       );
// 			console.log('updatedNotes', updatedNotes);
			
//       return {
//         ...state,
//         notes: updatedNotes
//       };
// 			// return {...state, notes: state.notes.filter((note) => note.id !== action.payload.id )}
// 		}
// 		// case "ARCHIVE_NOTE": {
// 			// const updatedNote: any = state.notes.find((note) => note.id === action.payload);
// 			// console.log('updatedNote', updatedNote);
// 			// const updatedNotes: INote[] = state.notes.filter(
//       //   (note) => note.id !== action.payload
//       // );

// 			// console.log('notes');
			
			

// 			// updatedNote.isArchived = !updatedNote.isArchived;
// 			// let newArr: any =  updatedNote;
// 			// const updatedNotes: INote[] = state.notes.filter(
//       //   (note) => note.id !== action.payload
//       // );
//       // return {...updatedNotes, notes: [...updatedNotes]}
// 			// return updatedNote
			
// 		// }
// 		default:
// 			return state
// 	}
// }

// export const removeNoteAction = (payload: any) => ({type: "REMOVE_NOTE", payload})
// export const addNotesAction = (payload: any) => ({type: "ADD_SOME_NOTES", payload})

import * as actionTypes from "./actionTypes";
import moment from 'moment';

const initialState: NoteState = {
  notes:[
    	{
        name : "Shopping list",
        content: "Tomatoes, bread",
        category: "Task",
        created: "April 20, 2021",
        id: crypto.randomUUID(),
      },
      {
        name : "The theory of evolution", 
        content: "The theory of evolution bla bla",
        category: "Random Thought",
        created: "April 27, 2021",
        id: crypto.randomUUID(),
      },
      {
        name : "Dantist's Visite", 
        content: "I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
        category: "Random Thought",
        created: "May 05, 2021",
        id: crypto.randomUUID(),
      },
      {
        name : "Father's Visite", 
        content: "I’m gonna have a vaction on the 3/6/2024, I moved it from 4/7/2024",
        category: "Idea",
        created: "May 05, 2023",
        id: crypto.randomUUID(),
      },
      {
        name : "Todo list",
        content: "Exams 2/5/2023, vacation 2/8/2023",
        category: "Task",
        created: "May 20, 2022",
        id: crypto.randomUUID(),
      },
      {
        name : "The theory of evolution", 
        content: "The theory of evolution bla bla",
        category: "Random Thought",
        created: "April 27, 2021",
        id: crypto.randomUUID(),
        isArchived: true,
      },
      {
        name : "Build a camp", 
        content: "Build a camp on Burning Man",
        category: "Idea",
        created: "August 05, 2021",
        id: crypto.randomUUID(),
      }
    ]
    }

const reducer = (
  state: NoteState = initialState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      const newNote: INote = {
        id: crypto.randomUUID(), // not really unique but it's just an example
        name: action.note.name,
        content: action.note.content,
        category: action.note.category,
        // created: action.note.created,
        created: moment(new Date(Date.now())).format('MMMM D, YYYY'),

        isArchived: action.note.isArchived,
        
      };
      return {
        ...state,
        notes: state.notes.concat(newNote)
      };
    case actionTypes.REMOVE_NOTE:
      const updatedArticles: INote[] = state.notes.filter(
        (note) => note.id !== action.note.id
      );
      return {
        ...state,
        notes: updatedArticles
      };
  }
  return state;
};

export default reducer;
