import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import { Card, Button } from 'react-native-elements'
import { Textarea } from "native-base";
import MainContext from "../../state/MainContext";

const CreatePost    =   props   =>  {
    const {show}    =   props;
    const mainContext   =   useContext(MainContext);
    console.log(mainContext)
    if(!show) return null;
    return <View style={styles.createPost}>
        <Card>
            <Textarea rowSpan={5}  placeholder="Textarea" />
            <Button title="Send"
                    // onPress={() => this.setState({ active: !this.state.active })}
                    containerStyle={styles.button}
            />
        </Card>
    </View>
};

const styles = StyleSheet.create({
    createPost: {
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'stretch'
    },
    button: {
        marginTop: 10
    },
    input: {
        height: 150
    }
});

export default React.memo(CreatePost);