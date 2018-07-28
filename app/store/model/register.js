import { observable, action } from 'mobx';
import { ProgramType, getSomeStudentInfo, createTest, isNotExistStudent } from '../../service/dataService/registerService';
import { pushToArray } from '../../service/mappingService/mappingServices';
import { covertDatetoString, generate_testing_invoiceNo, generate_studentId, createId } from '../utilities';
import { InvoiceTypes, TestFeeStatus } from '../../dummy/status';
import { auth } from '../../service/dataService/dataService';

export default class Register {
    @observable loading = false;
    @observable error = null;
    @observable programTypes = [];
    @observable isRegistered = false;
    @observable studentData = null;
    @observable user = null;

    @action fetchProgramType(instituteKey) {
        unfillteredData = null;
        this.loading = true;
        ProgramType().onSnapshot(docs => {
            this.loading = false;
            unfillteredData = pushToArray(docs);
            unfillteredData.forEach(doc => {
                if (doc.institute.key == instituteKey) {
                    this.programTypes.push({ doc })
                }
            })
        });
    }

    @action changeIsRegister(value) {
        this.isRegistered = value;
    }

    @action getCurrentUser() {
        auth().onAuthStateChanged(user => {
            this.user = user;
        })
        return(this.user);
    }

    @action createTest(nameEng, nameKh, gender, dob, test_type, email_address, mobile_phone, institute, callback) {

        this.loading = true;
        if(!isNotExistStudent){
        const serial_id = generate_studentId();
        const invoiceNo = generate_testing_invoiceNo();
        const isPaid = TestFeeStatus.unpaid;
        var doc_studentId = createId();
        var doc_testing_invoiceId = createId();
        var doc_testing_invoiceDetailId = createId();
        var doc_testingId = createId();
        const invoiceType = InvoiceTypes[0];

        const studentData = {

            key: doc_studentId,
            unique_code: null,   
            nameKh: nameKh,
            nameEng: nameEng,
            gender: gender,
            serial_id: serial_id,
            is_puc_student: false,
            dob: dob,
            dobkey: covertDatetoString(dob, 'YYYYMMDD'),
            mobile_phone: mobile_phone,
            email_address: email_address,
            pob: null,
            marital_status: null,
            nationality: null,
            home_address: null,
            work_place: null,
            position: null,
            parent_name: null,
            spouse_name: null,
            emergency_person_name: null,
            emergency_relationship: null,
            emergency_address: null,
            emergency_phone: null,

            english_school_name: null,
            english_school_province: null,
            english_school_year: null,
            high_school_name: null,
            high_school_province: null,
            high_school_year: null,
            college_school_name: null,
            college_school_degree: null,
            college_school_major: null,
            college_school_year: null,
            university_school_name: null,
            university_school_degree: null,
            university_school_major: null,
            university_school_year: null,
            graduate_school_name: null,
            graduate_school_degree: null,
            graduate_school_major: null,
            graduate_school_year: null,
            education_type_at_puc: null,
            status: 1,
            program_general: institute,
            program_academic: null,
            createdate: new Date(),
            createby: getCurrentUser(), 
            puc_id: null,
            isFromMobile: true,
        };
        ;

        const spsKey = createId();
        const student_puc_profile = {
            key: spsKey,
            create_date: new Date(),
            create_by: getCurrentUser(), 
            major_level: invoiceType,
            program: test_type,
            term: this.data.term, 
            student: getSomeStudentInfo(studentData)
        };



       
        const expiredFee = expiredFeeDate(f.admission_date, this.config)
        const expiredTest = expiredTestDate(f.admission_date, this.config)
        const expiredFeeKey = covertDatetoString(expiredFee, 'YYYYMMDD')
        const expiredTestKey = covertDatetoString(expiredTest, 'YYYYMMDD')


        const testingData = {
            key: doc_testingId,
            unique_code: null,
            serial_id: serial_id,
            nameKh: nameKh,
            nameEng: nameEng,
            gender: gender,
            dob: dob,
            dobkey: covertDatetoString(dob, 'YYYYMMDD'),
            campus: f.campus,
            schoolSession: f.schoolSession,
            mobile_phone: f.mobile_phone,
            email_address: f.email_address,
            test_type: f.test_type,
            student_id: doc_studentId,
            testing_invoice_id: doc_testing_invoiceId,
            // admission_date: covertDatetoString(admission_date, 'YYYYMMDD'), // mobile need this column or not ?
            isPaid: isPaid,
            isPaidTest: false,
            // description: f.description, // mobile need this column or not ?
            status: 1,
            testingStatus: TestingStatus.active,
            createdate: new Date(),
            admission: null,
            // term: term, /// where to get term
            createby: getCurrentUser(),
            // config: this.config,  // what is that this.config come from ?
            expired_fee: expiredFee,
            expired_test: expiredTest,
            expired_fee_key: expiredFeeKey,
            expired_test_key: expiredTestKey,
            branch: null,
            testing_result: null,
            student_puc_profile: spsKey,
            isReTakeTest: false,
        };

        const date = new Date();
        const testingInvoiceData = {
            key: doc_testing_invoiceId,
            create_date: new Date(),
            create_by: getCurrentUser(),
            issue_by: getCurrentUser(),
            issue_date: new Date(),
            user: getCurrentUser(),
            invoice_no: invoiceNo,
            invoice_type: invoiceType,
            payment_type: null,
            student:getSomeStudentInfo(studentData),
            verify_by: getCurrentUser(),
            verify_date: new Date(),
            verify_date_key: covertDatetoString(date, 'YYYYMMDD'),
            invoice_date: covertDatetoString(date, 'YYYYMMDD'),
            invoice_date_key: covertDatetoString(date, 'YYYYMMDD'), 
            course: this.config.admission_code, // don't understqand this.config
            isPaid: false,
            isVoid: false,
            expired_date: expiredFee,
            expired_date_key: expiredFeeKey,
            // price: this.config.admission_code.price,
            // amount: this.config.admission_code.price,
            received_by: null,
            received_date: null,
            received_date_key: null,
            void_by: null,
            void_date: null,
            void_date_key: null,
            term: term,
            major_level: null,
            branch: null,
            testRef: doc_testingId,
            tuition_fee: null,
            SPEL_fee: null,
            late_fee: null,
            ID_card_fee: null,
            enrollment_fee: null,
            admission_fee: null,
            scholarship: null,
            discountPolicy: null,
            prepaid_amount: null,
            discount: null,
            other_deduction: null,
            headerRef: doc_testing_invoiceId,
            paid_for: null,
            isHeader: true,
            // program: this.data.term.institute,
            enroll_verify_by: null,
            enroll_verify_date: null,
            enroll_verify_date_key: null,
        };


        const testingInvoiceDetailData = {
            key: doc_testing_invoiceDetailId,
            create_date: new Date(),
            create_by: getCurrentUser(),
            issue_by: getCurrentUser(),
            issue_date: new Date(),
            user: getCurrentUser(),
            invoice_no: invoiceNo,
            invoice_type: invoiceType,
            payment_type: null,
            student: getSomeStudentInfo(studentData),
            verify_by: getCurrentUser(),
            verify_date: new Date(),
            verify_date_key: covertDatetoString(date, 'YYYYMMDD'),
            invoice_date: covertDatetoString(date, 'YYYYMMDD'),
            invoice_date_key: covertDatetoString(date, 'YYYYMMDD'),
            // course: this.config.admission_code,
            isPaid: false,
            isVoid: false,
            expired_date: expiredFee,
            expired_date_key: expiredFeeKey,
            // price: this.config.admission_code.price,
            // amount: this.config.admission_code.price,
            received_by: null,
            received_date: null,
            received_date_key: null,
            void_by: null,
            void_date: null,
            void_date_key: null,
            term: this.term,
            major_level: null,
            branch: f.campus,
            testRef: doc_testingId,
            tuition_fee: null,
            SPEL_fee: null,
            late_fee: null,
            ID_card_fee: null,
            enrollment_fee: null,
            admission_fee: null,
            scholarship: null,
            discountPolicy: null,
            prepaid_amount: null,
            discount: null,
            other_deduction: null,
            headerRef: doc_testing_invoiceId,
            paid_for: null,
            isHeader: false,
            program: this.data.term.institute,
            enroll_verify_by: null,
            enroll_verify_date: null,
            enroll_verify_date_key: null,
        };

        const serial = this.config.serial_number + 1;
        const invoiceShufit = this.config.invoice_shufit + 1;
        createTest(studentData, testingData, testingInvoiceData, testingInvoiceDetailData, student_puc_profile, serial, invoiceShufit).then(() => {
            callback(true, null);
            this.loading = false;
        }).catch(error => {
            callback(false, error)
            this.loading = false;
        })
    }else{
        callback(false,'This student is already registered.')
    }
}

}
