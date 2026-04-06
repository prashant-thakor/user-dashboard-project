function Card({ title, children }) {
  const styles = {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  };

  return (
    <div style={styles}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default Card;