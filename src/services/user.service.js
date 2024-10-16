const {getUsers, save , User} = require('../models/user.model');

const addNewUser = (name, lastname, email) => {
    const newUser = new User(name, lastname, email);
    return save(newUser);
}

const showUsers = () => {
    return getUsers();
}

module.exports = {
    addNewUser,
    showUsers
}

