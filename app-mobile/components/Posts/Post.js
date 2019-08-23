import React from 'react';
import {Button, Card, Text, Badge} from "react-native-elements";
import {View} from "react-native";

const Post = props => {
    const {content, tags} = props;
    return <Card>
        <Text>{content}</Text>
        <View style={{alignItems: 'flex-start', marginTop: 10, marginBottom: 10}}>
            {tags.map((tag, key) => <Badge key={key} status="success" value={tag} />)}
        </View>
        <View><Button title="Like!"/></View>
    </Card>
};

export default React.memo(Post);