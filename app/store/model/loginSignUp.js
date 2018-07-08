import { observable, action } from 'mobx';

export default class loginSignUp {
    @observable segmentControl = 'login';
    @action onSegment(value){
        this.segmentControl = value
    }
}