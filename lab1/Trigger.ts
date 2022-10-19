interface ITrigger {
  name: string;
}

class Trigger {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export { ITrigger, Trigger };
