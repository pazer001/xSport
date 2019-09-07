import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CardItem, Body, Button, Text} from "native-base";
import {Card,} from 'react-native-elements'
import {Textarea} from "native-base";
import APIStore from "../../state/APIStore";
import ViewStoreContext from "../../state/ViewStore";

const CreatePost = props => {
    const [content, setContent] = useState(false);
    const ViewStore     =   useContext(ViewStoreContext);
    const createPost = async () => {
        await APIStore.actions.post.create(content)
        ViewStore.actions.toggleShowCreatePost()
    };

    return <View style={styles.createPost}>
        <Card>
            {/*<CardItem header>*/}
                <Button full onPress={createPost}><Text>Send</Text></Button>
            {/*</CardItem>*/}
            <CardItem>
                <Body>
                    <Textarea full onChangeText={content => setContent(content)} rowSpan={10} placeholder="Textarea"/>
                </Body>
            </CardItem>
            <CardItem footer>

            </CardItem>
        </Card>
    </View>
};

const styles = StyleSheet.create({
    createPost: {
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'stretch'
    },
    input: {
        height: 150
    },
    footer: {
        flex: 1,
        alignSelf: 'stretch'
    }
});

export default React.memo(CreatePost);