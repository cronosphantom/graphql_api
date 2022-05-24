import { JsonWebTokenError } from "jsonwebtoken";


export const mailer = function(to: string, subject: string, templateData: any , template: string){

    // const api_key = 'key-7feebf9e516c407250a971d69230c72e';
    // const domain = 'mg.edrivenapps.com';
    const api_key = 'e65b606f585d2d08519e12336e4edf9f-77751bfc-ee219a58';
    const domain = 'entwinedating.com';
    const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
    var data = {
    from: 'Entwine Support <levar.berry@entwinedating.com>',
    to,
    subject,
    text: 'Testing some Mailgun awesomeness!',
    template,
 	'h:X-Mailgun-Variables': JSON.stringify(templateData)
    };
 
    mailgun.messages().send(data, function (error: any, body: any) {
    console.log(error,body);

    });
    return "OK"
}

// const data = {
// 	from: "Mailgun Sandbox <postmaster@mg.edrivenapps.com>",
// 	to: "levar.berry@edrivenapps.com",
// 	subject: "Hello",
// 	template: "entwine_verify_email",
// 	'h:X-Mailgun-Variables': {test: "test"}
// };