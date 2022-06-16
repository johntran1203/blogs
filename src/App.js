import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetail';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './Components/NotFound';
import axios from 'axios';
import { useEffect, useState} from 'react'
import { baseURL, config} from './services'
import BlogList from './Components/BlogList';
import Form from './Components/Form';

function App() {
  const [blogs, setBlogs] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getBlogs = async () => {
 
    // make an axios get call to our url, with our config object and save the response
    const response = await axios.get(baseURL, config)
    // console log the response's data
    setBlogs(response.data.records)
    // console.log(response.data.records)

    }
    getBlogs()
  },[toggleFetch])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <main>
                {/* map through the blogs array and render a p tag for each one with the blog's name field as its text content */}
                {blogs.map((blog) => (
                  <BlogList blog ={blog} key ={blog.id} setToggleFetch={setToggleFetch}/>
                ))}
                <h1>hello</h1>
              </main>
              {/* <Home /> */}
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/form">
              <Form  setToggleFetch={setToggleFetch}/>
            </Route>
            <Route path="/blogs/:id">
              {/* edit route */}
              <BlogDetails />
            </Route>
            <Route path="/edit/:id">
              
            <Form blogs={blogs} setToggleFetch={setToggleFetch}/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
