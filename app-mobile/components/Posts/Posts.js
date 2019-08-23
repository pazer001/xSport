import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from "react-native";
import Post from "./Post";

const protocol = 'http';
const host = '192.168.68.106';
const postPort = 8083;
const Posts = props => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const url = `${protocol}://${host}:${postPort}/post`;
        const postsResults = await fetch(url);
        const postsResultsJson = await postsResults.json()
        setPosts(postsResultsJson)
    };

    useEffect(() => {
        getPosts();
    }, []);

    return <View style={styles.posts}>
        {posts.map((post, key) => <Post key={key} content={post.content} tags={post.tags} />)}
    </View>
};

const styles = StyleSheet.create({
    posts: {
        alignSelf: 'stretch'
    }
});

export default React.memo(Posts);