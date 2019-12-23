import { Selector } from 'testcafe';

const label = Selector('label');


export default class Page {
    constructor () {
        this.nameInput  = Selector('#tsf > div:nth-child(2) > div.A8SBwf.emcav > div.RNNXgb > div > div.a4bIc > input');
    }
}
