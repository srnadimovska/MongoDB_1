const Auto = require('../model/autoModel');

exports.createAuto = async (req, res) => {
    try {
      const newAuto = await Auto.create(req.body);

      res.status(201).json({
        status: 'success',
        data: {
            auto: newAuto,
        },
      });
    } catch (err){
        res.status(500).json ({
            status: 'fail',
            
            message: err.message,
        
        });
    }
};

exports.getAllAuto = async (req,res) => {
    try {
        const auto = await Auto.find();

        res.status(200).json({
            status:'success',
            data: {
                allAuto: auto,
            },
        });
    } catch (err){
        res.status(500).json ({
            status: 'fail',
            
            message: err.message,
        
        });
    }
};

exports.getAuto = async (req,res) => {
    try{
       const id = req.params.id;
       const auto = await Auto.findById(id);

       res.status(200).json({
        status: 'success',
        data: {
            auto,
        },
       });

    } catch (err) {
        res.status(500).json ({
            status: 'fail',
            
            message: err.message,
        
        });
    }
};

exports.updateAuto = async (req,res) => {
    try {
    const auto = await Auto.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators: true,
    });
     res.status(200).json({
        status:'success',
        data: {
            auto,
        },
     });
}catch (err) {
    res.status(500).json({
        status:'fail',
        message: err.message,
    });
}
};

exports.deletedAuto = async(req,res) => {
    try {
        const deletedAuto = await Auto.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status:'success',
            data: deletedAuto,

        });
    } catch (err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });
    }
};