export function validateNameAndSurname(field) {
    if(field !== '' && undefined !== field && field.length >= 2) return true
    else return false
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validatePhoneNumber(phone) {
    const regex = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/im
    if(phone === "" || regex.test(String(phone))) return true
    else return false
}

export function validateMessage(message) {
    if(message !== '' && undefined !== message && message.length > 5) return true
    else return false
}

export default function isFormCorrect(form) {
    if(validateNameAndSurname(form.name) &&
        validateEmail(form.email) &&
        validatePhoneNumber(form.phone) &&
        validateMessage(form.message)) return true
    else return false
}