export function saveUserID(userID) {
    sessionStorage.setItem('userID', userID);
}

export function getUserID() {
    return sessionStorage.getItem('userID');
}

export function removeUserID() {
    sessionStorage.removeItem('userID');
}

export function saveUserName(userName) {
    sessionStorage.setItem('userName', userName);
}

export function getUserName() {
    return sessionStorage.getItem('userName');
}

export function saveLocation(userLocation) {
    sessionStorage.setItem('userLocation', userLocation);
}

export function getUserLocation() {
    return sessionStorage.getItem('userLocation');
}

export function savePrice(userPrice) {
    sessionStorage.setItem('userPrice', userPrice);
}

export function getPrice() {
    return sessionStorage.getItem('userPrice');
}
