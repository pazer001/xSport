import React, {useContext} from 'react';
import CreatePost from "../CreatePost/CreatePost";
import Posts from "../Posts/Posts";
import {Fab, Icon} from "native-base";
import {StyleSheet, View} from "react-native";
import {observer} from 'mobx-react-lite';
import ViewStoreContext from "../../state/ViewStore";


const Main  =   observer(props   =>  {

    return <View style={styles.container}>
        <CreatePost show={ViewStoreContext.showCreatePost} />
        <Posts/>
        <Fab
            direction="up"
            position="bottomRight"
            onPress={() => ViewStoreContext.showCreatePost(!ViewStoreContext.showCreatePost)}
        >
            <Icon type="FontAwesome5" name="pencil-alt"/>
        </Fab>
    </View>
});

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