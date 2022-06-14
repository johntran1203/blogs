import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetail';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './Components/NotFound';
import axios from 'axios';
import { useEffect, useState} from 'react'
import { baseURL, config} from './services'

function App() {
  const [blogs, setBlogs] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getBlogs = async () => {
 
    // make an axios get call to our url, with our config object and save the response
    const response = await axios.get(baseURL, config)
    // console log the response's data
    setBlogs(response.data.records)

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
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              {/* edit route */}
              <BlogDetails />
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
