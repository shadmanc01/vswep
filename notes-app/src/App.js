import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";

function filterNotes(notes, searchTerm) {
  if (!searchTerm.trim()) return notes;

  const lower = searchTerm.toLowerCase();

  return notes.reduce((acc, note) => {
    const titleMatch = (note.title || "").toLowerCase().includes(lower);
    const contentMatch = (note.content || "").toLowerCase().includes(lower);

    const filteredChildren = filterNotes(note.children || [], searchTerm);

    if (titleMatch || contentMatch || filteredChildren.length > 0) {
      acc.push({
        ...note,
        children: filteredChildren,
      });
    }

    return acc;
  }, []);
}

function updateNoteById(notes, updatedNote) {
  return notes.map((note) => {
    if (note.id === updatedNote.id) {
      return {
        ...note,
        ...updatedNote,
        children: updatedNote.children || note.children || [],
      };
    }

    return {
      ...note,
      children: updateNoteById(note.children || [], updatedNote),
    };
  });
}

function deleteNoteById(notes, noteId) {
  return notes
    .filter((note) => note.id !== noteId)
    .map((note) => ({
      ...note,
      children: deleteNoteById(note.children || [], noteId),
    }));
}

function noteExists(notes, id) {
  return notes.some((note) => {
    if (note.id === id) return true;
    return noteExists(note.children || [], id);
  });
}

function App() {
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem("notes");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Error reading notes from localStorage:", error);
      return [];
    }
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
      console.error("Error saving notes to localStorage:", error);
    }
  }, [notes]);

  const handleSave = (note) => {
    setNotes((prev) => {
      const exists = noteExists(prev, note.id);

      if (exists) {
        return updateNoteById(prev, note);
      }

      return [note, ...prev];
    });

    setSelectedNote(null);
  };

  const handleDelete = (noteId) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this note?");
    if (!shouldDelete) return;

    setNotes((prev) => deleteNoteById(prev, noteId));

    if (selectedNote && selectedNote.id === noteId) {
      setSelectedNote(null);
    }
  };

  const filteredNotes = filterNotes(notes, searchTerm);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <NoteEditor selectedNote={selectedNote} onSave={handleSave} />
      <NoteList
        notes={filteredNotes}
        onSelect={setSelectedNote}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;