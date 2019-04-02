import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config: any = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'invalidPhoneNumber': 'Please enter phone in valid format xxx-xxx-xxxx',
            'invalidYear': 'Please enter year between 1920-2017',
            'invalidZipCode': 'Please enter a valid zipcode',
            'invalidSSN': 'Please enter valid Social Security Number with out any space or dash',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

    static creditCardValidator(control: any) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        // tslint:disable-next-line:max-line-length
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.pristine || control.value.match(/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

     static phoneValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[0-9]{3}[0-9]{3}[0-9]{4}$/) ) {
            return null;
        } else {
            return { 'invalidPhoneNumber': true };
        }
    }

    static phoneAllValidator(control:any) {
        // RFC 2822 compliant regex
        if (control.value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/) ){
            return null;
        } else {
            return { 'invalidPhoneNumber': true };
        }
    }

     static zipValidator(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/^\d{5}(?:[-\s]\d{4})?$/) ){
            return null;
        } else {
            return { 'invalidZipCode': true };
        }
    }

     static yearValidator(control: any) {
        // Check for dates between 1920-2017
        if (control.value.match(/^(19[2-9]\d|20[0-1][0-7])$/) ){
            return null;
        } else {
            return { 'invalidYear': true };
        }
    }


      static ssnValidator(control: any) {
        // RFC 2822 compliant regex
        //Contain all zeroes in any specific group (ie 000-##-####, ###-00-####, or ###-##-0000)
        //Begin with ’666′.
        //Begin with any value from ’900-999′
        //Be ’078-05-1120′ (due to the Woolworth’s Wallet Fiasco)
        if (control.value.match(/^(?!\b(\d)\1+-(\d)\1+-(\d)\1+\b)(?!123-45-6789|219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/)){
            return null;
        } else {
            return { 'invalidSSN': true };
        }
    }

    static passwordValidator(control :any) {
        // {6,10}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,10}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
            return (group: FormGroup): {[key: string]: any} => {                
            const password = group.controls[passwordKey];
            const confirmPassword = group.controls[confirmPasswordKey];            
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                }
            } else {
                return null
            }
        } 
    }
}