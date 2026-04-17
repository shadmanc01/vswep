import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";

function filterNotes(notes, searchTerm) {
  if (!searchTerm.trim()) return notes;

  const lower = searchTerm.toLowerCase();

  return notes.reduce((acc, note) => {
    const titleMatch = note.title.toLowerCase().includes(lower);
    const contentMatch = note.content.toLowerCase().includes(lower);

    const filteredChildren = filterNotes(note.children || [], searchTerm);

    if (titleMatch || contentMatch || filteredChildren.length > 0) {
      acc.push({
        ...note,
        children: filteredChildren
      });
    }

    return acc;
  }, []);
}

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));

    if (saved) {
      setNotes(saved);
    } else {
      const sampleNotes = [
        {
          id: "1",
          title: "Work",
          content: "Finish React homework",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          children: [
            {
              id: "2",
              title: "Tree Notes",
              content: "Learn recursion and nested data",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              children: []
            }
          ]
        }
      ];

      setNotes(sampleNotes);
      localStorage.setItem("notes", JSON.stringify(sampleNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const filteredNotes = filterNotes(notes, searchTerm);

  return (
    <div>
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <NoteList notes={filteredNotes} />
    </div>
  );
}

export default App;