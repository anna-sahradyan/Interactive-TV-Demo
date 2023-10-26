 export const formatPhoneNumber = (inputValue) => {
    // Remove all non-numeric characters
    const numericValue = inputValue.replace(/\D/g, "");
    let formattedPhoneNumber = "";

    if (numericValue.length > 0) {
        if (["7", "9"].indexOf(numericValue[0]) > -1) {
            formattedPhoneNumber = "+7(" + numericValue[0];

            if (numericValue.length > 1) {
                formattedPhoneNumber += numericValue.substring(1, 3);
            }
            if (numericValue.length >= 4) {
                formattedPhoneNumber += ")";
            }
            if (numericValue.length >= 5) {
                formattedPhoneNumber += " " + numericValue.substring(3, 6);
            }
            if (numericValue.length >= 7) {
                formattedPhoneNumber += "-" + numericValue.substring(6, 9);
            }
            if (numericValue.length >= 10) {
                formattedPhoneNumber += "-" + numericValue.substring(9, 12);
            }
        } else if (numericValue[0] === "8") {
            formattedPhoneNumber = numericValue.substring(0, 1) + "(" + numericValue.substring(1, 4);
            if (numericValue.length >= 4) {
                formattedPhoneNumber += ")";
            }
            if (numericValue.length >= 5) {
                formattedPhoneNumber += " " + numericValue.substring(4, 7);
            }
            if (numericValue.length >= 7) {
                formattedPhoneNumber += "-" + numericValue.substring(7, 10);
            }
            if (numericValue.length >= 10) {
                formattedPhoneNumber += "-" + numericValue.substring(10, 13);
            }
        } else {
            formattedPhoneNumber = "+" + numericValue.substring(0, 16);
        }
    }

    return formattedPhoneNumber;
};

