const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required' });
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser) return res.status(401).json({ 'message': `Not found User ${user}` });
    // evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        //create JWTs
        res.json({ 'success': `User ${user} is logged in!` });
    } else {
        res.sendStatus(401);
    }
}

const getAllUser = async (req, res) => {
    res.json(usersDB.users);
}

module.exports = { handleLogin, getAllUser };