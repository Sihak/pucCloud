import * as moment from 'moment';
import firebase from 'react-native-firebase';

export function validateEmail(text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
        return false;
    }
    else {
        return text;
    }
}

export function covertDatetoString(value, format) {
    return moment(value).format(format);
}


export function generate_studentId(serial_number) {
    var id = Number(serial_number) + 1
    return id.toString();
}


export function generate_testing_invoiceNo(invoice_shufit) {
    var number = moment().format('YYMMDD').toString() + (invoice_shufit + 1).toString();
    return number;
}


export function createId() {
    return firebase.firestore().collection('students').doc().id;
}
