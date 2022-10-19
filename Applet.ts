import { ITrigger } from "./Trigger";
import { IAction } from "./Action";

interface IApplet {
  name: string;
  trigger: ITrigger;
  action: IAction;
}

class Applet {
  name: string;
  trigger: ITrigger;
  action: IAction;

  constructor(name: string, trigger: ITrigger, action: IAction) {
    this.name = name;
    this.trigger = trigger;
    this.action = action;
  }
}

export { IApplet, Applet };
