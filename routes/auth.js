// routes/auth.js
import express from 'express';
import passport from 'passport';
import { googleCallback,githubCallback, facebookCallback, likedinCallback, registerAuth } from '../controllers/auth.js';

const router = express.Router();

// register Authentication

router.post('/regiter',registerAuth);




// Google OAuth login route

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "Successfully logged in",
      user: req.user,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "User authentication failed",
    });
  }
});


router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:5173')
});


//TODO---Login with google-----------//
router.get(
  '/google',
  (req, res, next) => {
    // Clear the session to force Google account selection
    req.logout();
    next();
  },
  passport.authenticate('google',{
    // prompt: 'select_account',
    // login_hint: 'saidaymenazert@gmail.com',
    scope: ['profile', 'email']
  })
);

// Google OAuth callback route
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  googleCallback
);


//TODO---Login with Github-----------//

router.get(
  '/github',
  (req, res, next) => {
    // Clear the session to force github account selection
    req.logout();
    next();
  },
  passport.authenticate('github',{
    // prompt: 'select_account',
    // login_hint: 'saidaymenazert@gmail.com',
    scope: ['profile', 'email']
  }),
);


// GitHub OAuth callback route
router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  githubCallback
);


//TODO---Login with Facebook-----------//

router.get(
  '/facebook',
  (req, res, next) => {
    // Clear the session to force GitHub account selection
    req.logout();
    next();
  },
  passport.authenticate('facebook', {
    // scope: ['user:saidaymneazert@gamil.com'],
    prompt: 'saidaymneazert@gamil.com',
  })
);


// GitHub OAuth callback route
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  facebookCallback
);


//TODO---Login with Linkedin-----------//

router.get(
  '/linkedin',
  (req, res, next) => {
    // Clear the session to force LinkedIn account selection
    req.logout();
    next();
  },
  passport.authenticate('linkedin')
);

// LinkedIn OAuth callback route
router.get(
  '/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirect to the desired page after successful authentication
    res.redirect('/dashboard');
  }
);

//TODO---Login with twitter-----------//

router.get('/twitter', passport.authenticate('twitter'));

// Twitter OAuth callback route
router.get(
  '/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirect or handle successful authentication
    // ...
  }
);;
export default router;
