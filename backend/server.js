const express = require('express');

const server = express();

server.use(express.json()) 

server.post('/api/greet', (req, res) => {


  console.log(req.body)
 // res.send("hello... ")
 res.json({message: "hello..." + req.body.name })

})

const port = 6788;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});