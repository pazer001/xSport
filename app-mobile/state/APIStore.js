import React, {useState} from 'react';
import axios from 'axios';
import {observable} from "mobx";

const PROTOCOL = 'http';
const HOST = '192.168.68.106';
const PORTS = {
    post: 8082
};

const headers = {'Authorization': 'A12b'};
const config = {headers};

const APIStore = observable({
    posts: [],
    actions: {
        post: {
            base: () => `${PROTOCOL}://${HOST}:${PORTS['post']}/post`,
            get: async () => {
                const url = APIStore.actions.post.base();
                const posts = await axios.get(url, config);
                APIStore.posts = posts.data;
            },
            like: async (_id, personId) => {
                if (!_id) return;
                const url = `${APIStore.actions.post.base()}/like/${_id}`;
                await axios.patch(url, {personId}, config);
                await APIStore.actions.post.get();
            }
        }
    }
});

export default APIStore;