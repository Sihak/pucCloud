import { observable, action } from 'mobx';
import { getAuth, signinMethod, signupMethod, updateUser } from '../../service/auth-services';
import { Alert } from 'react-native';
export default class Auth {
    constructor() {
        this.fetchAuth();
    }
    @observable mobxProps = null;
    @observable auth = null;
    @observable user = null;
    @observable loading = false;
    @observable error = null;
    @observable fromMe = false;

    @observable userName = null;
    @observable phoneNumber = null;
    @observable email = null;
    @observable vPassword = null;
    @observable password = null;
    @observable message = 'Your password is not match.';

    @action onLogout() {
        this.loading = true;
        getAuth().signOut().then(() => {
            this.fetchAuth();
            this.loading = false;
        });
    }

    @action fetchAuth() {
        this.loading = true;
        getAuth().onAuthStateChanged(user => {
            if (user) {
                this.loading = false;
                this.auth = user;
                this.getUserInfo()
            } else {
                this.user = null;
                this.loading = false;
            }
        });
    }

    @action async clickLogin() {
        this.setFromMe(true);
        this.mobxProps.navigation.navigate('LoginSignUp')
    }

    @action onLogin(email, password) {
        if (!this.email == null || !this.password) {
            this.loading = false;
            Alert.alert(
                'Login fail',
                'Please enter Email or password.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }
        else {
            this.loading = true;
            signinMethod(email, password).then(async (user) => {
                this.auth = user;
                this.loading = false;
                await this.mobxProps.navigation.goBack()
                !this.fromMe && this.mobxProps.navigation.navigate('Form')
            }).catch(error => this.error = error);
        }
    }

    @action onSignUp(email, password, userName, phoneNumber) {
        if (this.vPassword == this.password) {
            this.loading = true;
            signupMethod(email, password).then(async (user) => {
                this.auth = user
                this.updateUser(userName, phoneNumber)
                this.loading = false
                await this.mobxProps.navigation.goBack()
                !this.fromMe && this.mobxProps.navigation.navigate('Form')
            }).catch(error => this.error = error);
        } else {
            this.loading = false;
            Alert.alert(
                'Sign up fail',
                this.message,
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }
    }


    @action getUserInfo() {
        this.user = getAuth().currentUser;
    }

    @action updateUser(userName, phoneNumber) {
        this.loading = true;
        updateUser().updateProfile({
            displayName: userName,
            phoneNumber: phoneNumber
        }).then(() => {
            this.getUserInfo();
            this.loading = false;
        }).catch(error => console.log('ERROR', error))
    }

    @action enterUserName(userName) {
        this.userName = userName;
    }

    @action enterPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @action enterEmail(email) {
        this.email = email;
    }

    @action varifyPassword(vPassword) {
        this.vPassword = vPassword;
    }

    @action enterPassword(password) {
        this.password = password;
    }

    @action switchProps(props) {
        this.mobxProps = props;
    }
    @action setFromMe(value) {
        this.fromMe = value;
        console.log('FromMe',this.fromMe)
    }
}