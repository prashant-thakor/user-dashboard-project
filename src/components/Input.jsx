function Input({ placeholder, size = "medium" }) {
  const styles = {
    padding: size === "large" ? "10px" : "5px",
    margin: "5px",
    width: size === "large" ? "300px" : "150px"
  };

  return <input type="text" placeholder={placeholder} style={styles} />;
}

export default Input;