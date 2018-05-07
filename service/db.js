var mongoose = require('mongoose');
mongoose.connect('mongodb://usersDb_admin:password123@104.251.211.236:27017/users').catch((reason) => {
    console.log('Unable to connect to the mongodb instance. Error: ', reason);
});

//mongodb://<dbuser>:<dbpassword>@ds113200.mlab.com:13200/nodejs-restful