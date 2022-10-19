import { IService } from "./Service";
import { IApplet } from "./Applet";

interface IUser {
  email: string;
  password: string;
  services: IService[];
}

class User {
  email: string;
  password: string;
  services: IService[] = [];
  applets: IApplet[] = [];

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  addService(service: IService) {
    this.services.push(service);
  }

  addApplet(applet: IApplet) {
    this.applets.push(applet);
  }
}

export { IUser, User };
