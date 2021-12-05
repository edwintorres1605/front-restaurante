import React, {useState, useEffect} from "react";
import './App.css';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        !loading ?
        <>            
            <Navbar show={true} />
            <Footer />      
        </>
        :
        <Loader />
    );
};

export default App;