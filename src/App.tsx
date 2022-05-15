import React from 'react';

import { ChakraProvider, LightMode, GlobalStyle } from '@chakra-ui/react'

import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppContext, { AppContextState } from './AppContext'

import HeaderComponent from "./components/Header"
import MainRoute from './routes/Main'
import ListRoute from "./routes/List"
import IntercomRoute from "./routes/Intercom"
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
      return (
        <ChakraProvider>
        <LightMode>
          <GlobalStyle />
          <BrowserRouter>
            <HeaderComponent/>
            <AppContext.Provider value={this.state}>
              <Routes>
                <Route path="/" element={<MainRoute />} />
                <Route path="list" element={<ListRoute />} />
                <Route path="mod">
                  <Route path=":modId" element={<ModRoute />} />
                </Route>
                <Route path="intercom" element={<IntercomRoute />} />
                <Route path="*" element={<Navigate replace to="/" />} />
              </Routes>
            </AppContext.Provider>
          </BrowserRouter>
        </LightMode>
        </ChakraProvider>
      );
  }
}
