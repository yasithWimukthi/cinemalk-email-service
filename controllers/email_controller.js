import nodemailer from 'nodemailer'


let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "year3sem2projects@gmail.com",
        pass: "AFy3s2@sliit"
    }
});

/**
 * @description: This function is used to send email to the user
 * @returns {object}
 */
const createEmail = async (req, res) => {

    let message = {
        from: process.env.MAIL_USERNAME,
            to: req.body.email,
            subject: 'Payment Completed ✔',
            html:'<h4>Hello Customer: '+req.body.name+' </h4>'+
        '<br/><p><b>'+req.body.description+'</b></p>',

    };

    transport.sendMail(message, (error, info) => {
        if (error) {
            res.status(500).json({"error":error})
        }
        else
        {
            res.status(200).json({"info":info.response})
        }

    });

};


export default createEmail;
