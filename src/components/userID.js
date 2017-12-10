export function saveUserID(userID) {
  sessionStorage.setItem('userID', userID);
}

export function getUserID() {
  return sessionStorage.getItem('userID');
}

export function removeUserID() {
  console.log('removing user id');
  sessionStorage.removeItem('userID');
}

export function saveUserName(userName) {
    sessionStorage.setItem('userName', userName);
}

export function getUserName() {
  return sessionStorage.getItem('userName');
}
