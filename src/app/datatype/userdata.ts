export class UserCredential {
    id: string;
    pass: string;
}

export class UserData extends UserCredential{
    firstName: string;
    familyName: string;
    userName: string;
}
