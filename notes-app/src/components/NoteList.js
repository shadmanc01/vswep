import Note from "./Note";

function filterNotes(notes, searchTerm) {
    console.log('Hello')
}

function NoteList({ notes, onSelect, onDelete }) {
    if (notes.length === 0) {
        return <p>No notes yet.</p>;
    }

    return (
        <div>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    onSelect={onSelect}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default NoteList;