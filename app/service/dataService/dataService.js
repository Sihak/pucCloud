import firebase from 'react-native-firebase';

export function getPrograms(){
   return( firebase.firestore().collection('institutes'));
};

export function getEnvironment(){
    return( firebase.firestore().collection('academic_environment').doc('academic_environment'));
 };


export function auth(){
    return( firebase.auth());
}


