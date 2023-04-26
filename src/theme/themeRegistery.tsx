import React from "react";
import themes from "./themes";
// nothing to do here
let instance: ComponentRegistry;
let globalState: {
  components: {
    [theme: string]: {
      [name: string]: React.ComponentType<any>;
    };
  };
} = {
  components: themes,
};
//
class ComponentRegistry {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }
    instance = this;
  }

  getComponent = (name: string, theme: string) => {
    if (globalState.components[theme] && globalState.components[theme][name]) {
      return globalState.components[theme][name];
    }
    return globalState.components["Base"][name];
  };
}

export default Object.freeze(new ComponentRegistry());
