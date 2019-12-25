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
                    This is app page. <br/>
                    <a
                        className="App-link"
                        href="https://github.com/prakhar241/my-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github Repo
                    </a>

                </p>
            </header>
            <Footer />
        </div>
    );
}

export default App;
