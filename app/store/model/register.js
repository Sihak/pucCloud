import { observable, action } from 'mobx';
import { insertUser } from '../../service/registration-services';

export default class Register {
    @observable loading = false;
    @observable isDateTimePickerVisible = false;
    @observable khmerName = null;
    @observable englishName = null;
    @observable selectedGender = null;
    @observable dateOfBirth = null;
    @observable mobilePhone = null;
    @observable email = null;
    @observable program = null;
    @observable selectedProgram = null;
    @observable administrationDate = null;
    @observable description = null;



    @action onShowDateTime(){
        this.isDateTimePickerVisible = true
    }
    @action onHideDateTime(){
        this.isDateTimePickerVisible = false
    }

    @action getPrograms(program){
        switch (program){
            case 'academic-program': return(
                this.program = programs = [
                    'IEAP',
                    'GESL',
                    'PEP'
                ]
            )
            break;
            case 'english-program': return(
                this.program = programs = [
                    'IEAP',
                    'GESL',
                    'PEP'
                ]
            )
            
            break;
            case 'thai-program': return(
                this.program = programs = [
                    'IEAP',
                    'GESL',
                    'PEP'
                ]
            )
            
            break;
            case 'japanese-program': return(
                this.program = programs = [
                    'IEAP',
                    'GESL',
                    'PEP'
                ]
            )
            
            break;
            case 'chinese-program': return(
                this.program = programs = [
                    'IEAP',
                    'GESL',
                    'PEP'
                ]
            )
            break;
        
        }
    
          }

    @action registerForClass(type){
        this.loading = true;
        insertUser(type).add({
            khmerName: this.khmerName,
            englishName: this.englishName,
            gender: this.selectedGender,
            dateOfBirth: this.dateOfBirth,
            mobilePhone: this.mobilePhone,
            email: this.email,
            program: this.selectedProgram,
            administrationDate: this.administrationDate,
            description: this.description,
        }).then(() => {
            this.loading = false
        }).catch(error => console.log('Error',error))
    }
    @action enterData(value, type) {
        switch (type) {
            case 'khmerName': return (
                this.khmerName = value
            )
                break;
            case 'englishName': 
                this.englishName = value
            
                break;
            case 'gender': 
                this.selectedGender = value
            
                break;
            case 'dateOfBirth': 
                this.dateOfBirth = value
                this.onHideDateTime()
            
                break;
            case 'mobilePhone': 
                this.mobilePhone = value
            
                break;
            case 'email': 
                this.email = value
        
                break;
            case 'selectedProgram': 
                this.selectedProgram = value
    
                break;
            case 'administrationDate': 
                this.administrationDate = value
                break;
            default: return (this.description = value)
        }
    };
}