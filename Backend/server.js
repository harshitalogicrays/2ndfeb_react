import express from "express"
const app = express();
import Stripe from 'stripe'
import cors from 'cors'
import nodemailer from "nodemailer"

const stripe = new Stripe('sk_test_51NOvqGSAvExKFAjaTkSgqxNXs5WQ8TofJQrBOJIhdkFNDBKzqbWwMSYYzbsfP6ozzQ1n3sljsSbCVHYnMhcePzGz00PbYWzMiX');

app.use(cors());
app.use(express.json());

//http://localhost:1000
app.get('/',(req,res)=>{
    res.send("hello from server")
})

//http://localhost:1000/create-payment-intent
app.post("/create-payment-intent", async (req, res) => {
  console.log(req.body)
  let {totalAmount}=req.body
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount*100,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "harshita.logicrays@gmail.com",
    pass: "heyq imug obue ldsk",
  },
});

app.post('/sendmail',async(req,res)=>{
  let {email,status,name,amount,payment} =  req.body
  try{
    const info = await transporter.sendMail({
      from: '"Admin" <harshita.logicrays@gmail.com>', 
      to: email,
      subject: `your order has been ${status}`, 
      text:  `Hello ${name}`, 
      html: `Hello ${name}<br/><b>Thank you for ordering from us </b><br> Amount = ${amount}<br/>
              Order Status : ${status}<br/>
              Payment:${payment}<br/>
              Thank You<br/>Admin `, 
    });
    res.send({'message':'Mail Sent'}) 
  }
 catch(error){ res.send({'message':'Something went wrong'})}

})

const PORT=1000
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))