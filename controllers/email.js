let cron = require('node-cron');
let nodemailer = require('nodemailer');
const option = require('../models/option')

module.exports = {
    sendEmail
}

function sendEmail(option,recipientEmailAddr) {
    var date=new Date(option.date);
    var datestr=''+date.getMinutes()+' '+date.getHours()+' '+date.getDate()+' '+(Number(date.getMonth())+1).toString()+' '+option.weekday;
    console.log(datestr);

let mailOptions = {
    from: 'Jaice561@gmail.com',
    to: recipientEmailAddr,
    subject: 'Email from Node-App: A Test Message!',
    text: option.optionsList
};

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Jaice561@gmail.com',
        pass: 'Chaice@561'
    }
});

var emailtask=cron.schedule(datestr, () => {

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});
});

    emailtask.start();
}