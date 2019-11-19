const express = require("express")
const path = require('path'); // Usually moved to the start of file


const app = express()


app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

let port = 4444;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})