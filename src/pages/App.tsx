import React from 'react';
import logo from '../logo.svg';
import './App.scss';
import Header from './Header';
import Footer from './Footer';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <p>
                    This is app page.
                </p>
            </header>
            <Footer />
        </div>
    );
}

export default App;
