export function saveJWT(jwtToken) {
    window.localStorage.setItem('jwt_token', jwtToken);
}

export function getJWT() {
    return window.localStorage.getItem('jwt_token');
}

export function deleteToken() {
    window.localStorage.removeItem('jwt_token');
}