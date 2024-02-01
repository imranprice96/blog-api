const { body } = require("express-validator");

const loginValidator = [
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Username is empty"),
  body("password")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Password is empty"),
];

const registerValidator = [
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified.")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters."),
  body("last_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Last name must be specified.")
    .isAlphanumeric()
    .withMessage("Last name has non-alphanumeric characters."),
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified."),
  body("password")
    .trim()
    .isLength({ min: 4 })
    .escape()
    .withMessage("Password must be at least 4 characters."),
];

const postValidator = [
  body("title")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Title must be specified."),
  body("text")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Text must be specified."),
];

const commentValidator = [
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Username must be specified."),
  body("text")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Text must be specified."),
];

module.exports = {
  loginValidator,
  registerValidator,
  postValidator,
  commentValidator,
};
