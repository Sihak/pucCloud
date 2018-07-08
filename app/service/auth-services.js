import firebase from 'react-native-firebase';
export function getAuth(){
    return(
        firebase.auth()
    )
};

export function signinMethod(email,password){
    return(
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,password)
    )
};

export function signupMethod(email,password){
    return(
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password)
    )
};

export function updateUser(){
    return(
        firebase.auth().currentUser
    )
}

