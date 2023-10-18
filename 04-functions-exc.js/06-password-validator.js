function passwordValidator(pass) {
    let isValidLength = checkPassLength(pass);

    let isOnlyDigitsLetters = checkOnlyDigitsLetters(pass);
    let isMin2Digits = checkMin2Digits(pass);
    if (isValidLength && isOnlyDigitsLetters && isMin2Digits) {
        console.log("Password is valid");
    }

    function checkPassLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }

    function checkOnlyDigitsLetters(pass) {
        for (curChar of pass) {
            let charCode = curChar.charCodeAt(0);
            if (
                !((charCode >= 48 && charCode <= 57) ||
                    (charCode >= 65 && charCode <= 90) ||
                    (charCode >= 97 && charCode <= 122))
            ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }
                
        }
        return true;


    }

    function checkMin2Digits(pass) {
        let digits = 0;
        for (curChar of pass) {
            let charCode = curChar.charCodeAt(0);
            if (charCode >= 48 && charCode <= 57) {
                digits++
            }
        }
        if (digits >= 2) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }


}
passwordValidator('Pa$s$s')