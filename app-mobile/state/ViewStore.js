import {createContext} from 'react';
import {observable} from 'mobx';

const ViewStore     =   observable({
    showCreatePost: false
});

export default ViewStoreContext   =   createContext(ViewStore);
