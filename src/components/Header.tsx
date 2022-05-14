import React from 'react';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

export default class HeaderComponent extends React.Component <{}, {}> {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <Link to="/">Index</Link> |{" "}
                    <Link to="/list">Mod list</Link> |{" "}
                    <Link to="/top">Mods Top</Link> |{" "}
                    <Link to="/wronglink">Wrong link</Link>
                </nav>
            </header>
      );
    }
  }