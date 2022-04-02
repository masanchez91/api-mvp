const config = require("../../config/environment");

function errorHandler(err, req, res, next) {
    const errorMessage = getErrorMessage(err);

    logErrorMessage(errorMessage);

    if (res.handersSent) {
        return next(err);
    }

    const errorResponse = {
        statusCode: getHttpStatusCode({ err, res }),
        body: undefined
    }
    
    if(config.NODE_ENV !== 'production') {
        errorResponse.body = errorMessage;
    }

    res.status(errorResponse.statusCode);

    res.format({
        "application/json": () => {
            res.send({ message: errorResponse.body });
        },

        default: () => {
            res.type("text/plain").send(errorResponse.body);
        },
    });

    next();
}

function getErrorMessage(err) {
    if (err.stack) {
        return err.stack;
    }

    if (typeof err.toString === "function") {
        return err.toString();
    }

    return  "";
}

function logErrorMessage(err) {
    console.error(err);
}

function isErrorStatusCode(statusCode) {
    return statusCode >= 400 && statusCode < 600;
}

function getHttpStatusCode({ err, res }) {
    const statusCodeFromError = err.status || err.statusCode;
    if (isErrorStatusCode(statusCodeFromError)) {
        return statusCodeFromError;
    }

    const statusCodeFromResponse = res.statusCode;
    if (isErrorStatusCode(statusCodeFromResponse)) {
        return statusCodeFromResponse;
    }

    return 500;
}

module.exports = errorHandler;