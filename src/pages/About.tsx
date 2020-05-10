import React, {useEffect} from 'react';
import './About.scss';
import Header from './Header';
import Footer from './Footer';
import ReactGA from "react-ga";

const About: React.FC = () => {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <div className="App">
            <Header />
            <header className="App-header">
                <p>
                    This is about page.
                </p>
            </header>
            <Footer />
        </div>
    );
}

export default About;
