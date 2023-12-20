// controllers/auth.js
import passport from 'passport';
import createError from '../utils/CreateError.js';
export const registerAuth= async(req,res,next) =>{

  const {fullName,email,password} = req.body;

  try {
      next(createError(201,'user created'))
     } catch (error) {
      next(createError(401,error.message))
  }

}




// Google OAuth callback controller
export const googleCallback = (req, res) => {
  // Access user information from req.user
  const user = req.user;
  console.log(user)
  // Here, you can insert the user into MongoDB or perform any other desired operations
  // For example, using Mongoose:
  // const User = require('../models/user');
  // const newUser = new User({ email: user.email });
  // newUser.save()
  //   .then(() => {
  //     console.log('User saved to MongoDB');
  //     // Redirect or send a response as needed
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     // Handle error response
  //   });

  // Redirect or send a response as needed
 try {
    res.redirect('http://localhost:5173/Dashboard');
 } catch (error) {
    res.status(400).json({message:error.message})
 }
//   res.redirect('http://localhost:5173/Dashboard');

};


export const facebookCallback = (req, res) => {
    // Access user information from req.user
    const user = req.user;
    console.log(user)
    // Here, you can insert the user into MongoDB or perform any other desired operations
    // For example, using Mongoose:
    // const User = require('../models/user');
    // const newUser = new User({ email: user.email });
    // newUser.save()
    //   .then(() => {
    //     console.log('User saved to MongoDB');
    //     // Redirect or send a response as needed
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     // Handle error response
    //   });
  
    // Redirect or send a response as needed
   try {
      res.redirect('http://localhost:5173/Dashboard');
   } catch (error) {
      res.status(400).json({message:error.message})
   }
  //   res.redirect('http://localhost:5173/Dashboard');
  
  };

  export const likedinCallback = (req, res) => {
    // Access user information from req.user
    const user = req.user;
    console.log(user)
    // Here, you can insert the user into MongoDB or perform any other desired operations
    // For example, using Mongoose:
    // const User = require('../models/user');
    // const newUser = new User({ email: user.email });
    // newUser.save()
    //   .then(() => {
    //     console.log('User saved to MongoDB');
    //     // Redirect or send a response as needed
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     // Handle error response
    //   });
  
    // Redirect or send a response as needed
   try {
      res.redirect('http://localhost:5173/Dashboard');
   } catch (error) {
      res.status(400).json({message:error.message})
   }
  //   res.redirect('http://localhost:5173/Dashboard');
  
  };

export const githubCallback = (req, res) => {
    // Access user information from req.user
    const user = req.user;
    // console.log(user)
    if (user.emails && user.emails.length > 0) {
        // Extract the user's email from the user object
        const email = user.emails[0].value;
        console.log(email);
      } else {
        console.log('Email not available');
      }
    // Here, you can insert the user into MongoDB or perform any other desired operations
    // For example, using Mongoose:
    // const User = require('../models/user');
    // const newUser = new User({ email: user.email });
    // newUser.save()
    //   .then(() => {
    //     console.log('User saved to MongoDB');
    //     // Redirect or send a response as needed
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     // Handle error response
    //   });
  
    // Redirect or send a response as needed
   try {
      res.redirect('http://localhost:5173/Dashboard');
   } catch (error) {
      res.status(400).json({message:error.message})
   }
  //   res.redirect('http://localhost:5173/Dashboard');
  
  };

// Set up Google OAuth strategy with Passport.js
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import { Strategy as TwitterStrategy } from 'passport-twitter';




//TODO-------FacebookStrategy--------//
passport.use(
    new FacebookStrategy(
      {
        clientID: "1287674622153541",
        clientSecret: 'a01c7b8ebc04034e3d0572c79b81c8fb',
        callbackURL: '/auth/facebook/callback',
        scope: ['user:saidaymenazert@gmail.com'], // Add this line
      },
      (accessToken, refreshToken, profile, done) => {
        // Process the authenticated user data
      //   const user = {
      //     id: profile.id,
      //     email: profile.emails[0].value,
      //     name: profile.displayName,
      //   };
  
        // You can perform additional checks or modify the user object before saving
  
        return done(null, profile);
      }
    )
  );


//TODO-------GithubStrategy--------//
passport.use(
    new GithubStrategy(
      {
        clientID: "51867e30f71e1672fcfd",
        clientSecret: '3bc17337e8b39c2701ca9a8882931b7547286b13',
        callbackURL: '/auth/github/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        // Process the authenticated user data
      //   const user = {
      //     id: profile.id,
      //     email: profile.emails[0].value,
      //     name: profile.displayName,
      //   };
  
        // You can perform additional checks or modify the user object before saving
  
        return done(null, profile);
      }
    )
  );


//TODO-------GoogleStrategy--------//
passport.use(
  new GoogleStrategy(
    {
      clientID: "132084916155-ckq4i5d4362hipgl7jrj75gvh9jb8n2e.apps.googleusercontent.com",
      clientSecret: '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',
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Process the authenticated user data
    //   const user = {
    //     id: profile.id,
    //     email: profile.emails[0].value,
    //     name: profile.displayName,
    //   };

      // You can perform additional checks or modify the user object before saving

      return done(null, profile);
    }
  )
);


//TODO-------LikedinStrategy--------//

passport.use(
    new LinkedInStrategy( 
      {
        clientID: "7858jmmpppxhmt",
        clientSecret: 'XAMzUF09B7Htuy9E',
        callbackURL: 'http://localhost:5000/auth/linkedin/callback',
        scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social'], // Specify the required scopes here
      },
      (accessToken, refreshToken, profile, done) => {
        // Process the authenticated user data
      //   const user = {
      //     id: profile.id,
      //     email: profile.emails[0].value,
      //     name: profile.displayName,
      //   };
  
        // You can perform additional checks or modify the user object before saving
  
        return done(null, profile);
      }
    )
  );


  //TODO-------TwitterStrategy--------//

// N1dLeGhuRXVYbm5rTkdQb2ZTMHY6MTpjaQ
// aXHH7NPJgQD5AEGvhFLDVJZBXmDEvV4G5aaGFjzn0fyFMT8D1D


passport.use(
  new TwitterStrategy( 
    {
      consumerKey: "TXCNqjZ6HoYIDes9s0YzG2LYE",
      consumerSecret: '4xP5N1ciW9xw6WxRfqPYtJg8STBU0zgFhYyL5wLhrVqjJLxBW7',
      clientID: "N1dLeGhuRXVYbm5rTkdQb2ZTMHY6MTpjaQ",
      clientSecret: 'aXHH7NPJgQD5AEGvhFLDVJZBXmDEvV4G5aaGFjzn0fyFMT8D1D',
      callbackURL: 'http://localhost:5000/auth/twitter/callback',
      // scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social'], // Specify the required scopes here
    },
    (accessToken, refreshToken, profile, done) => {
      // Process the authenticated user data
    //   const user = {
    //     id: profile.id,
    //     email: profile.emails[0].value,
    //     name: profile.displayName,
    //   };

      // You can perform additional checks or modify the user object before saving

      return done(null, profile);
    }
  )
);
// Serialize/deserialize user with Passport.js
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
