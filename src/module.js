"use strict";
import sf from 'sf';//resolved by webpack's "externals"

class Module{
    constructor(sf, node, options) {
        Object.assign(this.__proto__, sf.createModulePrototype().__proto__); //TODO пока не нашёл другого варианта объединения прототипов
    }
    die(){

    }


}
Module.prototype.name = 'module'; //TODO можно ли сделать по другому? this.name в constructor не прокатывает
export { Module as default };