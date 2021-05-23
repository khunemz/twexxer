import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from "./components/Layouts/SideNav";
import { Provider } from "react-redux";
import store from "./store";

import Home from './components/Pages/Home'
import Notfound from './components/Pages/Notfound'


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <SideNav />

          <div className="container bd--container">
              <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} /> */}
                <Route component={Notfound} />
              </Switch>
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
