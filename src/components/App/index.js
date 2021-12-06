import React, {useState, useEffect} from "react";
import './App.css';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";
import Shopping from "../../pages/Shopping";
import SignIn from "../../pages/SignIn";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        !loading ?
        <Router basename="/front-restaurante/">            
            <Navbar show={true} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/shopping" component={Shopping} />
                <Route path="/sign-in" component={SignIn} />
            </Switch>
            <Footer />      
        </Router>
        :
        <Loader />
    );
};

export default App;