
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('URL: ', req.url)
  console.log('oi')
  res.write('Brinks')

  return res.end()
})

// porta para a aplicação executar

server.listen(3333, () => {
  console.log('Server is running on port 3333')
})