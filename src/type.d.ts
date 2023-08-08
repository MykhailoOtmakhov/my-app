interface INote {
	id: string;
	name: string;
	content: string;
	category: string;
	created: string;
	isArchived?: boolean;
}

type NoteState = {
  notes: INote[];
};

type NoteAction = {
  type: string;
  note: INote;
};

type DispatchType = (args: NoteAction) => NoteAction;
