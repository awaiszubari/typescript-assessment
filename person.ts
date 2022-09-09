interface IPerson {
    user_id: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_photo: string;
}

interface IResponse {
    data: IPerson;
    message: string;
    status: string;
}

interface IMessage{
    sender: string;
    receiver: string;
    message_text: string;
    creation_time: string;
    message_type: string;
}

const InitialValues = {
    user_id: "",
    first_name: "",
    last_name: "",
    email: "",
    profile_photo: "",
}

class User implements IPerson {
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

        let response = this.validateUser(user_id, first_name, last_name, email, profile_photo);
        if (response.status === "success") {
            this.user_id = user_id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
            this.profile_photo = profile_photo;
        }
        return response;
    }

    validateUser(user_id: string, first_name: string, last_name: string, email: string, profile_photo: string): IResponse {
        let data: IPerson = InitialValues;
        console.log("validateField", this.validateField(email));

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
            console.log("awais")
            debugger
            let c = this.validateEmail(email);
            let text = "Email is required";
            data = { ...data, email: text }
            error = true;
        } else {
            if (!this.validateEmail(email)) {
                let text = "Please enter valid email";
                data = { ...data, email: text }
                error = true;
            }

        } if (!this.validateField(profile_photo)) {
            let text = "";
            if (!this.validateImageUrl(profile_photo)) {
                text = "Image url invalid";
                data = { ...data, profile_photo: text }
                error = true;
            }
        }
        console.log("TEST", data);
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

    validateEmail(email: string): boolean {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    validateImageUrl(str: string): boolean {
        let flag = (str.toLowerCase().indexOf(".jpg") >= 0);
        return flag;
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

class Message implements IMessage {

    sender: string;
    receiver: string;
    message_text: string;
    creation_time: string;
    message_type: string;

    getsenderName(): string {
        return this.sender;
    }
    getReceiverName(): string {
        return this.receiver;
    }
    getMessageType(): string {
        return this.message_type;
    }
    getMessageText(): string {
        return this.message_text;
    }

    getCreateionTime(): string {
        return this.creation_time;
    }

}




