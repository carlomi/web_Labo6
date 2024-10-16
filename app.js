const express = require('express');
const userRoute = require('./src/routes/user.route');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'src/views'));

app.use(express.urlencoded({ extend: true}));

app.use(userRoute);

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

