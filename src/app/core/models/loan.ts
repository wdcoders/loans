export class Loan {
    _id: string;
    loanName: string;
    loanType: string;
    loanAmount: number;
    loanIssueDate: Date;
    loanStatus: string;

    constructor(_id: string, loanName: string, loanType: string, loanAmount: number, loanIssueDate: Date, loanStatus: string) {
        this._id = _id;
        this.loanName = loanName;
        this.loanType = loanType;
        this.loanAmount = loanAmount;
        this.loanIssueDate = loanIssueDate;
        this.loanStatus = loanStatus;
    }
}
