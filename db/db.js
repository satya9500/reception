const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-nif8p.mongodb.net/reception?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true
  }
);
