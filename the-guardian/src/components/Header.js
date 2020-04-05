import React from 'react';
import Guardian from './Guardian'
import Header from './components/Header'


class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <h1>Support The Guardian</h1>
                <h2>Support our journalism with a year-end gift</h2>

                <Guardian />
                <Header />

            </header>
        )
    }
}

export default Header;