import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import Head from './components/Header/Header';
import Main from "./components/Main/Main";

const App = props => {
    return <ThemeProvider>
        <Head/>
        <Main/>
    </ThemeProvider>
}


export default React.memo(App);