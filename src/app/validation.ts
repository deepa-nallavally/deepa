import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Validation {
    static passwordMatch(control:AbstractControl):ValidationErrors | null {
        let Password=control.get('Password');
        let Confirmpassword=control.get('Confirmpassword');

        if(Password.value!==Confirmpassword.value)
            return {passwordMatch:true};
           
        return null;
    }
}

