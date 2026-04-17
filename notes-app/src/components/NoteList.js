import Note from "./Note";

function NoteList({ notes }) {
    if (notes.length === 0) {
        return <p>No notes yet.</p>;
    }

    return (
        <div>
            {notes.map((note) => (
                <Note key={note.id} note={note} />
            ))}
        </div>
    );
}

export default NoteList;