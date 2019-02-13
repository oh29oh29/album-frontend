import MockAdapter from "axios-mock-adapter";
import { categories } from "./responseData/categories";
import { posts } from "./responseData/posts";

export class MockContainer {
    constructor (axios) {
        this.mock = new MockAdapter(axios)
        this.createResponse();
    }

    createResponse () {
        this.mock.onGet('/categories').reply(200, categories);
        this.mock.onGet('/post').reply(200, posts);
    }
}
