// import { addNotesAction, removeNoteAction} from './store/reducer';
// import {INote} from './types/note';

// export type Action = {type: string, payload: INote}
// export type ActionRemove = {type: any, payload: INote}
// // export type ActionArchive = {type: "ARCHIVE_NOTE", payload: string}

// export const addNote = (note: INote):Action => ({
// 	type: "ADD_NOTE",
// 	payload: note,
// })

// // export const removeNote = (note: INote):ActionRemove => ({
// // 	type: "REMOVE_NOTE",
// // 	payload: note,
// // })

// export function removeNote(note: INote): any {
//   return (dispatch: (arg0: { type: string; payload: INote; }) => void) => {
// 		setTimeout(() => {
// 			dispatch(removeNoteAction({
// 				type: "REMOVE_NOTE",
// 				payload: note,
// 			}))
// 		}, 1000);
// 	}
// }

// export function archiveNote(note: INote): Action {
//   return {
//     type: "ARCHIVE_NOTE",
//     payload: note,
//   };
// }

// export const fetchNotes: any = () => {
// 	return function(dispatch: (arg0: { type: string; payload: any; }) => any){
// 		fetch('https://jsonplaceholder.typicode.com/posts')
// 			.then((response) => response.json())
// 			.then((json) => dispatch(addNotesAction(json)));
// 		}
// }

export{}