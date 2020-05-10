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
                This is home-page. Added analytics. Currently routes are loading javascripts.
            </p>
            </body>
            <Footer />
        </div>
    );
};

export default Home;
