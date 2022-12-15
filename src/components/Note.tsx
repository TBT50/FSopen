interface NoteProps {
  id: number;
  content: string;
  date: string;
  important: boolean;
}

export const Note = ({ content }: NoteProps) => {
  return <li>{content}</li>;
};
