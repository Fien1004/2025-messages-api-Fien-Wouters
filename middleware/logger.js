const logger = (req, res, next) => {
    console.log("Piep");
    next();
};

module.exports = logger;
