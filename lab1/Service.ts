interface IService {
  name: string;
}

class Service {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export { IService, Service };
