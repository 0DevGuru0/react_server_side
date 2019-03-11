import requireLogin from '../middlewares/requireLogin';
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  let adminContent = `
    <div>
      You don't appear to be logged in.  You can log in by visiting
      <a href="/user/api/auth/google">the Authentication Route</a>. You could
      also look at details about yourself at <a href="/user/api/current_user">the Current User route</a>
    </div>
  `;
  if (req.user) {
    adminContent = `
      <div>
        You appear to be logged in, so you can visit <a href="/admins">the Admins route</a>
        or you can <a href="/user/api/logout">Logout</a>.
      </div>
    `;
  }
  res.send(`
    <div>
      <h4>Hi!  Welcome to the React SSR API</h4>
      <div>
        You can see <a href="/users">the Users route</a>
      </div>
      ${adminContent}
    </div>
  `);
});

router.get('/users', (req, res) => {
    res.send(users);
});

router.get('/users/xss', (req, res) => {
    res.send(usersXss);
});

router.get('/admins', requireLogin, (req, res) => {
    res.send(admins);
});
router.get('/login', (req, res) => {
  res.send(`
  <html>
    <body>
      <a href="/user/api/auth/google">Login via Google</a>
    </body>
  </html>`);
});
const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
  { id: 5, name: 'Chelsey Dietrich' }
];

const usersXss = [
  { id: 1, name: '</script><script>alert(1234567890)</script>' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
  { id: 5, name: 'Chelsey Dietrich' }
];

const admins = [
  { id: 1, name: 'Kurtis Weissnat' },
  { id: 2, name: 'Nicholas Runolfsdottir' },
  { id: 3, name: 'Gelann Reichert' },
  { id: 4, name: 'Moriah Stanton' },
  { id: 5, name: 'Rey Padberg' }
];

export default router;