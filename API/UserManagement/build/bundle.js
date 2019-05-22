/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*********************************************************************************************************************************************************!*\
  !*** D:/WebSite_Learn/ReactJs/00--Studied--/Server Side Rendering with React and Redux/Project/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!**************************************************************************************************************************************************!*\
  !*** D:/WebSite_Learn/ReactJs/00--Studied--/Server Side Rendering with React and Redux/Project/node_modules/@babel/runtime/regenerator/index.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./controllers/root.js":
/*!*****************************!*\
  !*** ./controllers/root.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./models/user.js");
/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfkit */ "pdfkit");
/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfkit__WEBPACK_IMPORTED_MODULE_4__);





var RootController = {};
var PAGE_LIMIT_COUNT = 10;
var admins = [{
  id: 1,
  name: 'Kurtis Weissnat'
}, {
  id: 2,
  name: 'Nicholas Runolfsdottir'
}, {
  id: 3,
  name: 'Gelann Reichert'
}, {
  id: 4,
  name: 'Moriah Stanton'
}, {
  id: 5,
  name: 'Rey Padberg'
}];

RootController.rootPage = function (req, res) {
  var adminContent = "\n        <div>\n        You don't appear to be logged in.  You can log in by visiting\n        <a href=\"/auth/google\">the Authentication Route</a>. You could\n        also look at details about yourself at <a href=\"/api/current_user\">the Current User route</a>\n        </div>\n    ";

  if (req.user) {
    adminContent = "\n        <div>\n            You appear to be logged in, so you can visit <a href=\"/admins\">the Admins route</a>\n            or you can\n            <form action=\"/logout\" method=\"post\">\n                <input type=\"hidden\" name=\"_csrf\" value=\"".concat(req.csrfToken(), "\"></input>\n                <button type=\"submit\">Logout</button>\n            </form>\n        </div>\n        ");
  }

  res.send("\n        <div>\n        <h4>Hi!  Welcome to the React SSR API</h4>\n        <div>\n        <form action=\"/userslistpdf\" method=\"get\">\n        <button>usersListPdf</button>\n        </form>\n            You can see <a href=\"/users\">the Users route</a>\n        </div>\n        ".concat(adminContent, "\n        </div>\n    "));
};

RootController.usersList = function (req, res, next) {
  var page = +req.query.page;
  var totalUsers;

  if (page < 1) {
    page = 1;
  }

  _models_user__WEBPACK_IMPORTED_MODULE_3__["default"].find().countDocuments().then(function (usersCount) {
    totalUsers = usersCount;

    if (page > Math.ceil(totalUsers / PAGE_LIMIT_COUNT)) {
      page = Math.ceil(totalUsers / PAGE_LIMIT_COUNT);
    }

    return _models_user__WEBPACK_IMPORTED_MODULE_3__["default"].find().skip((page - 1) * PAGE_LIMIT_COUNT).limit(PAGE_LIMIT_COUNT);
  }).then(function (users) {
    if (!users) {
      return 'no user has been registered yet';
    }

    var Users = users.map(function (_ref) {
      var _id = _ref._id,
          name = _ref.name,
          email = _ref.email,
          isVerified = _ref.isVerified;
      return {
        _id: _id,
        name: name,
        email: email,
        isVerified: isVerified
      };
    });
    var hasNextPage = PAGE_LIMIT_COUNT * page < totalUsers;
    var hasPreviousPage = page > 1;
    var lastPage = Math.ceil(totalUsers / PAGE_LIMIT_COUNT);
    res.send({
      Users: Users,
      totalUsers: totalUsers,
      hasNextPage: hasNextPage,
      hasPreviousPage: hasPreviousPage,
      currentPage: page,
      lastPage: lastPage
    });
  }).catch(function (e) {
    next(new Error(e));
  });
};

RootController.logIn = function (req, res) {
  res.send("\n    <html>\n      <body>\n        <a href=\"auth/google\">Login via Google</a>\n      </body>\n    </html>");
};

RootController.admins = function (req, res) {
  res.send(admins);
};

RootController.redirectToRoot = function (req, res) {
  res.redirect('/');
};

RootController.logOut =
/*#__PURE__*/
function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.logout();

          case 2:
            res.redirect('/');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

RootController.emailVerification = function (req, res, next) {
  var token = req.query.token; // Check to see token is valid with specified email

  jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, 'afsan|user|emailVerify|007', {
    subject: "emailVerification"
  }, function (err, decoded) {
    // Check to see can find email
    if (err) {
      if (err.name == 'TokenExpiredError') {
        return res.status(500).send('request expired please try again');
      } else {
        return res.send({
          err: err
        });
      }
    }

    _models_user__WEBPACK_IMPORTED_MODULE_3__["default"].findOneAndUpdate({
      email: decoded.email
    }, {
      $set: {
        isVerified: true
      }
    }, {
      new: true
    }, function (err, user) {
      if (err) {
        next(new Error('can\'t find Email try again'));
      }

      res.redirect('/');
    });
  });
};

RootController.resetPassword = function (req, res, next) {
  var token = req.query.token;
  jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, 'afsan|user|resetPassword|007', {
    subject: "resetPassword"
  }, function (err, decoded) {
    if (err) {
      if (err.name == 'TokenExpiredError') {
        return res.status(500).send('request expired please try again');
      } else {
        return res.send({
          err: err
        });
      }
    }

    res.send({
      email: decoded.email
    });
  });
};

RootController.printUsers = function (req, res, next) {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline;filename="usersList"');
  _models_user__WEBPACK_IMPORTED_MODULE_3__["default"].find().then(
  /*#__PURE__*/
  function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(users) {
      var pdfDoc, invoiceName;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (users) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", 'no user has been registered yet');

            case 2:
              pdfDoc = new pdfkit__WEBPACK_IMPORTED_MODULE_4___default.a();
              res.setHeader('Content-Type', 'application/pdf');
              invoiceName = 'userslist';
              res.setHeader('Content-Disposition', 'inline; filename="' + invoiceName + '"');
              pdfDoc.pipe(res);
              pdfDoc.fontSize(26).text('Invoice', {
                underline: true
              });
              pdfDoc.text('-----------------------');
              users = users.map(function (user) {
                return {
                  name: user.name,
                  email: user.email
                };
              });
              users.forEach(function (user) {
                pdfDoc.text(i + ')' + user.email + '---' + user.name);
              });
              pdfDoc.text('---');
              pdfDoc.end();

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }()).catch(function (e) {
    next(new Error(e));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RootController);

/***/ }),

/***/ "./emails/emailVerify.js":
/*!*******************************!*\
  !*** ./emails/emailVerify.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var emailVerify = function emailVerify(user) {
  var request = jwt.sign({
    email: user.email,
    access: "simple_user"
  }, 'afsan|user|emailVerify|007', {
    expiresIn: 60 * 60,
    subject: "emailVerification"
  });
  return "\n    <html>\n        <body>\n            <div>\n                <h1>Email Verification</h1>\n                <a href='http://localhost:3000/api/emailverify?token=".concat(request, "'>\n                    <button>verifying my account</button>\n                </a>\n            </div>\n        </body>\n    </html>\n    ");
};

var text = 'and easy to do anywhere, even with Node.js';

var config = function config(user) {
  return {
    to: user.email,
    subject: "Successfully SignedIn[".concat(user.name, "]"),
    from: 'af.hadafi@gmail.com',
    text: text,
    html: emailVerify(user)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./emails/resetPassword.js":
/*!*********************************!*\
  !*** ./emails/resetPassword.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var resetPassword = function resetPassword(user) {
  var request = jwt.sign({
    email: user.email,
    access: "simple_user"
  }, 'afsan|user|resetPassword|007', {
    expiresIn: 60 * 60,
    subject: "resetPassword"
  });
  return "\n    <html>\n        <body>\n            <div>\n                <h1>resetPassword</h1>\n                <a href='http://localhost:3000/resetPassword/".concat(request, "'>\n                    <button>reset my account Password</button>\n                </a>\n            </div>\n        </body>\n    </html>\n    ");
};

var text = 'and easy to do anywhere, even with Node.js';

var config = function config(user) {
  return {
    to: user.email,
    subject: "Rest Password",
    from: 'af.hadafi@gmail.com',
    text: text,
    html: resetPassword(user)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./server/index.js");

_server__WEBPACK_IMPORTED_MODULE_0__["default"].listen(process.env.PORT, function () {
  console.log("[UserManagement]_server is running on port ".concat(process.env.PORT));
});

/***/ }),

/***/ "./middlewares/requireLogin.js":
/*!*************************************!*\
  !*** ./middlewares/requireLogin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (req, res, next) {
  req.user ? next() : res.status(404).send({
    error: 'You must log in!'
  });
});

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);



var userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
    trim: true,
    validate: {
      validator: function validator(val) {
        return validator__WEBPACK_IMPORTED_MODULE_1___default.a.isEmail(val);
      },
      message: '{VALUE} is not a valid {PATH}'
    }
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  googleId: {
    type: String
  },
  isVerified: {
    type: Boolean
  }
});
userSchema.method('comparePassword', function (candidatePass, callback) {
  var _user = this;

  Object(bcrypt__WEBPACK_IMPORTED_MODULE_2__["compare"])(candidatePass, _user.password, function (err, isMatch) {
    callback(err, isMatch);
  });
});
userSchema.pre('save', function (next) {
  var _user = this;

  if (!_user.isModified) {
    return next();
  }

  Object(bcrypt__WEBPACK_IMPORTED_MODULE_2__["genSalt"])(10, function (err, salt) {
    if (!err) {
      Object(bcrypt__WEBPACK_IMPORTED_MODULE_2__["hash"])(_user.password, salt, function (err, hash) {
        if (!err) {
          _user.password = hash;
          next();
        } else {
          return next('can\'t hash the password,try again');
        }
      });
    } else {
      return next('some thing went wrong');
    }
  });
});
var userModel = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])('user', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (userModel);

/***/ }),

/***/ "./routes/rootRouter.js":
/*!******************************!*\
  !*** ./routes/rootRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../middlewares/requireLogin */ "./middlewares/requireLogin.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/root */ "./controllers/root.js");



var router = express__WEBPACK_IMPORTED_MODULE_1___default.a.Router();
router.get('/', _controllers_root__WEBPACK_IMPORTED_MODULE_2__["default"].rootPage);
router.get('/users', _controllers_root__WEBPACK_IMPORTED_MODULE_2__["default"].usersList);
router.get('/admins', _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_0__["default"], _controllers_root__WEBPACK_IMPORTED_MODULE_2__["default"].admins);
router.get('/login', _controllers_root__WEBPACK_IMPORTED_MODULE_2__["default"].logIn);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./routes/userRouter.js":
/*!******************************!*\
  !*** ./routes/userRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/requireLogin */ "./middlewares/requireLogin.js");
/* harmony import */ var _controllers_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/root */ "./controllers/root.js");




var router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
var googleAuth = passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('google', {
  scope: ['profile', 'email']
});
var googleAuthCB = passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('google');
router.get('/auth/google', googleAuth);
router.get('/api/auth/google/callback', googleAuthCB, _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].redirectToRoot);
router.get('/auth/google/callback', googleAuthCB, _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].redirectToRoot);
router.post('/logout', _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_2__["default"], _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].logOut);
router.get('/logout', _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_2__["default"], _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].logOut);
router.get('/current_user', _middlewares_requireLogin__WEBPACK_IMPORTED_MODULE_2__["default"], function (req, res) {
  res.send(req.user);
});
router.get('/emailverify', _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].emailVerification, _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].redirectToRoot);
router.get('/resetPassword', _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].resetPassword);
router.get('/usersListPdf', _controllers_root__WEBPACK_IMPORTED_MODULE_3__["default"].printUsers);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./schema/index.js":
/*!*************************!*\
  !*** ./schema/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./schema/types/index.js");
/* harmony import */ var _mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mutation */ "./schema/mutation.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_2__);



var Schema = new graphql__WEBPACK_IMPORTED_MODULE_2__["GraphQLSchema"]({
  query: _types__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutation: _mutation__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Schema);

/***/ }),

/***/ "./schema/mutation.js":
/*!****************************!*\
  !*** ./schema/mutation.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_userType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/userType */ "./schema/types/userType.js");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helpers */ "./services/helpers.js");



var mutation = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
  name: "MutationObserver",
  fields: function fields() {
    return {
      SignIn: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          },
          password: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref, req) {
          var password = _ref.password,
              email = _ref.email;
          console.log(password, email);
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].SignIn({
            email: email,
            password: password,
            req: req
          });
        }
      },
      SignUp: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          name: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          },
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          },
          password: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref2, req) {
          var email = _ref2.email,
              password = _ref2.password,
              name = _ref2.name;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].SignUp({
            email: email,
            password: password,
            name: name,
            req: req
          });
        }
      },
      SignOut: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        resolve: function resolve(parentValue, args, req) {
          var user = req.user;
          req.logout();
          return user;
        }
      },
      sendEmailVerify: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref3, req) {
          var email = _ref3.email;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].sendEmailVerify({
            email: email,
            req: req
          });
        }
      },
      sendResetPassEmail: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref4, req) {
          var email = _ref4.email;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].sendResetPassEmail({
            email: email,
            req: req
          });
        }
      },
      updateUserPassword: {
        type: _types_userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          email: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          },
          password: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref5, req) {
          var email = _ref5.email,
              password = _ref5.password;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].updateUserPassword({
            email: email,
            password: password,
            req: req
          });
        }
      }
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (mutation);

/***/ }),

/***/ "./schema/types/index.js":
/*!*******************************!*\
  !*** ./schema/types/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userType */ "./schema/types/userType.js");
/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/helpers */ "./services/helpers.js");



var RootQueryType = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
  name: "RootQueryType",
  fields: function fields() {
    return {
      user: {
        type: _userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        resolve: function resolve(parentValue, args, req) {
          return req.user;
        }
      },
      identifyUserByToken: {
        type: _userType__WEBPACK_IMPORTED_MODULE_1__["default"],
        args: {
          token: {
            type: new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLNonNull"](graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"])
          }
        },
        resolve: function resolve(parentValue, _ref, req) {
          var token = _ref.token;
          return _services_helpers__WEBPACK_IMPORTED_MODULE_2__["default"].identifyUserByToken({
            token: token,
            req: req
          });
        }
      }
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (RootQueryType);

/***/ }),

/***/ "./schema/types/userType.js":
/*!**********************************!*\
  !*** ./schema/types/userType.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_0__);

var userType = new graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLObjectType"]({
  name: "UserType",
  fields: {
    id: {
      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLID"]
    },
    name: {
      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]
    },
    email: {
      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLString"]
    },
    isVerified: {
      type: graphql__WEBPACK_IMPORTED_MODULE_0__["GraphQLBoolean"]
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (userType);

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var csurf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! csurf */ "csurf");
/* harmony import */ var csurf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(csurf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var x_xss_protection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! x-xss-protection */ "x-xss-protection");
/* harmony import */ var x_xss_protection__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(x_xss_protection__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hpp */ "hpp");
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hpp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _routes_userRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../routes/userRouter */ "./routes/userRouter.js");
/* harmony import */ var _routes_rootRouter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../routes/rootRouter */ "./routes/rootRouter.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var socket_io_redis__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! socket.io-redis */ "socket.io-redis");
/* harmony import */ var socket_io_redis__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(socket_io_redis__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var rotating_file_stream__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rotating-file-stream */ "rotating-file-stream");
/* harmony import */ var rotating_file_stream__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(rotating_file_stream__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../models/user */ "./models/user.js");
/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! express-graphql */ "express-graphql");
/* harmony import */ var express_graphql__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(express_graphql__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../schema */ "./schema/index.js");























__webpack_require__(/*! ../services/passport */ "./services/passport.js"); /////////////////START DATABASE CONFIG///////////////////////////


mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(process.env.DB_ADDRESS, {
  useNewUrlParser: true
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('connected', function () {
  console.log("connection established successfully");
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('error', function (err) {
  console.log('connection to mongo failed ' + err);
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on('disconnected', function () {
  console.log('mongo db connection closed');
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.set('useCreateIndex', true);
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = global.Promise; /////////////////END DATABASE CONFIG///////////////////////////

var app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // app.use(helmet())
// app.use(helmet.ieNoOpen())

var logDirectory = path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve('./logs');
fs__WEBPACK_IMPORTED_MODULE_5___default.a.existsSync(logDirectory) || fs__WEBPACK_IMPORTED_MODULE_5___default.a.mkdirSync(logDirectory);
var accessLogStream = rotating_file_stream__WEBPACK_IMPORTED_MODULE_18___default()('access.log', {
  interval: '1d',
  path: logDirectory
});
app.use(morgan__WEBPACK_IMPORTED_MODULE_17___default()('combined', {
  stream: accessLogStream
})); /////////////////START APP MIDDLEWARE///////////////////////////

__webpack_require__(/*! dotenv */ "dotenv").config({
  path: path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(process.cwd(), 'config/keys/.env')
});

app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_7___default()());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
  extended: true
}));
app.use(hpp__WEBPACK_IMPORTED_MODULE_11___default()());
app.disable('x-powered-by');
var whiteList = [process.env.CORS_APPROVED_ADDRESS, "http://localhost:".concat(process.env.PORT)];
var corsOptionsDelegate = {
  origin: function origin(_origin, cb) {
    whiteList.indexOf(_origin) !== -1 || !_origin ? cb(null, true) : cb(new Error('Not allowed by CORS'));
  }
};
app.use(cors__WEBPACK_IMPORTED_MODULE_8___default()(corsOptionsDelegate)); /////////////// CACHE IMPLEMENTING ///////////////////////////

var RedisStore = __webpack_require__(/*! connect-redis */ "connect-redis")(express_session__WEBPACK_IMPORTED_MODULE_6___default.a);

app.set('trust proxy', 1);
var server = http__WEBPACK_IMPORTED_MODULE_15___default.a.createServer(app);
var expressSession = express_session__WEBPACK_IMPORTED_MODULE_6___default()({
  secret: "3f9faa8bc0e722172cc0bdafede9f3f217474e47",
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({
    prefix: "session:auth:"
  }),
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
});
app.use(expressSession);
app.use(x_xss_protection__WEBPACK_IMPORTED_MODULE_10___default()());
app.use(passport__WEBPACK_IMPORTED_MODULE_3___default.a.initialize());
app.use(passport__WEBPACK_IMPORTED_MODULE_3___default.a.session()); ////////////////START GRAPHQL CONFIG///////////////////////////

app.use('/graphql', express_graphql__WEBPACK_IMPORTED_MODULE_20___default()({
  schema: _schema__WEBPACK_IMPORTED_MODULE_21__["default"],
  graphiql: true
})); ////////////////START ROUTER CONFIG///////////////////////////

app.use('/', csurf__WEBPACK_IMPORTED_MODULE_9___default()(), _routes_userRouter__WEBPACK_IMPORTED_MODULE_13__["default"]);
app.use('/', csurf__WEBPACK_IMPORTED_MODULE_9___default()(), _routes_rootRouter__WEBPACK_IMPORTED_MODULE_14__["default"]); /////////////////START ERROR HANDLING///////////////////////////

app.use(function (req, res, next) {
  res.status(404).send('404');
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(err.message);
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./services/helpers.js":
/*!*****************************!*\
  !*** ./services/helpers.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./models/user.js");
/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sendgrid/mail */ "@sendgrid/mail");
/* harmony import */ var _sendgrid_mail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sendgrid_mail__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emails_emailVerify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emails/emailVerify */ "./emails/emailVerify.js");
/* harmony import */ var _emails_resetPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../emails/resetPassword */ "./emails/resetPassword.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_6__);







/*
 * Auth Object contain all logic for authentication
*/

var Auth = {};

Auth.SignUp = function (_ref) {
  var email = _ref.email,
      password = _ref.password,
      name = _ref.name,
      req = _ref.req;
  var errors = [];

  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(email) || validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(password)) {
    errors.push('type all credentials');
  }

  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email)) {
    errors.push('type valid Email');
  }

  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isLength(password, {
    min: 6,
    max: 24
  })) {
    errors.push('password should be in 6 to 24 char range');
  }

  if (errors.length > 0) {
    throw new Error(errors);
  }

  return _models_user__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
    email: email
  }).then(function (user) {
    if (user) {
      throw new Error('Email is in use');
    }

    return new _models_user__WEBPACK_IMPORTED_MODULE_2__["default"]({
      email: email,
      password: password,
      name: name,
      isVerified: false
    }).save();
  }).then(function (user) {
    return new Promise(function (res, rej) {
      req.login(user, function (err) {
        if (err) {
          rej(err);
        }

        return res(user);
      });
    });
  }).catch(function (e) {
    throw new Error(e);
  });
};

Auth.SignIn = function (_ref2) {
  var email = _ref2.email,
      password = _ref2.password,
      req = _ref2.req;
  var errors = [];

  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(email) || validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(password)) {
    errors.push('type all credentials');
  }

  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email)) {
    errors.push('type valid Email');
  }

  if (errors.length > 0) {
    throw new Error(errors);
  }

  return new Promise(function (res, rej) {
    passport__WEBPACK_IMPORTED_MODULE_1___default.a.authenticate('local', function (err, user) {
      if (!user) {
        return rej('you are not registered yet please signUp first');
      }

      if (err) {
        return rej(err);
      }

      req.login(user, function (err) {
        if (err) {
          return rej(err);
        }

        return res(user);
      });
    })({
      body: {
        email: email,
        password: password
      }
    });
  });
};

Auth.sendEmailVerify = function (_ref3) {
  var email = _ref3.email,
      req = _ref3.req;
  var errors = [];

  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(email)) {
    errors.push('email should be insert');
  }

  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email)) {
    errors.push('type valid Email');
  }

  if (errors.length > 0) {
    throw new Error(errors);
  }

  return _models_user__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
    email: email
  }).then(function (user) {
    if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(user)) {
      throw new Error('user with this email doesn\'t exist');
    }

    _sendgrid_mail__WEBPACK_IMPORTED_MODULE_3___default.a.setApiKey(process.env.SEND_GRID_API_KEY);
    return new Promise(function (res, rej) {
      _sendgrid_mail__WEBPACK_IMPORTED_MODULE_3___default.a.send(Object(_emails_emailVerify__WEBPACK_IMPORTED_MODULE_4__["default"])(user), true, function (err, result) {
        if (err) {
          return rej(err);
        }

        return res({
          email: email
        });
      });
    });
  }).catch(function (e) {
    throw new Error(e);
  });
};

Auth.sendResetPassEmail = function (_ref4) {
  var email = _ref4.email,
      req = _ref4.req;
  var errors = [];

  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(email)) {
    errors.push('email should be insert');
  }

  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email)) {
    errors.push('type valid Email');
  }

  if (errors.length > 0) {
    throw new Error(errors);
  }

  return _models_user__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
    email: email
  }).then(function (user) {
    if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(user)) {
      throw new Error('user with this email doesn\'t exist');
    }

    _sendgrid_mail__WEBPACK_IMPORTED_MODULE_3___default.a.setApiKey(process.env.SEND_GRID_API_KEY);
    return new Promise(function (res, rej) {
      _sendgrid_mail__WEBPACK_IMPORTED_MODULE_3___default.a.send(Object(_emails_resetPassword__WEBPACK_IMPORTED_MODULE_5__["default"])(user), true, function (err, result) {
        if (err) {
          return rej(err.message);
        }

        return res({
          email: email
        });
      });
    });
  }).catch(function (e) {
    throw new Error(e);
  });
};

Auth.identifyUserByToken = function (_ref5) {
  var token = _ref5.token,
      req = _ref5.req;

  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(token)) {
    throw new Error('token has not been received.');
  }

  token = validator__WEBPACK_IMPORTED_MODULE_0___default.a.trim(token);
  return new Promise(function (res, rej) {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_6___default.a.verify(token, 'afsan|user|resetPassword|007', {
      subject: "resetPassword"
    }, function (err, decoded) {
      if (err) {
        if (err.name == 'TokenExpiredError') {
          return rej('request expired please try again');
        } else {
          return rej(err);
        }
      }

      res({
        email: decoded.email
      });
    });
  });
};

Auth.updateUserPassword = function (_ref6) {
  var email = _ref6.email,
      password = _ref6.password,
      req = _ref6.req;
  var errors = [];

  if (validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(email) || validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(password)) {
    errors.push('type all credentials');
  }

  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isEmail(email)) {
    errors.push('type valid Email');
  }

  if (!validator__WEBPACK_IMPORTED_MODULE_0___default.a.isLength(password, {
    min: 6,
    max: 24
  })) {
    errors.push('password should be in 6 to 24 char range');
  }

  if (errors.length > 0) {
    throw new Error(errors);
  }

  return _models_user__WEBPACK_IMPORTED_MODULE_2__["default"].findOne({
    email: email
  }).then(function (user, err) {
    if (err) {
      throw new Error('something went wrong,try again');
    }

    if (!user) {
      throw new Error('User not found');
    }

    user.password = password;
    return user.save();
  }).then(function (user) {
    Promise.resolve({
      email: email
    });
  }).catch(function (e) {
    throw new Error(e);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./services/passport.js":
/*!******************************!*\
  !*** ./services/passport.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20");
/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./models/user.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_6__);








__webpack_require__(/*! dotenv */ "dotenv").config({
  path: path__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(process.cwd(), 'config/keys/.env')
});

passport__WEBPACK_IMPORTED_MODULE_2___default.a.serializeUser(function (user, done) {
  done(null, user.id);
});
passport__WEBPACK_IMPORTED_MODULE_2___default.a.deserializeUser(function (id, done) {
  _models_user__WEBPACK_IMPORTED_MODULE_4__["default"].findById(id).then(function (user) {
    done(null, user);
  });
}); /////////////////// Google Authentication /////////////////////////

var googleOption = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_AUTH_SUCCESS_CALLBACK,
  proxy: true
};
var GoogleAuth = new passport_google_oauth20__WEBPACK_IMPORTED_MODULE_3__["Strategy"](googleOption,
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(accessToken, refreshToken, profile, done) {
    var existingUser, newUser;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models_user__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({
              googleId: profile.id
            });

          case 2:
            existingUser = _context.sent;

            if (!existingUser) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", done(null, existingUser));

          case 5:
            newUser = new _models_user__WEBPACK_IMPORTED_MODULE_4__["default"]({
              name: profile.displayName,
              email: profile.emails[0].value,
              password: profile.id,
              googleId: profile.id,
              isVerified: true
            });
            newUser.save(function (err, user, row) {
              if (err) {
                return done(err, null);
              }

              done(null, user);
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}()); /////////////////// Local Authentication ///////////////////////////

var LocalOption = {
  usernameField: 'email'
};
var LocalAuth = new passport_local__WEBPACK_IMPORTED_MODULE_6___default.a(LocalOption, function (email, password, done) {
  _models_user__WEBPACK_IMPORTED_MODULE_4__["default"].findOne({
    email: email.toLowerCase()
  }, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false);
    }

    user.comparePassword(password, function (err, isMatch) {
      if (err) {
        return done(err);
      }

      if (isMatch) {
        return done(null, user);
      }

      return done(null, false, 'Invalid_Credential');
    });
  });
});
passport__WEBPACK_IMPORTED_MODULE_2___default.a.use(LocalAuth);
passport__WEBPACK_IMPORTED_MODULE_2___default.a.use(GoogleAuth);

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "connect-redis":
/*!********************************!*\
  !*** external "connect-redis" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("connect-redis");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "csurf":
/*!************************!*\
  !*** external "csurf" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "hpp":
/*!**********************!*\
  !*** external "hpp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hpp");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pdfkit":
/*!*************************!*\
  !*** external "pdfkit" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pdfkit");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "rotating-file-stream":
/*!***************************************!*\
  !*** external "rotating-file-stream" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rotating-file-stream");

/***/ }),

/***/ "socket.io-redis":
/*!**********************************!*\
  !*** external "socket.io-redis" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-redis");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),

/***/ "x-xss-protection":
/*!***********************************!*\
  !*** external "x-xss-protection" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("x-xss-protection");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map