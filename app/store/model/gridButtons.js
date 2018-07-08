import { observable, action } from 'mobx';
import { getGridButtons } from '../../service/gridButton-services';
import { pushToArray } from '../../service/mappingServices/mappingToArray';
export default class GridButtons {
    constructor(){
        this.fetchGridButton()
    }
    @observable loading = false;
    @observable gridButtons = [];
    @action fetchGridButton = () => {
        this.loading = true;
        getGridButtons().onSnapshot( buttons => {
            this.gridButtons = pushToArray(buttons);
            this.loading = false;
        })
    }
}