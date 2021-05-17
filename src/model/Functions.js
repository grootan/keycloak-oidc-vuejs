export const getCurrentUser = () => {
    if (GetCookieValue("Keycloak_Auth")) {
      return true;
    }
    return false;
}
export const GetCookieValue = (cookiename) => {
    console.log(cookiename)
    let getCookie = document.cookie.match(new RegExp('(^| )' + cookiename + '=([^;]+)'));
    if (getCookie) {
        return getCookie[2];
    } else {
        return false;
    }
}
export const SetCookieValue = (cookiename, value) => {
    let date = new Date();
    let daysToExpire = 1;
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = cookiename + "=" + value + "; expires=" + date.toGMTString() + "; path=/";
    return true;
}
export const parseToken = function(token) {
    if(token === ""){
        return null;
    }
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var authObject = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(authObject);
};
