import { observable, action } from 'mobx';
import { ProgramType } from '../../service/dataService/registerService';
import { pushToArray } from '../../service/mappingService/mappingServices';

export default class Register {

    @observable loading = false;
    @observable error = null;
    @observable programTypes = [];
    @observable Register = null;
    @observable isRegistered = false;

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

    @action register(
        khmerName, englishName, gender, date_of_birth, mobilePhone, email, program
    ) {
        this.preRegister = {
            khmerName: khmerName,
            englishName: englishName,
            gender: gender,
            mobilePhone: mobilePhone,
            email: email,
            date_of_birth: date_of_birth,
            program: program,
        }
    }

    @action changeIsRegister(value){
        this.isRegistered = value;
    }
}