import asyncHandler from "../utils/asyncHandler.js";
import apiResponsive from "../utils/ApiResponsive.js";

const healthChecker = asyncHandler(async (req, res, next) => {
    return res.status(200).json(new apiResponsive(200,"Ok", "Success"));
});


export {healthChecker};

