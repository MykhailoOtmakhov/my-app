import { INote } from '../types/note';
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import * as React from "react";
// import { findDatesInString } from"./myFunc.js";


interface ITableRow {
	// removeNote(id: string): void;
	note: INote;
	removeNote:(note: INote)=> void;
	// k: string;
}

// function findDatesInString(str: string) {
//   const regex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/g;
//   const matches = str.match(regex);
//   return matches ? matches : [];
// }

// const removeNote = (id: string) => {
// 	// console.log('updatedNotes', note);

// 	dispatch({type: "REMOVE_NOTE", payload: id});
// }
// const deleteNote = React.useCallback(
// 	(note: INote) => dispatch(removeNote(note)),
// 	[dispatch, removeNote]
// );


const TableRow: React.FC<ITableRow> = ({removeNote, note}) => {
	// const {
	// 	// id, 
	// 	// name,
	// 	// category,
	// 		// content,
	// 		// note,
	// 		removeNote,
	// 		// archiveNote,
	// 	// created,
	// } = props;

	const dispatch: Dispatch<any> = useDispatch();
	const deleteNote = React.useCallback(
		(note: INote) => dispatch(removeNote(note)),
		[dispatch, removeNote]
	);

	// const onRemoveNoteClick = (event: any) => {
	// 	const noteId = event.target;
	// 	console.log('noteId', noteId);
		
	// 	// removeNote(noteId)
		
	// }

	return (
	// <>
		// {/* {props.notes.map(note => <TableRow key={note.id} {...note}/>)} */}
		<tr>
			<td>{note.name}</td>
			<td>{note.created}</td>
			<td>{note.category}</td>
			<td>{note.content}</td>
			{/* <td>{findDatesInString(note.content)}</td> */}
			<td>
				{/* {id} */}
				<button className="remove-note-button"
				 onClick={() => dispatch(deleteNote(note))}
				 >del</button>
				 {/* <button className="archive-note-button"
				 onClick={() => archiveNote}
				 >arch</button> */}
			</td>
		</tr>
		)
  //   {/* <td>{note.created}</td>
  //   <td>{note.category}</td>
  //   <td>{note.content}</td> */}
  //   {/* <td>${findDatesInString(note.content)}</td> */}
  //   {/* <button className="edit-note-button" data-id="${note.id}"></button> */}
  //   {/* <button className="remove-note-button" data-id="${note.id}"></button> */}
		
  //   {/* <button className="archive-note-button" data-id="${note.id}"></button> */}
	// 	{/* <div>qwe</div> */}
	// {/* </> */}
}


	export {TableRow}