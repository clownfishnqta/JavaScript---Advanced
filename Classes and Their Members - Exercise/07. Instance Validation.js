class CheckingAccount {
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId () {
        return this._clientId;
    }

    set clientId (value) {
        if(/^[\d]{6}$/.test(value)){
            this._clientId = value;
        } else {
            throw TypeError('Client ID must be a 6-digit number')
        }
    }

    get email() {
        return this._email;
    }

    set email(value) {
        if(/^[a-zA-Z]+\@[a-z.]+$/.test(value)){
            this._email = value;
        } else {
            throw TypeError ('Invalid e-mail')
        }
    }

    get firstName(){
        return this._firstName;
    }

    set firstName (value){
        if(value.length < 3 || value.length > 20) {
            throw TypeError ('First name must be between 3 and 20 characters long')
        }
        if(/^[a-zA-Z]{3,20}$/.test(value)){
            this._firstName = value;
        } else  {
            throw TypeError ('First name must contain only Latin characters')
        }
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value){
        if(value.length < 3 || value.length > 20) {
            throw TypeError ('Last name must be between 3 and 20 characters long')
        }
        if(/^[a-zA-Z]{3,20}$/.test(value)){
            this._lastName = value;
        } else  {
            throw TypeError ('Last name must contain only Latin characters')
        }
    }
}