import firebase from 'react-native-firebase';

export function getPrograms(){
   return( firebase.firestore().collection('testType'));
};

export function auth(){
    return( firebase.auth());
}
