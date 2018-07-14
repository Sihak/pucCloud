import firebase from 'react-native-firebase';

export function getPrograms(){
   return( firebase.firestore().collection('institutes'));
};


export function auth(){
    return( firebase.auth());
}


