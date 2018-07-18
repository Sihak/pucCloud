import { observable, action } from 'mobx';
import { auth } from '../../service/dataService/dataService';

export default class User {

    constructor() {
        // auth().signOut()
    }

    @observable user = null;
    @observable loading = false;
    @observable error = null;

    @action signInUser(email, password, callback) {
        this.loading = true;
        auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(error => {
                this.loading = false;
                callback(false, error)
            }).then(account => {
                this.loading = false;
                callback(true, account)
            })
    };
    @action signupUser(email, password, callback) {
        auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(error => {
                this.loading = false;
                callback(false, error)
            }).then(account => {
                this.loading = false;
                callback(true, account)
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
            this.loading = false;
        }).catch(function (error) {
            this.loading = false;
            this.error = error;
        });
    }

    @action userSignOut() {
        auth().signOut();
    }
}