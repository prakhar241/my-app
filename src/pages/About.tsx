import React from 'react';
import './About.scss';
import Header from './Header';
import Footer from './Footer';

const About: React.FC = () => {
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
