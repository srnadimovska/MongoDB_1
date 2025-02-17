const mongoose = require('mongoose');

exports.connectToDataBase = async () => {
    try{
        await mongoose.connect (
            'mongodb+srv://srnatrajkovska:wzXYdglZjoLNTUe2@cluster0.meqpy.mongodb.net/secondClass?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log('Successfully connected to database!');
    } catch(err) {
        console.log(err.message);
    }
};