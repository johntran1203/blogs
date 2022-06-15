import { useState } from "react";

const Form = (props) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <form>
      <label htmlFor="author">Author:</label>
      <input
        id="author"
        type="text"
        required
        autoComplete="off"
        autoFocus
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      ></input>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <label htmlFor="body">Body:</label>
      <input
        type="text"
        required
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></input>
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
