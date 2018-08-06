import { observable, action } from "mobx";
import { getEnvironment } from "../../service/dataService/dataService";
import { pushToObject } from "../../service/mappingService/mappingServices";

export default class Environment {
  @observable data = null;
  @observable loading = false;
  @observable error = null;

  constructor(){
    this.fetchEnvironment()
  }

  @action
  fetchEnvironment() {
    this.loading = true;
    getEnvironment().onSnapshot(docs => {
        this.loading = false;
        this.data = pushToObject(docs);
      });
  }
}
