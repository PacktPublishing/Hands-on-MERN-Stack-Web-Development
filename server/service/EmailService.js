class EmailService {
  sendEmail = (user, token) => {
    console.log(`[Email Service.sendEmail] To login as ${user.email} go to http://localhost:3000/auth/${token}`);
  };
}

const EmailServiceSingleton = new EmailService();

export default EmailServiceSingleton;
