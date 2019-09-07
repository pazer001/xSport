import React, {useCallback} from 'react';
import {Card, Text, Badge} from "react-native-elements";
import {View} from "react-native";
import APIStore from "../../state/APIStore";
import {CardItem, Icon} from "native-base";

const Post = props => {
    const {_id, content, tags, isLiked, likesLength} = props;

    const like = useCallback(async () => {
        if (!isLiked) {
            await APIStore.actions.post.like(_id);
        } else {
            await APIStore.actions.post.dislike(_id);
        }
    }, [isLiked]);

    return <Card>
        <CardItem>
            <Text>{content}</Text>
            <View style={{alignItems: 'flex-start', marginTop: 10, marginBottom: 10}}>
                {tags.map((tag, key) => <Badge key={key} status="success" value={tag}/>)}
            </View>
        </CardItem>
        <CardItem footer>
            <Icon type="AntDesign" onPress={like} name="like2" style={{color: isLiked ? 'red' : undefined}}/>
            {Boolean(likesLength) && <Text onPress={like}>{likesLength} {likesLength === 1 ? 'Like' : 'Likes'}</Text>}
        </CardItem>
    </Card>
};

export default React.memo(Post);