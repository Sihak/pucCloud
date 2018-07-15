import { observable, action } from 'mobx';
import { auth } from '../../service/dataService/dataService';

export default class User {

    constructor() {
        this.getCurrentUser();
    }

    @observable user = null;
    @observable loading = false;
    @observable error = null;

    @action signInUser(email, password, callback) {
        this.loading = true;
        auth().signInAndRetrieveDataWithEmailAndPassword(email, password).then(user => {
            this.loading = false;
            this.getCurrentUser();
            callback(true,false)
        }).catch(error => {
            this.loading = false;
            this.error = error;
        })
    };
    @action signupUser(email, password, callback) {
        this.loading = true;
        auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).then(user => {
            this.loading = false;
            this.getCurrentUser();
            callback(true,false)
        }).catch(error => {
            this.loading = false;
            this.error = error;
        })
    };

    @action getCurrentUser() {
        this.loading = true;
        auth().onAuthStateChanged(user => {
            this.loading = false;
            this.user = user;
        })
    }

    @action upDateDisplayName(name) {
        this.loading = true;
        auth().currentUser.updateProfile({
            displayName: name,
        }).then((user) => {
            this.user = user;
            this.loading = false;
        }).catch(function (error) {
            this.loading = false;
            this.error = error;
        });
    }

    @action  userSignOut(){
       auth().signOut();
    }
}