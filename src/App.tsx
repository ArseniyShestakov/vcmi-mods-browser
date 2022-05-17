import React from 'react';

import { ChakraProvider, LightMode, GlobalStyle } from '@chakra-ui/react'

import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppContext, { AppContextState } from './AppContext'

import HeaderComponent from "./components/Header"
import MainRoute from './routes/Main'
import ListRoute from "./routes/List"
import IntercomRoute from "./routes/Intercom"
import IntertestRoute from "./routes/Intertest"
import ModRoute from "./routes/Mod"

export default class App extends React.Component <{}, AppContextState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      mods: new Map()
    };
  }

  static contextType = AppContext;

  componentDidMount() {
    fetch("repository.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            mods: new Map(Object.entries(result))
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    render() {
      var env_basename = '';
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        env_basename = ''
      } else {
        env_basename = '/vcmi-mods-browser/';
      }
      return (
        <ChakraProvider>
        <LightMode>
          <GlobalStyle />
          <BrowserRouter basename={env_basename}>
            <HeaderComponent/>
            <AppContext.Provider value={this.state}>
              <Routes>
                <Route path="/" element={<MainRoute />} />
                <Route path="list" element={<ListRoute />} />
                <Route path="mod">
                  <Route path=":modId" element={<ModRoute />} />
                </Route>
                <Route path="intercom" element={<IntercomRoute />} />
                <Route path="intertest" element={<IntertestRoute />} />
                <Route path="*" element={<Navigate replace to="/" />} />
              </Routes>
            </AppContext.Provider>
          </BrowserRouter>
        </LightMode>
        </ChakraProvider>
      );
  }
}
