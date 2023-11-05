export function format(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    if (phoneNumber[0] === "7" || phoneNumber[0] === "9") {
        return `+${phoneNumber[0]}(${phoneNumber.substring(1, 4)})${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7, 9)}-${phoneNumber.substring(9, 11)}`
    }
    if (phoneNumber[0] === "8") {
        return `${phoneNumber[0]}(${phoneNumber.substring(1, 4)})${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7, 9)}-${phoneNumber.substring(9, 11)}`
    } else {
        return `+${phoneNumber.substring(0, 16)}`
    }

}
