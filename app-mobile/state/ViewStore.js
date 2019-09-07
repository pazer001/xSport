import {createContext} from 'react';
import {observable} from 'mobx';

const ViewStore     =   observable({
    showCreatePost: false,
    actions: {
        toggleShowCreatePost: () => {
            console.log(!ViewStore.showCreatePost)
            ViewStore.showCreatePost    =   !ViewStore.showCreatePost;
        }
    }
});

export default createContext(ViewStore);
