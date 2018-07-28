import firebase from "react-native-firebase";
import { auth } from "./dataService";

export function ProgramType() {
    return (
        firebase.firestore().collection('testType').where('status', '===', 1)
    )
}


export function isNotExistStudent(nameEng, nameKh, gender, dobKey) {
    firebase.firestore().collection('students')
        .where('email', '==', nameEng)
        .where('name', '==', nameKh)
        .where('gender.key', '==', gender)
        .where('dobKey', '==', dobKey).get().then((student) => {
            if(student.isEmpty){
                return(true);
            }else{
                return(false);
            }
        })
}


export function createTest(student, test, invoice, invoiceDetail, stu_puc_pro, serial, invoiceShufit) {
    const db = firebase.firestore()
    const batch = db.batch()
    batch.set(db.collection('students').doc(student.key), student)
    batch.set(db.collection('student_puc_profile').doc(stu_puc_pro.key), stu_puc_pro)
    batch.set(db.collection('testing').doc(test.key), test)
    batch.set(db.collection('invoices').doc(invoice.key), invoice)
    batch.set(db.collection('invoices').doc(invoiceDetail.key), invoiceDetail)
    batch.update(db.collection('testing_options').doc('general'), { serial_number: serial })
    batch.update(db.collection('testing_options').doc('general'), { invoice_shufit: invoiceShufit })
    return batch
}

export function getSomeStudentInfo(stu) {
    const someInfo = {
        key: stu.key,
        unique_code: stu.unique_code,
        nameKh: stu.unique_code,
        nameEng: stu.nameEng,
        gender: stu.gender,
        serial_id: stu.serial_id,
        dob: stu.dob,
        mobile_phone: stu.mobile_phone,
        email_address: stu.email_address,
        puc_id: null,
    }
    return someInfo;
}
