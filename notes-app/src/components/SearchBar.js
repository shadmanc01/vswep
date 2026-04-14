import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value);
  };

  const handleClear = () => {
    setInput("");
    onSearch("");
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search notes..."
        value={input}
        onChange={handleChange}
        style={styles.input}
      />

      {input && (
        <button onClick={handleClear} style={styles.clearButton}>
          ✕
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    margin: "16px auto"
  },
  input: {
    width: "100%",
    padding: "10px 36px 10px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  clearButton: {
    position: "absolute",
    right: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "16px",
    color: "#888"
  }
};

export default SearchBar;