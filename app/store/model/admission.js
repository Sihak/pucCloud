import { observable, action } from 'mobx';
import { getPrograms } from '../../service/data-services';
import * as mapping from '../../service/mapping-services'

export default class Admission {
  @observable programs = null;
  @observable loading = null;
  
  constructor(){}

  @action
  fetchPrograms() {
    this.loading = true;
    getPrograms().onSnapshot(docs => {
      if (!docs.empty) {
        this.programs = mapping.pushToGroupArray(docs, 'institute.key', 'institute.name')
      }
      this.loading = false;
    })
  }

}