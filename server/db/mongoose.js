var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/UserApp', { useNewUrlParser: true });

module.exports = {
    mongoose
};