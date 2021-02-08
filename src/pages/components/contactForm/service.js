export function validateNameAndSurname(field) {
    if(field != '' && field.length > 3) return true
    else return false
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validatePhoneNumber(phone) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if(phone === "" || regex.test(String(phone))) return true
    else return false
}

export function validateMessage(message) {
    if(message != '' && message.length > 10) return true
    else return false
}

export function isFormCorrect(form) {
    if(validateNameAndSurname(form.name) &&
        validateNameAndSurname(form.surname) &&
        validateEmail(form.email) &&
        validatePhoneNumber(form.phone) &&
        validateMessage(form.message)) return true
    else return false
}