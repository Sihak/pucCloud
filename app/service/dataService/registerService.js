import firebase from "react-native-firebase";

export function ProgramType(){
    return(
        firebase.firestore().collection('testType').where('status','===',1)
    )
}
