import React from 'react';
import './About.scss';
import Header from './Header';
import Footer from './Footer';

const Home: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <body className="App-header">
            <p>
                This is app home-page.
            </p>
            </body>
            <Footer />
        </div>
    );
};

export default Home;
