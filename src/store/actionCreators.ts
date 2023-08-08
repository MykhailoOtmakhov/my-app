import * as actionTypes from "./actionTypes";
export function simulateHttpRequest(action: NoteAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function addNote(note: INote) {
  const action: NoteAction = {
    type: actionTypes.ADD_NOTE,
    note
  };

  return simulateHttpRequest(action);
}

export function removeNote(note: INote) {
  const action: NoteAction = {
    type: actionTypes.REMOVE_NOTE,
    note
  };
  return simulateHttpRequest(action);
}
