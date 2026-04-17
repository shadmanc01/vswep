function Note({ note }) {
    return (
        <div style={styles.noteContainer}>
            <div style={styles.noteCard}>
                <h3 style={styles.title}>{note.title}</h3>
                <p style={styles.content}>{note.content}</p>

                <p style={styles.timestamp}>
                    Created: {note.createdAt ? new Date(note.createdAt).toLocaleString() : "N/A"}
                </p>
                <p style={styles.timestamp}>
                    Updated: {note.updatedAt ? new Date(note.updatedAt).toLocaleString() : "N/A"}
                </p>
            </div>

            {note.children && note.children.length > 0 && (
                <div style={styles.children}>
                    {note.children.map((child) => (
                        <Note key={child.id} note={child} />
                    ))}
                </div>
            )}
        </div>
    );
}

const styles = {
    noteContainer: {
        marginBottom: "12px"
    },
    noteCard: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        backgroundColor: "#fff"
    },
    title: {
        margin: "0 0 8px 0"
    },
    content: {
        margin: "0 0 8px 0",
        color: "#444"
    },
    timestamp: {
        margin: "4px 0",
        fontSize: "12px",
        color: "#777"
    },
    children: {
        marginLeft: "24px",
        marginTop: "10px"
    }
};

export default Note;