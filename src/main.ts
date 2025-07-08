import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";

const user = new User("example@email.com", "+380123456789", "device-token-abc");

const logger = new Logger();
const email = new EmailNotification(logger);
const sms = new SMSNotification(logger);
const push = new PushNotification(logger);

const notificationService = new NotificationService([email, sms, push]);

notificationService.notify(user, "Ваш платіж оброблено успішно!");