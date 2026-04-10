function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Just Notes</h1>
            <p style={styles.subtitle}>organize your thoughts</p>
        </header>
    );
}

const styles = {
    header: {
        padding: "16px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#f9f9f9"
    },
    title: {
        margin: 0,
        fontSize: "24px"
    },
    subtitle: {
        margin: 0,
        fontSize: "14px",
        color: "#666"
    }
};

export default Header;