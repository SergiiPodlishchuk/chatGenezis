"use strict";

const express = require("express");
const cors = require("cors");

const uuid = require("uuid");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

let contacts = [
  {
    name: "Echo Bot",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0rZS2rGAq7irMkh6DH_pLFyi_uUI_hzTxQ&usqp=CAU",
    isOnline: true,
    messageHistory: [{ message: "Hello", toWhom: "me" }],
    id: 1,
  },
  {
    name: "Reverse Bot",
    image: "https://images.ua.prom.st/1392362577_w640_h640_1392362577.jpg",
    isOnline: true,
    messageHistory: [],
    id: 2,
  },
  {
    name: "Spam Bot",
    image:
      "http://ic.pics.livejournal.com/obninskchess_ru/72180556/147342/147342_original.jpg",
    isOnline: true,
    messageHistory: [],
    id: 3,
  },
  {
    name: "Ignore Bot",
    image:
      "http://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/software-bot-web-nordic-apis-slack-api.jpg",
    isOnline: true,
    messageHistory: [],
    id: 4,
  },
];

const rooms = new Map();

rooms.set("users", contacts);

app.use(cors());
app.use(express.json());

app.get("/chat", (req, res) => {
  res.json(contacts);
});

app.post("/chat", (req, res) => {
  const { value, userName } = req.body;
  console.log(req.body);
  // if (!rooms.has(roomId)) {
  //   rooms.set(
  //     roomId,
  //     new Map([
  //       ["users", new Map()],
  //       ["messages", []],
  //     ])
  //   );
  // }
  res.send();
});

io.on("connection", (socket) => {
  // socket.on("ROOM:JOIN", (data) => {
  //   console.log(data);
  // });
  console.log("user connected", socket.id);
});

server.listen(8080, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("server start");
});
