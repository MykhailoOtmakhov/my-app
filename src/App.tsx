// // import { INote } from '../types/note';
// // import {Table} from '../components/Table';
// // import {Modal} from '../components/Modal'
// // import moment from 'moment';
// // import {NotesState} from '../store/reducers';
// // import { useDispatch, useSelector } from 'react-redux'
// // import { addNote } from '../actions';

// // const activeHeaders = ["Name", "Created", "Category", "Content", "Dates", "Actions"]

// // const App: React.FC = () => {
// // 	// const [name, setName] = useState('');
// // 	// const [content, setContent] = useState('');
// // 	// const [category, setCategory] = useState('');
// // 	const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);
// // 	const dispatch = useDispatch()
// // 	const [isShowPopup, setShowPopup] = useState(false)

// // 	const onAddNote = (note: INote) => {
// // 		dispatch(addNote(note))
// // 		// if(name) {

		
// // 			// setNotes([...notes, {
// // 			// 	id: crypto.randomUUID(),
// // 			// 	name: name,
// // 			// 	content: content,
// // 			// 	category: category,
// // 			// 	created: moment(new Date(Date.now())).format('MMMM D, YYYY'),
// // 			// }])
// // 			// setName('');
// // 			// setContent('');
// // 			// setCategory('');
// // 		// }
// // 	}

// // 	// function handleRemoveNote(event) {
// // 	// 	const noteId = event.target.dataset.id;
// // 	// 	let confirmDel = confirm("Are you sure you want to delete this note?");
// // 	// 	if(!confirmDel) return;
// // 	// 	notesData = notesData.filter((note) => note.id !== noteId);
// // 	// 	updateNotesList();
// // 	// 	updateArchiveNotesList();
// // 	// 	updateSummaryNotesList();
// // 	// }

// // 	const removeNote = (id: string) => {
// // 		// setNotes(notes.filter(note => note.id !== id))
// // 	}


// // 	return (
// // 		<>
// // 		<div className="container">
// //     <h1 className="heading">Notes App</h1>
// //     {/* <div>
// //       <table className="table">
// //         <caption>Active notes</caption>
// //         <thead className="table-header">
// //           <tr>
// //             <th>Name</th>
// //             <th>Created / Edited</th>
// //             <th>Category</th>
// //             <th>Content</th>
// //             <th>Dates</th>
// //             <th></th>
// //           </tr>
// //         </thead>
// //         <tbody className="notes-list">
// //         </tbody>
// //       </table>
// //       <button className="create-note-btn">Create note</button>
// //     </div> */}
// // 		<Table notes={notes} title="Active notes" removeNote={removeNote} tableHeaders={activeHeaders}/>
// // 		<button className="create-note-btn" onClick={() => setShowPopup(!isShowPopup)}>Create note</button>


// //     {/* <div>
// //       <table className="table">
// //         <caption>Archive notes</caption>
// //         <thead className="table-header">
// //           <tr>
// //             <th>Name</th>
// //             <th>Created</th>
// //             <th>Category</th>
// //             <th>Content</th>
// //             <th>Dates</th>
// //             <th>
// //             </th>
// //           </tr>
// //         </thead>
// //         <tbody className="archive-notes-list">
// //         </tbody>
// //       </table>
// //     </div>

// //     <div>
// //       <table className="table">
// //         <caption>Summary</caption>
// //         <thead className="table-header">
// //           <tr>
// //             <th>Note Category</th>
// //             <th>Active</th>
// //             <th>Archive</th>
// //           </tr>
// //         </thead>
// //         <tbody className="summary-notes-list">
// //         </tbody>
// //       </table>
// //     </div> */}
// //   </div>

// //   {/* {isShowPopup && <Modal>} */}
// // 	<Modal addNote={onAddNote}></Modal>
// // 	</>
// // 	)
// // }

// // export { App }


// import React, {useState} from 'react';
// import { INote, NoteState } from '../types/note';
// // import {Table} from '../components/Table';
// import {Modal} from '../components/Modal';
// import {TableRow} from '../components/TableRow'
// // import moment from 'moment';
// // import {NoteState} from '../store/reducers';
// import { useDispatch, useSelector } from 'react-redux'
// import { addNote, removeNote, archiveNote, fetchNotes } from '../actions';

// // const activeHeaders = ["Name", "Created", "Category", "Content", "Dates", "Actions"]

// // console.log('notes from app', notes);

// function App() {
// 	const notes = useSelector<NoteState, NoteState["notes"]>((state) => state.notes)
// 	console.log('notes from app', notes);

// 	// const [content, setContent] = useState('');
// 	// const [category, setCategory] = useState('');
// 	// const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);
// 	const dispatch = useDispatch()
// 	const [isShowPopup, setShowPopup] = useState(false)

// 	const onAddNote = (note: INote) => {
// 		dispatch(addNote(note))
// 		setShowPopup(false)
// 	}

// 	// const onRemoveNoteClick = (note: INote) => {
// 	// 	console.log('updatedNotes', note);

// 	// 	dispatch(removeNote(note));
// 	// }

// 		const removeNote = (note: INote) => {
// 		console.log('updatedNotes', note);

// 		dispatch({type: "REMOVE_NOTE", payload: note});
// 	}

// 	// function handleRemoveNote(event: any) {
//   //   const noteId = event.target.dataset.id;
// 	// 	return noteId;
//   //   // let confirmDel = confirm("Are you sure you want to delete this note?");
//   //   // if(!confirmDel) return;
//   //   // notesData = notesData.filter((note) => note.id !== noteId);
//   //   // updateNotesList();
//   //   // updateArchiveNotesList();
//   //   // updateSummaryNotesList();
//   // }


// 	// const onArchiveNoteClick = (note: INote) => {
// 	// 	dispatch(archiveNote(note));
// 	// }

// 	function findDatesInString(str: string) {
// 		const regex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/g;
// 		const matches = str.match(regex);
// 		return matches ? matches : [];
// 	}

// 	return (
// 		<>
// 		{/* <div className="container"> */}
//     <h1 className="heading">Notes App</h1>
// 		<table className="table">
//         <caption>Active notes</caption>
//         <thead className="table-header">
//           <tr>
//             <th>Name</th>
//             <th>Created / Edited</th>
//             <th>Category</th>
//             <th>Content</th>
//             <th>Dates</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody className="notes-list">
//     {notes.map((note: INote)=> {
// 			// if(note.isArchived == true){
// 			return(
// 				<React.Fragment key={note.id}>
// 					<TableRow 
// 						// name={note.name}
// 						// content={note.content}
// 						// category={note.category}
// 						// created={note.created}
// 						// id={note.id}
// 						note={note}
// 						// removeNote={() => removeNote(note)}
// 						removeNote={removeNote}
// 						// archiveNote={() => removeNote(note)}
// 					/>
// 							{/* <tr>
// 			<td>{note.name}</td>
// 			<td>{note.created}</td>
// 			<td>{note.category}</td>
// 			<td>{note.content}</td>
// 			<td>{findDatesInString(note.content)}</td>
// 			<td>
// 				{id}
// 				<button className="remove-note-button"
// 				 onClick={() => removeNote(note)}
// 				 >del</button>
// 				 <button className="archive-note-button"
// 				 onClick={() => archiveNote}
// 				 >arch</button>
// 			</td>
// 		</tr> */}
// 				</React.Fragment>
// 			)
// 		})}
		
// 		</tbody>
//       </table>
// 		<button className="create-note-btn" onClick={() => setShowPopup(true)}>Create note</button>
// 		<button className="create-note-btn" onClick={() => dispatch(fetchNotes())}>Take note</button>

// 		{/* <Table notes={notes} title="Active notes" removeNote={removeNote} tableHeaders={activeHeaders}/> */}
// 		{/* <button className="create-note-btn" onClick={() => setShowPopup(!isShowPopup)}>Create note</button> */}


//     {/* <div>
//       <table className="table">
//         <caption>Archive notes</caption>
//         <thead className="table-header">
//           <tr>
//             <th>Name</th>
//             <th>Created</th>
//             <th>Category</th>
//             <th>Content</th>
//             <th>Dates</th>
//             <th>
//             </th>
//           </tr>
//         </thead>
//         <tbody className="archive-notes-list">
//         </tbody>
//       </table>
//     </div>

//     <div>
//       <table className="table">
//         <caption>Summary</caption>
//         <thead className="table-header">
//           <tr>
//             <th>Note Category</th>
//             <th>Active</th>
//             <th>Archive</th>
//           </tr>
//         </thead>
//         <tbody className="summary-notes-list">
//         </tbody>
//       </table>
//     </div> */}
//   {/* </div> */}

//   {/* {isShowPopup && <Modal>} */}
// 	{isShowPopup && <Modal addNote={onAddNote}></Modal>}

// 	{/* <div className="content"> */}
//         {/* <div className="row">
//           <label>Name</label>
//           <input className="popup-input" type="text" id="note-name" 
// 					// value={note} 
// 					// onChange={updateNote}
// 					/>
//         </div> */}
//         {/* <div className="row">
//           <label>Content</label>
//           <input className="popup-input" type="text" id="note-content"
// 					//  value={content}
// 					//  onChange={e => setContent(e.target.value)} 
// 					 />
//         </div>
//         <div className="row">
//           <label>Category</label>
//           <select className="popup-input" name="category" id="note-category" 
// 					// value={category} 
// 					// onChange={e => setCategory(e.target.value)} 
// 					>
//             <option value="Task">Task</option>
//             <option value="Random Thought">Random Thought</option>
//             <option value="Idea">Idea</option>
//           </select>
//         </div> */}
//         {/* <button className="add-note-btn" 
// 				onClick={onAddNote}
// 				>Add</button> */}
//       {/* </div> */}

// 	</>
// 	)
// }

// export default App;

import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
// import "./styles.css";

import { TableRow } from "./components/TableRow";
import { Modal } from "./components/Modal";
import { addNote, removeNote } from "./store/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const notes: readonly INote[] = useSelector(
    (state: NoteState) => state.notes,
    shallowEqual
  );

  const [isShowPopup, setShowPopup] = React.useState(false)

  const dispatch: Dispatch<any> = useDispatch();

  const saveNote = React.useCallback(
    (note: INote) => dispatch(addNote(note)),
    [dispatch]
  );

  return (
    		<>
		{/* <div className="container"> */}
    <h1 className="heading">Notes App</h1>
		<table className="table">
        <caption>Active notes</caption>
        <thead className="table-header">
          <tr>
            <th>Name</th>
            <th>Created / Edited</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="notes-list">
        {notes.map((note: INote) => (
        <TableRow
          key={note.id}
          note={note}
          removeNote={removeNote}
        />
      ))}
      </tbody>
    </table>

    <button className="create-note-btn"
      onClick={() => setShowPopup(true)}
    >Create note</button>

      {isShowPopup && <Modal saveNote={saveNote} />}
    </>
  );
};

export default App;