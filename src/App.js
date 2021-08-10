import React from 'react';
import Manage from "./components/manages/manage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cart from "./pages/carts/cart";
import Home from "./components/containerIcontent/Home"
import GlobalCart from "./pages/carts/globalCart";

function App() {
    document.body.style='background-color: #74EBD5;\n' +
        'background-image: linear-gradient(301deg, #74EBD5 0%, #9fd7e6 100%);\n'
  return (
    <Router>
        <Switch>
            <Route path="/cart">
                <GlobalCart/>
            </Route>
            <Route path="/">
                <Manage/>
            </Route>
            <Route path="/Home">
                <Home/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
