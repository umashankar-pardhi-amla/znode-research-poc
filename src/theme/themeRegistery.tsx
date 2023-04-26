import React from "react";
import themes from "./themes";
// nothing ot do here
let instance: ComponentsRegostery;
let globalState: {
    compnents: {
        [theme: string]: {
            [name: string] : React.ComponentType<any>
        }
    }
} = {
  compnents: themes
};
//
class ComponentsRegostery {
    constructor() {
        if (instance) {
            throw new Error("New instance cannot be created!!");
        }
        instance = this;
    }

    getComponent = (name: string, theme: string) => {
        if (globalState.compnents[theme] && globalState.compnents[theme][name] ) {
            return globalState.compnents[theme][name] 
        }
        return globalState.compnents['base'][name]
    }
}


export default Object.freeze(new ComponentsRegostery())