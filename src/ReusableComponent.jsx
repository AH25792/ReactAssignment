function Card(props) {
  return (
    <div style={styles.card}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px"
  }
};

export default Card;
