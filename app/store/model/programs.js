import { observable, action } from 'mobx';
import { getPrograms } from '../../service/dataService/dataService';
import { pushToArray } from '../../service/mappingService/mappingServices';

export default class Programs{
    @observable programs = [];
    @observable loading = false;
    @observable error = null;


    @action fetchPrograms(){
        this.loading = true;
        getPrograms().where('status', '==', 1).onSnapshot(docs => {
            this.loading = false;
            this.programs = pushToArray(docs);
        })
    }
}