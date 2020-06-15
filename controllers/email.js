let cron = require('node-cron');
let nodemailer = require('nodemailer');
const option = require('../models/option');

module.exports = {
    sendEmail
}

function sendEmail(options,recipientEmailAddr) {
    let optionsDict = {};
    options.forEach(function (option) {
        if (!optionsDict[option.weekday]) {
            optionsDict[option.weekday] = [];
            optionsDict[option.weekday].push(option.optionsList)
    }
        else
            optionsDict[option.weekday].push(option.optionsList);
});
     
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'Jaice561@gmail.com',
            pass: 'Chaice@561'
            }
        });
    for (var weekday in optionsDict) {
        console.log(weekday)
        var optionsTxt = '';
        optionsDict[weekday].forEach(function (txt) {
            optionsTxt += txt + '\n';
        });
      
        var datestr = '08 13 * * ' + weekday;
        console.log(datestr);
     
        let mailOptions = {
            from: 'Jaice561@gmail.com',
            to: recipientEmailAddr,
            subject: 'Here are the Options for '+weekday+'DAY !',
            text: optionsTxt
        };

        var emailtask = cron.schedule(datestr, () => {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });

        emailtask.start();
    }
}