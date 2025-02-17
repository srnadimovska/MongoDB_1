const express = require('express');

const database = require('./database/database');

const blogController = require('./controller/blogController');
const userController = require('./controller/userController');
const autoController = require('./controller/autoController');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


database.connectToDataBase();

app.get('/api/v1/blogs', blogController.getAllBlogs);
app.get('/api/v1/blogs/:id', blogController.getBlog);
app.post('/api/v1/blogs', blogController.createBlog);
app.patch('/api/v1/blogs/:id', blogController.updateBlog);
app.delete('/api/v1/blogs/:id', blogController.deletedBlog);

app.get('/api/v1/users', userController.getAllUsers);
app.get('/api/v1/users/:id', userController.getUser);
app.post('/api/v1/users', userController.createUser);
app.patch('/api/v1/users/:id', userController.updateUser);
app.delete('/api/v1/users/:id', userController.deletedUser);

app.get('/api/v1/autos', autoController.getAllAuto);
app.get('/api/v1/autos/:id', autoController.getAuto);
app.post('/api/v1/autos', autoController.createAuto);
app.patch('/api/v1/autos/:id', autoController.updateAuto);
app.delete('/api/v1/autos/:id', autoController.deletedAuto);


const port = 10000;
app.listen(port, (err) => {
    console.log(`App running on port ${port}`);
});

