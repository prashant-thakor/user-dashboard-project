function Button({ text, color = "blue", size = "medium" }) {
  const styles = {
    backgroundColor: color,
    padding: size === "large" ? "10px 20px" : "5px 10px",
    border: "none",
    color: "white",
    cursor: "pointer",
    margin: "5px"
  };

  return <button style={styles}>{text}</button>;
}

export default Button;