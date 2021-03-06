const express = require("express");
const Message = require("../modals/messageModal.js");

const router = new express.Router();

router.get("/messages/getAll", async (req, res) => {
    try {
        const messages = await Message.find({});

        res.send(messages);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/messages/add", async (req, res) => {
    const message = new Message(req.body);

    try {
        await message.save();
        res.status(201).send(message);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete("/messages/deleteAll", async (req, res) => {
    try {
        await Message.deleteMany({});
        res.send();
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
