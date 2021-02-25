import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import { React } from 'react';
import About from "./components/pages/About";
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  // foo=()=>'Bar';
  //  async componentDidMount(){
  //    this.setState({loading:true});
  //    const res = await axios.get(`https://api.github.com/users?CLIENT_ID=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //    this.setState({loading:false,users:res.data});
  //    console.log(this.state.users);
  // }
  //search github users

  //get a single github users







  //Set alert



  // const name="abhishek";
  // const loading = false;
  // const showName=true;

  //ghost wrapper doesnt show in html
  // <Fragment>
  //   <h1>Hello From react</h1>
  // </Fragment>
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            {/* {loading ? <h4>Loading...</h4>:<h1>Hello {showName && name}</h1>} */}
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );


}

export default App;
