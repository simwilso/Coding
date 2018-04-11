require('babel-register')

module.exports = {
 networks: {
  development: {
   host: 'localhost',
   port: 8545,
   from: "0x78b72be3d121cb46efc4630446c74e48d92e22a9",
   network_id: '*',
   gas: 470000
  }
 }
}
