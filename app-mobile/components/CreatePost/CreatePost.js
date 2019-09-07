import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, CardItem, Body, Text} from "native-base";
import {Card, Button} from 'react-native-elements'
import {Textarea} from "native-base";

const CreatePost = props => {
    const {show} = props;
    if (!show) return null;
    return <View style={styles.createPost}>
        <Card>
            <CardItem header>
                <Text>Create a post</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Textarea rowSpan={5} placeholder="Textarea"/>
                </Body>
            </CardItem>
            <CardItem footer>
                <Icon type="AntDesign" name="like2"/>
                <Icon type="AntDesign" name="dislike2"/>
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