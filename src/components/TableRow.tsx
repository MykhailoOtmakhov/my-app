import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  note: INote;
  removeNote: (note: INote) => void;
};

export const TableRow: React.FC<Props> = ({ note, removeNote }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteNote = React.useCallback(
    (note: INote) => dispatch(removeNote(note)),
    [dispatch, removeNote]
  );

  function findDatesInString(str: string) {
  const regex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/g;
  const matches = str.match(regex);
  return matches ? matches : [];
}

  return (
    <tr>
			<td>{note.name}</td>
			<td>{note.created}</td>
			<td>{note.category}</td>
			<td>{note.content}</td>
      <td>{findDatesInString(note.content)}</td>
      <td>
      <button className="remove-note-button" onClick={() => deleteNote(note)}>Delete</button>
      </td>
    </tr>
  );
};
