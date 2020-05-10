import React, {useEffect} from 'react';
import './About.scss';
import Header from './Header';
import Footer from './Footer';
import ReactGA from "react-ga";

const Home: React.FC = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <div className="App">
            <Header/>
            <body className="App-header">
            <p>
                This is home-page. Added analytics. Currently routes are loading javascript.
            </p>
            </body>
            <Footer />
        </div>
    );
};

export default Home;
