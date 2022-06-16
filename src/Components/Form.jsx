import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";

const Form = (props) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const params = useParams();
  const history = useHistory();
    console.log(props.blogs, 'hiiiii')
  useEffect(() => {
    // if there's an id param
    if (params.id) {
      // find the blog where their id matches the params' id property
      const blog = props.blogs.find((blog) => blog.id === params.id);
      // if that blog exists (i.e. is not undefined)
      if (blog) {
        // set each of our states to their fields (name to the blog's name, etc.)
        setAuthor(blog.fields.author);
        setTitle(blog.fields.title);
        setBody(blog.fields.body);
      }
    }
  }, [params.id, props.blogs]);
  // we'll figure out the dependencies as we go


  // set each of our states to their fields (name blog's name etc)
  // we'll figoute the dependency as i go

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create a new object call newBlog (holding all our data from state)
    const newBlogs = {
      author,
      title,
      body,
    };
    if (params.id) {
      const blogURL = `${baseURL}/${params.id}`;
      await axios.put(blogURL, { fields: newBlogs }, config);
    }
    // make a post request to our endpoint (same as GET), pass our newBlog as the data, and pass our config to allow ourselves entry into the database
    else {
      await axios.post(baseURL, { fields: newBlogs }, config);
      // trigger our useEffect
      props.setToggleFetch((curr) => !curr);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
