interface Person {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_photo: string;
}

interface IResponse {
    data: Person;
    message: string;
    status: string;
}

const InitialValues = {
    user_id: "",
    first_name: "",
    last_name: "",
    email: "",
    profile_photo: "",
}

class User implements Person {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_photo: string;
    getId(): string {
        return this.first_name + " " + this.last_name;
    }

    getFullName(): string {
        return this.first_name + " " + this.last_name;
    }
    getEmail(): string {
        return this.first_name + " " + this.last_name;
    }
    getAvatar(): string {
        return this.profile_photo ? this.profile_photo : "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=";
    }

    saveUser(user_id: string, first_name: string, last_name: string, email: string, profile_photo: string): IResponse {

        let response = this.validateUser(user_id, first_name, last_name, email);
        if (response.status === "success") {
            this.user_id = user_id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
            this.profile_photo = profile_photo;
        }
        return response;
    }

    validateUser(user_id: string, first_name: string, last_name: string, email: string): IResponse {
        let data: Person = InitialValues;
        let error = false;
        if (this.validateField(user_id)) {
            data = { ...data, user_id: "User Id is required" }
            error = true;
        } if (this.validateField(first_name)) {
            data = { ...data, first_name: "First Name is required" }
            error = true;
        } if (this.validateField(last_name)) {
            data = { ...data, last_name: "Last Name is required" }
            error = true;
        } if (this.validateField(email)) {
            data = { ...data, email: "Email is required" }
            error = true;
        }
        let status = error ? "error" : "success";
        let message = error ? "" : "successfully created";
        return { data, status, message: message };
    }

    validateField(str: string): boolean {
        if (str === "") {
            return true;
        }
        return false;
    }
}

class Teacher extends User {

    // constructors
    constructor() {
        super(); // calling Parent's constructor
    }

    // functions
    getTeachersName(): string {
        return "Dear " + this.getFullName();
    }
}

class Parent extends User {

    // constructors
    constructor() {
        super(); // calling Parent's constructor
    }


    // functions
    getTeachersName(): string {
        return "Dear " + this.getFullName();
    }
}

class Student extends User {

    // constructors
    constructor() {
        super(); // calling Parent's constructor
    }


}




