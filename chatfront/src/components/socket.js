import io from "socket.io-client";

const socket = io("http://localhost:8080/chat", {
  //   cors: {
  //     origin: "*",
  //   },
});

export default socket;
