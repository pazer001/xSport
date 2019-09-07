import React, {useCallback} from 'react';
import {Card, Text, Badge} from "react-native-elements";
import {View} from "react-native";
import APIStore from "../../state/APIStore";
import {CardItem, Icon} from "native-base";

const Post = props => {
    const {_id, content, tags, isLiked, likedLength} = props;

    const like  =   useCallback(async ()  =>  {
        if(!isLiked) {
            await APIStore.actions.post.like(_id, 123456);
        } else {
            // await APIStore.actions.post.dislike(_id, 123456);
        }
    }, []);

    return <Card>
        <Text>{content}</Text>
        <View style={{alignItems: 'flex-start', marginTop: 10, marginBottom: 10}}>
            {tags.map((tag, key) => <Badge key={key} status="success" value={tag} />)}
        </View>
        <CardItem footer>
            <Icon type="AntDesign" onPress={like} name="like2" style={{color: isLiked && 'red'}}/>
            {Boolean(likedLength) && <Text onPress={like}>{likedLength} {likedLength === 1 ? 'Like' : 'Likes'}</Text>}
        </CardItem>
    </Card>
};

export default React.memo(Post);