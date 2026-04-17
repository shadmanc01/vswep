import { useState, useEffect } from "react";

function NoteEditor({ selectedNote, onSave }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title || "");
            setContent(selectedNote.content || "");
        } else {
            setTitle("");
            setContent("");
        }
    }, [selectedNote]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() && !content.trim()) return;

        const noteToSave = {
            id: selectedNote ? selectedNote.id : Date.now().toString(),
            title,
            content,
            createdAt: selectedNote?.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            children: selectedNote?.children || [],
        };

        console.log("Submitting note:", noteToSave);
        onSave(noteToSave);

        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    boxSizing: "border-box",
                }}
            />

            <textarea
                placeholder="What did you want to say?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                    width: "100%",
                    minHeight: "100px",
                    padding: "10px",
                    marginBottom: "10px",
                    boxSizing: "border-box",
                }}
            />

            <button type="submit">
                {selectedNote ? "Update Note" : "Add Note"}
            </button>
        </form>
    );
}

export default NoteEditor;