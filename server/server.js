const express = require("express")

const app = express()

app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );

let port = 4444;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})