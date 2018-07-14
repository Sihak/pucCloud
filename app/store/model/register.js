import { observable, action } from 'mobx';
import { ProgramType } from '../../service/dataService/registerService';
import { pushToArray } from '../../service/mappingService/mappingServices';

export default class Register {

    @observable loading = false;
    @observable error = null;
    @observable programTypes = [];
    @observable preRegister = null;
    @action fetchProgramType(instituteKey) {
        unfillteredData = null;
        ProgramType().onSnapshot(docs => {
            unfillteredData = pushToArray(docs);
            unfillteredData.forEach(doc => {
                if (doc.institute.key == instituteKey) {
                    this.programTypes.push({ doc })
                }
            })
        });

    }

    @action onPreRegister(
        firstName,
        lastName,
        khmerFirstName,
        khmerLastName,
        gender,
        mobilePhone,
        email,
        date_of_birth,
        program,
        admission_date,
        description,
    ) {
        this.preRegister = {
            firstName:firstName,
            lastName:lastName,
            khmerFirstName:khmerFirstName,
            khmerLastName:khmerLastName,
            gender:gender,
            mobilePhone:mobilePhone,
            email:email,
            date_of_birth:date_of_birth,
            program:program,
            admission_date:admission_date,
            description:description,
        }
    }
}