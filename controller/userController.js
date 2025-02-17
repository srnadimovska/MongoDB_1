const User = require('../model/userModel');

exports.createUser = async (req, res) => {
    try {
      const newUser = await User.create(req.body);

      res.status(201).json({
        status: 'success',
        data: {
            user: newUser,
        },
      });
    } catch (err){
        res.status(500).json ({
            status: 'fail',
            
            message: err.message,
        
        });
    }
};

exports.getAllUsers = async (req,res) => {
    try {
        const user = await User.find();

        res.status(200).json({
            status:'success',
            data: {
                allUsers: user,
            },
        });
    } catch (err){
        res.status(500).json ({
            status: 'fail',
            
            message: err.message,
        
        });
    }
};

exports.getUser = async (req,res) => {
    try{
       const id = req.params.id;
       const user = await User.findById(id);

       res.status(200).json({
        status: 'success',
        data: {
            user,
        },
       });

    } catch (err) {
        res.status(500).json ({
            status: 'fail',
            
            message: err.message,
        
        });
    }
};

exports.updateUser = async (req,res) => {
    try {
    const user = await User.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators: true,
    });
     res.status(200).json({
        status:'success',
        data: {
            user,
        },
     });
}catch (err) {
    res.status(500).json({
        status:'fail',
        message: err.message,
    });
}
};

exports.deletedUser = async(req,res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status:'success',
            data: deletedUser,

        });
    } catch (err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });
    }
};