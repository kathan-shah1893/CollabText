import { Server } from "socket.io";
import connection from "./database/db.js"
import { getDocument, updateDocument } from "./controller/controller.js";

connection();

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', socket => {
  socket.on('get-document', async documentId => {
      const document = await getDocument(documentId);
      socket.join(documentId);
      socket.emit('load-document', document.data);

      socket.on('send-changes', delta => {
          socket.broadcast.to(documentId).emit('receive-changes', delta);
      })

      socket.on('save-document', async data => {
          await updateDocument(documentId, data);
      })
  })
});