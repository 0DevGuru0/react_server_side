import jwt from 'jsonwebtoken';
import User from '../models/user'
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
            or you can
            <form action="/logout" method="post">
                <input type="hidden" name="_csrf" value="${req.csrfToken()}"></input>
                <button type="submit">Logout</button>
            </form>
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
RootController.logOut = async (req,res)=>{
    await req.logout();
    res.redirect('/');
}


RootController.emailVerification =  (req,res,next)=>{
    const {token} = req.query;
    // Check to see token is valid with specified email
    jwt.verify(token,'afsan|user|emailVerify|007', { subject: "emailVerification" },(err, decoded)=>{
        // Check to see can find email
        if(err){
            if(err.name == 'TokenExpiredError'){
                return res.status(500).send('request expired please try again')
            }else{
                return res.send({err})
            }
        }
        User.findOneAndUpdate({
                 email: decoded.email
             }, {
                 $set: {
                     isVerified: true
                 }
             }, {
                 new: true
             },
             (err, user) => {
                 if (err) {
                     throw new Error('can\'t find Email try again')
                 }
                 res.redirect('/')
             })
      });

}
RootController.resetPassword =  (req,res,next)=>{
    const {token} = req.query;
    // Check to see token is valid with specified email
    jwt.verify(token,'afsan|user|resetPassword|007', { subject: "resetPassword" },(err, decoded)=>{
        // Check to see can find email
        if(err){
            if(err.name == 'TokenExpiredError'){
                return res.status(500).send('request expired please try again')
            }else{
                return res.send({err})
            }
        }
        res.send({email:decoded.email})
    })

}

export default RootController;