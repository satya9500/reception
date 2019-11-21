const accountSid = "ACcbf2a79c178811a02942546691a7135b";
const authToken = "a48e35a6d339220bd25e23750a583609";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+12512442339",
    to: "+919369411052"
  })
  .then(message => console.log(message.sid))
  .catch(err => console.log(err));
