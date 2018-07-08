import firebase from 'react-native-firebase';
export function getPrograms(type){
    return( 
        firebase.firestore().collection(type)
    )
}

export function insertUser(type){
    return(
        firebase.firestore().collection(type)
    )
}