const {errorConstants} = require('../constants.js')

const errorHandler = (err,req,res,next)=>{

    const statusCode = req.statusCode ? req.statusCode : 500


    switch(statusCode){
        case errorConstants.VALIDATION_FAILED:
            res.json({
                title:'Validation failed, all fields are mandatory',
                message:err.message, 
                stackTrace:err.stack
            })

        case errorConstants.UNAUTHORIZED:
            res.json({
                title:'Unauthorized',
                message:err.message,
                stackTrace:err.stack
            })


        case errorConstants.FORBIDDEN:
            res.json({
                title:'Forbidden',
                message:err.message,
                stackTrace:err.stack
            })


        case errorConstants.SERVER_ERROR:
            res.json({
                title:'Server error',
                message:err.message,
                stackTrace:err.stack
            })

        default:
            console.log('NO errors')  
            break  
    }
}

module.exports = errorHandler