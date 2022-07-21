import bcrypt from 'bcryptjs'

const users = [
    {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
    },
    {
      name: 'Kshitij Shetty',
      email: 'Kshitij@example.com',
      password: bcrypt.hashSync('123456', 10)
    },
    {
      name: 'Kshitij',
      email: 'K@example.com',
      password: bcrypt.hashSync('123456', 10)
    },
  ]
  
  export default users