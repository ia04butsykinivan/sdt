interface IAction {
  name: string;
}

class Action {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export { IAction, Action };
