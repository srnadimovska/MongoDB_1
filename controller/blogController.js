const Blog = require('../model/blogModel');

exports.createBlog = async (req, res) => {
    try {
      const newBlog = await Blog.create(req.body);

      res.status(201).json({
        status: 'success',
        data: {
            blog:newBlog,
        },
      });
    } catch (err){
        res.status(500).json ({
            status: 'fail',
            
            message: err.message,
        
        });
    }
};

exports.getAllBlogs = async (req,res) => {
    try {
        const blog = await Blog.find();

        res.status(200).json({
            status:'success',
            data: {
                allBlogs: blog,
            },
        });
    } catch (err){
        res.status(500).json ({
            status: 'fail',
            
            message: err.message,
        
        });
    }
};

exports.getBlog = async (req,res) => {
    try{
       const id = req.params.id;
       const blog = await Blog.findById(id);

       res.status(200).json({
        status: 'success',
        data: {
            blog,
        },
       });

    } catch (err) {
        res.status(500).json ({
            status: 'fail',
            
            message: err.message,
        
        });
    }
};

exports.updateBlog = async (req,res) => {
    try {
    const blog = await Blog.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators: true,
    });
     res.status(200).json({
        status:'success',
        data: {
            blog,
        },
     });
}catch (err) {
    res.status(500).json({
        status:'fail',
        message: err.message,
    });
}
};

exports.deletedBlog = async(req,res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status:'success',
            data: deletedBlog,

        });
    } catch (err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });
    }
};

