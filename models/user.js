const mongoose = require("mongoose");
const validator = require("validator");
const request = require("request");

const accountSid = "ACcbf2a79c178811a02942546691a7135b";
const authToken = "a48e35a6d339220bd25e23750a583609";
const client = require("twilio")(accountSid, authToken);

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validator: value => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email Address" });
      }
    }
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  checkin: {
    type: Date,
    default: Date.now(),
    required: true
  },
  checkout: {
    type: Date,
    default: null
  }
});

userSchema.pre("save", async function(next) {
  const user = this;
  if (user.checkout == null) {
    const host = "tatsuya9500shiba@gmail.com";
    const url = `https://us-central1-shalini-827ab.cloudfunctions.net/sendMail?dest=${host}&&name=${user.name}&&email=${user.email}&&phone=${user.phone}&&checkin=${user.checkin}&&address=${user.address}`;
    client.messages
      .create({
        body: `
            Visitor Checked In || Name : ${user.name} || Email : ${user.email} || Phone : ${user.phone} || Address : ${user.address}
        `,
        from: "+12512442339",
        to: "+917499791067" //Host phone number
      })
      .then(message => console.log("Message sent"))
      .catch(err => console.log(err));
    await request(url, function(err, res, body) {
      console.log("Checked In");
    });
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
