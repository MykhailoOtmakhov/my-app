


// import React, {ChangeEvent} from'react';
// import { INote } from '../types/note';
// import { addNote } from '../actions';
// import { initialState } from '../store/reducers';

// interface ModalProps {
// 	addNote(note: INote): void;
// }

// export const Modal:React.FC<ModalProps> = ({addNote}) => {
// 	const [note, setNote] = React.useState(initialState);

// 	const updateNote = (event:ChangeEvent<HTMLInputElement>) => {
// 		setNote(event.target.value)
// 	}

// 	const onAddNoteClick = () => {
// 		addNote(note)
// 	}


// 	return(
// 	 <div className="popup-backdrop">
//     <div className="popup">
//       <div className="content">
//         <div className="row">
//           <label>Name</label>
//           <input className="popup-input" type="text" id="note-name" 
// 					value={note} 
// 					onChange={e => setNote(e.target.value)}
// 					/>
//         </div>
//         <div className="row">
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
//         </div>
//         <button className="add-note-btn" 
// 				onClick={onAddNoteClick}
// 				>Add</button>
//       </div>
//     </div>
//   </div>
// 	)
// }




import React, {ChangeEvent} from'react';
import { INote } from '../types/note';
import moment from 'moment';
// import { addNote } from '../actions';
// import { initialState } from '../store/reducers';

interface ModalProps {
	addNote(note: INote): void;
}

export const Modal:React.FC<ModalProps> = ({addNote}) => {
	const [noteName, setNoteName] = React.useState('');
	const [noteContent, setNoteContent] = React.useState('');
	const [noteCategory, setNoteCategory] = React.useState('');
	// const [noteId] = React.useState('');
	// const [noteCreated] = React.useState('');
	// const [noteName, setNoteName] = React.useState('');

		// id: '',
		// content: '',
		// category: '',
		// created: ''});

	const updateNoteName = (event:ChangeEvent<HTMLInputElement>) => {
		setNoteName(event.target.value)
	}

	const updateNoteContent = (event:ChangeEvent<HTMLInputElement>) => {
		setNoteContent(event.target.value)
	}

	const updateNoteCategory = (event:ChangeEvent<HTMLSelectElement>) => {
		setNoteCategory(event.target.value)
	}

	const onAddNoteClick = () => {
		addNote({
			name: noteName,
			content: noteContent,
			category: noteCategory,
			created: moment(new Date(Date.now())).format('MMMM D, YYYY'),
			id: crypto.randomUUID()})
	}


	return(
	 <div className="popup-backdrop">
    <div className="popup">
      <div className="content">
        <div className="row">
          <label>Name</label>
          <input className="popup-input" type="text" id="note-name" 
					value={noteName} 
					onChange={updateNoteName}
					/>
        </div>
        <div className="row">
          <label>Content</label>
          <input className="popup-input" type="text" id="note-content"
					 value={noteContent}
					 onChange={updateNoteContent} 
					 />
        </div>
        <div className="row">
          <label>Category</label>
          <select className="popup-input" name="category" id="note-category" 
					value={noteCategory} 
					onChange={updateNoteCategory} 
					>
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </select>
        </div>
        <button className="add-note-btn" 
				onClick={onAddNoteClick}
				>Add</button>
      </div>
    </div>
  </div>
	)
}