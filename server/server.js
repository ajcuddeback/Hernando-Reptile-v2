const express = require("express");
const app = express();
const routes = require('./routes');
const sequelize = require('./config/connection');

require('dotenv').config();

const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
    secret: process.env.SECRET,
    cookie: {httpOnly: false},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    })
}

app.use(session(sess));

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

// This is your real test secret API key.
const stripe = require("stripe")(`${stripeSecretKey}`);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const calculateOrderAmount = items => {
    return items[0].price;
};

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "usd"
    });

    res.send({
        clientSecret: paymentIntent.client_secret
    });
});

app.use(routes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
});