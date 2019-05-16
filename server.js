const http = require('http')
const fs = require('fs')
const port = 3001

const server = http.createServer((req, res) => {
    fs.createReadStream(__dirname + '/index.html').pipe(res)
})

server.listen(port, err => {
    if (err) {
        return console.error(err)
    }
    console.log('server listening on ' + port)
})