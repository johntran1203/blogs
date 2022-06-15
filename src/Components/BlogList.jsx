import { Link } from 'react-router-dom';

const BlogList = ( props) => {
  // i remove the blogs where the props should be i will go back to it one day

  const { author, body, title} = props.blog.fields
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
    </div>
  );
}
 
export default BlogList;