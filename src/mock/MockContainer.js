import MockAdapter from "axios-mock-adapter";
import { categories } from "./responseData/categories";
import { posts } from "./responseData/posts";

export class MockContainer {
    constructor (axios) {
        this.mock = new MockAdapter(axios)
        this.createResponse();
    }

    createResponse () {
        this.mock.onGet('/').reply(200, categories);
        this.mock.onGet(new RegExp(`/[1-9]`)).reply(200, posts);
        const url = new RegExp(`/^\d$/`)
        console.log(url)
        this.mock.onGet(new RegExp(`/[1-9]`) + new RegExp(`/[1-9]`)).reply(200, posts[0]);
    }
}
