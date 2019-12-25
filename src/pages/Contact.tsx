import React from 'react';
import './About.scss';
import Header from './Header';
import Footer from './Footer';

const Contact: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <header className="App-header">
                <p>
                    This is contact me page page.
                </p>
            </header>
            <Footer />
        </div>
    );
}

export default Contact;
