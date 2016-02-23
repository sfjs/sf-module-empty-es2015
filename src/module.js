"use strict";
import sf from 'sf';//resolved by webpack's "externals"

class Module extends sf.modules.core.BaseDOMConstructor{
    constructor(sf, node, options) {
        super()
    }
    get name() {return 'module'};
    die(){

    }


}
export { Module as default };