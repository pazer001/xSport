import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Head from './components/Header/Header';
import Main from "./components/Main/Main";

const App = props => {
    const [isReady, setIsReady] =   useState(false);

    const loadFonts =   async ()  =>  {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        setIsReady(true)
    }

    useEffect(() => {
        loadFonts();
    }, [])

    if(!isReady) return <AppLoading />

    return <ThemeProvider>
        <Head/>
        <Main/>
    </ThemeProvider>
}


export default React.memo(App);