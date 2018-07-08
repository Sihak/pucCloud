import firebase from 'react-native-firebase'

export function getGridButtons(){
    return(
        firebase.firestore().collection('gridButtons')
    )
}