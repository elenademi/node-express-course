const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.end('main page')
      } else if (req.url === '/info') {
        res.end('Learn more about our organization.')
      } else {
        res.end(`
        
        <p>Sorry, we do not have this page.</p>
        <a href="/home">return to the main page</a>
        `)
      }
    })













server.listen(3000)