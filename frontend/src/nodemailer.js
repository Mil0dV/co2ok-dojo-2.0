import nodemailer from 'nodemailer'
require('dotenv').config()

class Nodemaile {

    constructor(){

    }

    sendmail(email) {

        let transporter = nodemailer.createTransport({
            server: 'gmail',
            auth: {
                user: 'process.env.Email',
                pass: 'process.env.PASSWORD'
            }
        });

        let result = 'ninja@pass.'
        let generatedPass = result += Math.random().toString(36).substring(2, 7)

        let mailOptions = {
            from: 'kevieasky@gmail.com',
            to: email,
            subject: 'Password recovery',
            html: `<div style = "width: 700px; height: auto; display: flex;flex-direction:column; justify-content:center;align-items:center;">Password recovery<h3 style="text-align-left;"> < /h3><p style="margi-bottom: 5px;text-align-left;">Hallo,<br>hallo,<br><br>You recently requested a password reset. You will find below your temporary password. Do not forget to change it once login.<br>Temporary password: ${generatedPass}<br><br>Tank you for helping us fight climate change<br><br>Milo de Vries, Co2ok</p > < /div>`
        }

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log(err);

            } else {
                console.log('email send', data);

            }
        })

    }

}

export default new Nodemaile()