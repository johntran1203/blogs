import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

const Form = (props) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createBlog = async(e) => {
    e.preventDefault()
    // create a new object call newBlog (holding all our data from state)
    const newBlogs = {
        author,
        title,
        body,
    }
    // make a post request to our endpoint (same as GET), pass our newBlog as the data, and pass our config to allow ourselves entry into the database
    await axios.post(baseURL, {fields: newBlogs}, config)
    // trigger our useEffect
    props.setToggleFetch((curr) => !curr)

  }

  return (
    <form onSubmit={createBlog}>
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
