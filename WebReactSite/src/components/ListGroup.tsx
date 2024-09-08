function ListGroup() {
  const items = ["New york", "Tokyo", "San Francisco", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li> //use curly braces to render data dynamically
        ))}
      </ul>
    </> //auto add to fragment
  );
}

export default ListGroup;
