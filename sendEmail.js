const nodemailer = require('nodemailer');

async function sendEmail() {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'Youremail',
        pass: 'Yourpass',
      },
    });

    // Configure the email options
    const mailOptions = {
      from: 'Youremail',
      to: 'Youremail',
      subject: ' Notification',
      html: `
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>
                .card {
                    text-align: center;
                    width: 100%;
                    background-color: rgb(223, 243, 223);
                }
            </style>
        </head>
        <body>
            <div class="card"><br/>
                <h4>Hello Dear, <b>{ABC,Name}</b></h4><br />
                <a>Someone has quoted a lower bid than your last bid to the requirement id ___, place a lower bid to grab this order soon!</a><br />
                <h5>
                    Wish Regards <br /> Team TSS
                </h5>
            </div>
        </body>
        
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();
