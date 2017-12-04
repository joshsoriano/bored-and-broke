export function saveUserID(userID) {
  sessionStorage.setItem('userID', userID);
}

export function getUserID() {
  return sessionStorage.getItem('userID');
}
