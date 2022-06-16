import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseURL, config } from '../services';
//what do we need for our request (two variables)

const BlogList = ( props) => {
  // i remove the blogs where the props should be i will go back to it one day

  const { author, body, title} = props.blog.fields

  // some async function to handle click
  const deleteBlog = async () => {
      // make a specific url by combining the baseURL with the blog's id
    const blogURL = `${baseURL}/${props.blog.id}`
  // make a delete request ot that endpointm with the config
    await axios.delete(blogURL, config)

  // trigger our useEffect
    props.setToggleFetch((curr) => !curr)

  }

  return (
    <div className="blog-list">
      {/* {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))} */}
      <h2>{author}</h2>
      <h3>{title}</h3>
      <h5>{body}</h5>
      <button onClick={deleteBlog}>DELETE</button>
    </div>
  );
}
 
export default BlogList;