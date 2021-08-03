/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express'
import * as cors from 'cors'

const app = express()
app.use(cors())

const users = [
  {
    id: 1,
    first_name: 'Halsey',
    last_name: 'Martschik',
    email: 'hmartschik0@disqus.com',
    gender: 'Genderqueer',
    ip_address: '175.10.170.69',
  },
  {
    id: 2,
    first_name: 'Lizbeth',
    last_name: 'Tetley',
    email: 'ltetley1@google.it',
    gender: 'Agender',
    ip_address: '94.89.180.117',
  },
  {
    id: 3,
    first_name: 'Ofella',
    last_name: 'Barnsley',
    email: 'obarnsley2@china.com.cn',
    gender: 'Bigender',
    ip_address: '109.5.21.8',
  },
  {
    id: 4,
    first_name: 'Viki',
    last_name: 'Seivwright',
    email: 'vseivwright3@vistaprint.com',
    gender: 'Male',
    ip_address: '184.171.131.92',
  },
  {
    id: 5,
    first_name: 'Rainer',
    last_name: 'Gilbard',
    email: 'rgilbard4@google.ru',
    gender: 'Agender',
    ip_address: '199.222.173.17',
  },
  {
    id: 6,
    first_name: 'Osmund',
    last_name: 'Morten',
    email: 'omorten5@ebay.com',
    gender: 'Genderqueer',
    ip_address: '36.243.241.202',
  },
  {
    id: 7,
    first_name: 'Bartholomew',
    last_name: 'Le Sarr',
    email: 'blesarr6@dailymail.co.uk',
    gender: 'Agender',
    ip_address: '51.218.55.18',
  },
  {
    id: 8,
    first_name: 'Zorine',
    last_name: 'Ferrino',
    email: 'zferrino7@de.vu',
    gender: 'Non-binary',
    ip_address: '172.173.15.116',
  },
  {
    id: 9,
    first_name: 'Joelly',
    last_name: 'Littlecote',
    email: 'jlittlecote8@cbc.ca',
    gender: 'Polygender',
    ip_address: '163.55.186.115',
  },
  {
    id: 10,
    first_name: 'Shannon',
    last_name: 'Dilgarno',
    email: 'sdilgarno9@usda.gov',
    gender: 'Bigender',
    ip_address: '74.6.246.181',
  },
]

app.get('/api', (req, res) => {
  res.json(users)
})

const port = process.env.port || 3333
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
