export function saveJWT(jwtToken) {
    window.localStorage.setItem('jwt_token_admin', jwtToken);
}

export function getJWT() {
    return window.localStorage.getItem('jwt_token_admin');
}

export function deleteToken() {
    window.localStorage.removeItem('jwt_token_admin');
}