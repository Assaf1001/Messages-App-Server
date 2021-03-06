const express = require("express");
const cors = require("cors");
require("./db/mongoose.js");

const messageRouter = require("./routers/messageRouter.js");

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use(messageRouter);

app.listen(port, () => {
    console.log("Server is connencted, Port:", port);
});
