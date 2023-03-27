const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(err);

    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };

    error.message = err.message;

  
    if (err.name === "CastError") {
      const message = `Recurso no encontrado, invalido: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    //mongoose
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map(value => value.message);
      error = new ErrorHandler(message, 400);
    }


    if (err.code === 11000) {
      const message = `Se ingresó una clave duplicada: ${Object.keys(
        err.keyValue
      )}`;
      error = new ErrorHandler(message, 400);
    }

    // JWT
    if (err.name === "JsonWebTokenError") {
      const message = "Json web token es invalido, intenta nuevamente";
      error = new ErrorHandler(message, 400);
    }

    // Handling Expired JWT error
    if (err.name === "TokenExpiredError") {
      const message =
        "El token web JSON ha caducado. ¡¡¡Inténtalo de nuevo!!!";
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Error Interno del Servidor",
    });
  }
};
