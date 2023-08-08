export interface INote {
	id: string;
	name: string;
	content: string;
	category: string;
	created: string;
	isArchived?: boolean;
}

export type NoteState = {
  notes: INote[];
};