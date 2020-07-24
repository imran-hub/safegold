export interface Login {
    email?: string;
    mobile_no: any;
    secret: string;
}

export interface Register {
    fullName: string;
    email?: string;
    mobileNumber: string;
    secret: string;
}