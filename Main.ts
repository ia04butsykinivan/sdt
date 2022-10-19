import { User } from "./User";
import { Service } from "./Service";
import { Applet } from "./Applet";
import { Trigger } from "./Trigger";
import { Action } from "./Action";

const user = new User("ia04butsykinivan", "Qwerty123456");

const service = new Service("Skype");

const trigger = new Trigger("Inactive for 5 minutes");
const action = new Action("Set incognito status");
const applet = new Applet(
  "Set incognito status when inactive for 5 minutes",
  trigger,
  action
);

user.addService(service);
user.addApplet(applet);
console.log(user);
