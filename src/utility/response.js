const successResponse = (res,statusCode,msg,data={})=>{
    return res.status(statusCode).json({
        status:"success",
        msg : msg,
        data : data
    })
};



const errorResponse = (res,statusCode,msg,error={})=>{
    return res.status(statusCode).json({
        status:"fail",
        msg : msg,
        error : error
    })
};

module.exports = {
    successResponse,
    errorResponse
};