'use strict';
/**
 * The Open/Close principle in SOLID design is essentially just the fanciest way of saying, do not
 * rewrite existing code by extending the code. Essentially feel free to extend the OG methods.
 * The official definition states that the classes, functions, modules should open to extension but shoould not allow modification
 */

class SMSSender {
  send(message) {
    console.log(`Here is your OTP: ${message}`);
  }
}

class PushNotificationSender {
  send(message) {
    console.log(`I am a push notification: ${message}`);
  }
}

class EmailSender {
  send(message) {
    console.log(`Here is your OTP: ${message}`);
  }
}

class NotificationService {
  constructor(sender) {
    this.sender = sender;
  }

  notify(message) {
    return this.sender.send(message);
  }
}

const emailNotification = new NotificationService(new EmailSender());
emailNotification.notify('Welcome');

const smsNotifier = new NotificationService(new SMSSender());
smsNotifier.notify('12345');

const pushNotifier = new NotificationService(new PushNotificationSender());
pushNotifier.notify('xoxo');
