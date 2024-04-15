// // controllers/userController.js
// const bcrypt = require('bcrypt');
// const User = require('./../models/User');

// module.exports('/', async (req, res) => {
 

//   try {
//     const { name, username, email, password } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);


//     await new User({
//       name,
//       username,
//       email,
//       password:hashedPassword,
//     }).save();



//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });





// controllers/userController.js
const bcrypt = require('bcrypt');
const User = require('./../models/User');

// Define the controller function
const createUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await new User({
      name,
      username,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Export the controller function
module.exports = createUser;

