import MockAdapter from "axios-mock-adapter";
import { categories } from "./responseData/categories";
import { posts } from "./responseData/posts";

export class MockContainer {
    constructor (axios) {
        this.mock = new MockAdapter(axios);
        this.saveInitData();
        this.createResponse();
    }

    saveInitData () {
        console.log(posts);
        localStorage.setItem('categories', JSON.stringify(categories));
        localStorage.setItem('category1Posts', JSON.stringify(posts.category1Posts));
        localStorage.setItem('category2Posts', JSON.stringify(posts.category2Posts));
        localStorage.setItem('category3Posts', JSON.stringify(posts.category3Posts));
        localStorage.setItem('category4Posts', JSON.stringify(posts.category4Posts));
        localStorage.setItem('totalPosts', JSON.stringify(posts.totalPosts));
    }

    createResponse () {
        this.mock.onGet('/').reply(200, JSON.parse(localStorage.getItem('categories')));
        this.mock.onGet('/1').reply(200, JSON.parse(localStorage.getItem('category1Posts')));
        this.mock.onGet('/2').reply(200, JSON.parse(localStorage.getItem('category2Posts')));
        this.mock.onGet('/3').reply(200, JSON.parse(localStorage.getItem('category3Posts')));
        this.mock.onGet('/4').reply(200, JSON.parse(localStorage.getItem('category4Posts')));
        this.mock.onGet('/1/11').reply(200, JSON.parse(localStorage.getItem('category1Posts'))[0]);
        this.mock.onGet('/1/12').reply(200, JSON.parse(localStorage.getItem('category1Posts'))[1]);
        this.mock.onGet('/1/13').reply(200, JSON.parse(localStorage.getItem('category1Posts'))[2]);
    }
}

