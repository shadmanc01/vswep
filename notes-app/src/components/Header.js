function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Notes App</h1>
      <p style={styles.subtitle}>Create, edit, and search your notes</p>
    </header>
  );
}

const styles = {
  header: {
    marginBottom: "20px",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "32px",
  },
  subtitle: {
    marginTop: "8px",
    color: "#666",
  },
};

export default Header;