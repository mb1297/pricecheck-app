const express = require("express")
const path = require("path")
const { eventNames, env } = require("process")

const app = express()

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"))
})

app.listen(process-env.PORT || 8070, () => console.log("Server running..."))