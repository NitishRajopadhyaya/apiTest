import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Form from "./Form";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="create">
              <h2>Form</h2>
              <Form></Form>
            </div>
            <div className="table-data">
              <h2>Data Display</h2>
              <Home></Home>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
