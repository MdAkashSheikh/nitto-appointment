export function saveJWT(jwtToken) {
    window.localStorage.setItem('jwt_token_assist', jwtToken);
}

export function getJWT() {
    return window.localStorage.getItem('jwt_token_assist');
}

export function saveUserName(userName) {
    window.localStorage.setItem('jwtUserName', userName);
}

export function getUserName() {
    return window.localStorage.getItem('jwtUserName');
}
export function deleteToken() {
    window.localStorage.removeItem('jwt_token_assist');
    window.localStorage.removeItem('jwtUserName');
}