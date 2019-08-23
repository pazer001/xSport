import React, {useContext} from 'react';
import CreatePost from "../CreatePost/CreatePost";
import Posts from "../Posts/Posts";
import {Fab, Icon} from "native-base";
import {StyleSheet, View} from "react-native";
import MainContext from "../../state/MainContext";

const Main  =   props   =>  {
    const {view}    =   useContext(MainContext);
    return <View style={styles.container}>
        <CreatePost show={view.showCreatePost} />
        <Posts/>
        <Fab
            direction="up"
            position="bottomRight"
        >
            <Icon name="share"/>
        </Fab>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 0
    }
});


export default React.memo(Main);