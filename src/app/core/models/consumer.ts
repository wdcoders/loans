export class Consumer {
    _id: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    dob: string;

    constructor(_id: string, firstName: string, lastName: string, emailAddress: string, phoneNumber: string, dob: string) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.dob = dob;
    }
}
