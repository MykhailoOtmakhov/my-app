import * as React from "react";

type Props = {
  saveNote: (note: INote | any) => void;
};

export const Modal: React.FC<Props> = ({ saveNote }) => {
  const [note, setArticle] = React.useState<INote | {}>();

  const handleNoteData = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => {
    setArticle({
      ...note,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const addNewNote = (e: React.FormEvent) => {
    e.preventDefault();
    saveNote(note);
  };

  return (
    <div className="popup-backdrop">
      <div className="popup">
        <div className="content">
          <form onSubmit={addNewNote} className="Add-note">
          <label>Name</label>
          <input
            className="popup-input"
            type="text"
            id="name"
            placeholder="Name"
            onChange={handleNoteData}
          />
          <label>Content</label>
          <input
            className="popup-input"
            type="text"
            id="content"
            placeholder="Content"
            onChange={handleNoteData}
          />
          <label>Category</label>
          <select 
            className="popup-input"
            name="category"
            id="category" 
            // defaultValue="Task" why itsn`t work?!?!?
            onChange={handleNoteData} 
          >
            <option value="none" selected disabled hidden>Select Category</option>
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </select>
          <button disabled={note === undefined ? true : false}>
            Add note
          </button>
        </form>
        </div>
    </div>
  </div>
  );
};
