import React, {useEffect, useCallback} from 'react';
import {StyleSheet, View} from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
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

    return <Container style={styles.posts}>
        <Content>

                {APIStore.posts.map((post, key) => <Post key={key} {...post} />)}

        </Content>
    </Container>
});

const styles = StyleSheet.create({
    posts: {
        alignSelf: 'stretch'
    }
});

export default React.memo(Posts);