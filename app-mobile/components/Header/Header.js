import React from "react";
import {Header} from 'react-native-elements';

const Head    =   props   =>  {
    return <Header
        barStyle="dark-content"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'X Sport', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
    />
};

export default React.memo(Head);