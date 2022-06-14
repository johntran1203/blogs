import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetail';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './Components/NotFound';
import axios from 'axios';

function App() {
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
