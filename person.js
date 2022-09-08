var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var InitialValues = {
    user_id: "",
    first_name: "",
    last_name: "",
    email: "",
    profile_photo: ""
};
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getId = function () {
        return this.first_name + " " + this.last_name;
    };
    User.prototype.getFullName = function () {
        return this.first_name + " " + this.last_name;
    };
    User.prototype.getEmail = function () {
        return this.first_name + " " + this.last_name;
    };
    User.prototype.getAvatar = function () {
        return this.profile_photo ? this.profile_photo : "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=";
    };
    User.prototype.saveUser = function (user_id, first_name, last_name, email, profile_photo) {
        var response = this.validateUser(user_id, first_name, last_name, email);
        if (response.status === "success") {
            this.user_id = user_id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
            this.profile_photo = profile_photo;
        }
        return response;
    };
    User.prototype.validateUser = function (user_id, first_name, last_name, email) {
        var data = InitialValues;
        var error = false;
        if (this.validateField(user_id)) {
            data = __assign(__assign({}, data), { user_id: "User Id is required" });
            error = true;
        }
        if (this.validateField(first_name)) {
            data = __assign(__assign({}, data), { first_name: "First Name is required" });
            error = true;
        }
        if (this.validateField(last_name)) {
            data = __assign(__assign({}, data), { last_name: "Last Name is required" });
            error = true;
        }
        if (this.validateField(email)) {
            data = __assign(__assign({}, data), { email: "Email is required" });
            error = true;
        }
        var status = error ? "error" : "success";
        var message = error ? "" : "successfully created";
        return { data: data, status: status, message: message };
    };
    User.prototype.validateField = function (str) {
        if (str === "") {
            return true;
        }
        return false;
    };
    return User;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    // constructors
    function Teacher() {
        return _super.call(this) || this;
    }
    // functions
    Teacher.prototype.getTeachersName = function () {
        return "Dear " + this.getFullName();
    };
    return Teacher;
}(User));
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    // constructors
    function Parent() {
        return _super.call(this) || this;
    }
    // functions
    Parent.prototype.getTeachersName = function () {
        return "Dear " + this.getFullName();
    };
    return Parent;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // constructors
    function Student() {
        return _super.call(this) || this;
    }
    return Student;
}(User));
