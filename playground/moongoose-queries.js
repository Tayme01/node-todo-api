const {ObjectId} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bc8b41f6ebbed3c5134dd07';

// if (!ObjectId.isValid(id)){
//     return console.log('Invalid ID');
// }

// Todo.find({
//     _id: id
// }).then(todos => console.log('Todos', todos))

// Todo.findOne({
//     _id: id
// }).then(todo => console.log('Todo', todo))

// Todo.findById(id)
//     .then(todo => console.log(todo))
//     .catch(err => console.log(err));

User.findById(id)
    .then(result => {
        if(!result){
            return console.log('Unable to find user');
        }
        console.log(result);
    })
    .catch(err => console.log(err));