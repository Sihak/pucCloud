import { observable, action } from 'mobx'
export default class cNavigation {
    @observable loading = false;
    @observable nameShow = null;
    @observable name = null;
    @observable icon = null;
    @observable color = null;
    @action getGridButtonInfo(nameShow, name, icon, color) {
        this.nameShow = nameShow;
        this.name = name;
        this.icon = icon;
        this.color = color;
    }
}