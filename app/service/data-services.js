import firebase from 'react-native-firebase'

export function getPrograms(){
  return firebase.firestore().collection('testType').where('status','==',1) 
}