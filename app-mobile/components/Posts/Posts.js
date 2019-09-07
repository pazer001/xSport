import React, {useEffect, useCallback} from 'react';
import {StyleSheet, View} from "react-native";
import Post from "./Post";
import APIStore from "../../state/APIStore";
import {observer} from "mobx-react-lite";

const Posts = observer(props => {
    const getPosts = useCallback(async () => {
        await APIStore.actions.post.get();
    }, []);

    useEffect(() => {
        getPosts();
    }, []);

    return <View style={styles.posts}>
        {APIStore.posts.map((post, key) => <Post key={key} {...post} />)}
    </View>
});

const styles = StyleSheet.create({
    posts: {
        alignSelf: 'stretch'
    }
});

export default React.memo(Posts);