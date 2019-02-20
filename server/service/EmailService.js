class EmailService {
  sendEmail = (user, token) => {
    console.log(`[Email Service.sendEmail] The token is: ${token}`);
  };
}

const EmailServiceSingleton = new EmailService();

export default EmailServiceSingleton;
