const RootController = {}

const users = [
    { id: 1, name: 'Leanne Graham' },
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

RootController.rootPage = (req, res) => {
    let adminContent = `
        <div>
        You don't appear to be logged in.  You can log in by visiting
        <a href="/auth/google">the Authentication Route</a>. You could
        also look at details about yourself at <a href="/api/current_user">the Current User route</a>
        </div>
    `;
    if (req.user) {
        adminContent = `
        <div>
            You appear to be logged in, so you can visit <a href="/admins">the Admins route</a>
            or you can <a href="/logout">Logout</a>.
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
}

RootController.usersList = (req, res) => {
    res.send(users);
}

RootController.logIn = (req, res) => {
    res.send(`
    <html>
      <body>
        <a href="auth/google">Login via Google</a>
      </body>
    </html>`);
}

RootController.admins =  (req, res) => {
    res.send(admins);
}

RootController.redirectToRoot = (req,res)=>{
     res.redirect('/');
}
RootController.logOut = (req,res)=>{
    req.logout();
    res.redirect('/');
}
export default RootController;