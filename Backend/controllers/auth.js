const asuncHandler = require("express-async-handler");
const { User, validateUser, validateUpdateUser , validateLogin } = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


/**
 * @desc    Register
 * @route   POST /api/auth/register
 * @access  public
 * @method  POST
 */

const register = asuncHandler(async (req, res) => {
const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) return res.status(400).send("User already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    })

    await user.save();

    res.status(201).json({ message: "User created Successfully" });
});
/**
 * @desc    Login
 * @route   POST /api/auth/login
 * @access  public
 * @method  POST
 */

const Login = asuncHandler(async (req, res) => {
    const { error } = validateLogin(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send("Invalid email or password");
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send("Invalid email or password");
    }
    const token = jwt.sign({ _id: user._id , isAdmin: user.isAdmin }, process.env.SECRETKEY);
    const { password, ...others } = user._doc
    res.send({ ...others, token });
})

/**
 * @desc    Delete User
 * @route   DELETE /api/auth/:id
 * @access  private (only user logged)
 * @method  DELETE
 */

const DeleteUser = asuncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(404).json({ message: "User Not Found" })
    }
    await User.findByIdAndDelete(req.params.id)
})

/**
 * @desc    Update Profile Photo
 * @route   PUT /api/auth/:id
 * @access  private (only user logged)
 * @method  PUT
 */

const UpdateUser = asuncHandler(async (req, res) => {
    const { error } = validateUpdateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        // email: req.body.email,
        // password: hashedPassword,
    } , { new: true })
    await user.save();
    const { password, ...others } = user._doc
    res.send(user);
})


/**
 * @desc    Get All Users
 * @route   GET /api/auth
 * @access  public
 * @method  GET
 */

const getAllUsers = asuncHandler(async (req, res) => {
    const users = await User.find()
    res.send(users)
})

module.exports = { register , Login , DeleteUser , UpdateUser , getAllUsers}