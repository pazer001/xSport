import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import MainContext from "./state/MainContext";
import Head from './components/Header/Header';
import Main from "./components/Main/Main";

class App extends React.Component {
    constructor() {
        super();
        this.state  =   {
            view: {
                showCreatePost: false
            }
        };
    }
    render() {
        return (
            <MainContext.Provider value={this.state}>
                <ThemeProvider>
                    <Head/>
                    <Main/>
                </ThemeProvider>
            </MainContext.Provider>
        );
    }
};


export default React.memo(App);