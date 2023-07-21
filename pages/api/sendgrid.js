import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  console.log(req.body);
  console.log("SENDING");
  let sendgridResponse;
  try {
    sendgridResponse = await sendgrid.send({
      to: "wojtekwieclawski@gmail.com",
      from: {
        email: "contactform@wiwoproduction.com",
        name: "Contact | wiwoproduction.com",
      },
      subject: `Email from wiwoproduction.com`,
      replyTo: {
        email: `${req.body.email}`,
        name: `${req.body.name}`,
      },
      html: `<div>Mail from:: ${req.body.name} (${req.body.email})</div>
      <div style="white-space: pre-wrap;">${req.body.body}</div>
      `,
    });
    console.log(sendgridResponse);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  console.log("EMAIL SEND");
  return res.status(200).json({ message: "EMAIL SENT", status: "200" });
}

export default sendEmail;
