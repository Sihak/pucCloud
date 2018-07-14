import { observable, action } from 'mobx';
import { auth } from '../../service/dataService/dataService';

export default class User {

    constructor(){
        this.getCurrentUser();
        // auth().signOut()
    }

    @observable user = null;
    @observable loading = false;
    @observable error = null;

    @action signInUser(email,password){
        this.loading = true;
        auth().signInAndRetrieveDataWithEmailAndPassword(email,password).then(user => {
            this.loading = false;
            this.user = user;
        }).catch(error => {
            this.loading = false;
            this.error = error;
        })
    };
    @action signupUser(email,password){
        this.loading = true;
        auth().createUserAndRetrieveDataWithEmailAndPassword(email,password).then(user => {
            this.loading = false;
            this.user = user;
        }).catch(error => {
            this.loading = false;
            this.error = error;
        })
    };

    @action getCurrentUser(){
        this.loading = true;
        auth().onAuthStateChanged(user => {
            this.loading = false;
            this.user = user;
        })
    }
}