function Note({ note, onSelect, onDelete }) {
  return (
    <div style={styles.noteContainer}>
      <div style={styles.noteCard} onClick={() => onSelect(note)}>
        <div style={styles.topRow}>
          <h3 style={styles.title}>{note.title}</h3>

          <button
            style={styles.deleteButton}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(note.id);
            }}
          >
            Delete
          </button>
        </div>

        <p style={styles.content}>{note.content}</p>

        <p style={styles.timestamp}>
          Created:{" "}
          {note.createdAt ? new Date(note.createdAt).toLocaleString() : "N/A"}
        </p>

        <p style={styles.timestamp}>
          Updated:{" "}
          {note.updatedAt ? new Date(note.updatedAt).toLocaleString() : "N/A"}
        </p>
      </div>

      {note.children && note.children.length > 0 && (
        <div style={styles.children}>
          {note.children.map((child) => (
            <Note
              key={child.id}
              note={child}
              onSelect={onSelect}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  noteContainer: {
    marginBottom: "12px",
  },
  noteCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: "0 0 8px 0",
  },
  content: {
    margin: "0 0 8px 0",
    color: "#444",
  },
  timestamp: {
    margin: "4px 0",
    fontSize: "12px",
    color: "#777",
  },
  children: {
    marginLeft: "24px",
    marginTop: "10px",
  },
  deleteButton: {
    border: "none",
    backgroundColor: "#d9534f",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Note;