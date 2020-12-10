import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';

const user = { 
    id: 1, 
    username: 'test', 
    password: 'test', 
    firstName: 'Test', 
    lastName: 'User', 
    role: 'Admin', 
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJDb2RlcnRoZW1lIiwiaWF0IjoxNTU1NjgyNTc1LCJleHAiOjE1ODcyMTg1NzUsImF1ZCI6ImNvZGVydGhlbWVzLmNvbSIsInN1YiI6InRlc3QiLCJmaXJzdG5hbWUiOiJIeXBlciIsImxhc3RuYW1lIjoiVGVzdCIsIkVtYWlsIjoidGVzdEBoeXBlci5jb2RlcnRoZW1lcy5jb20iLCJSb2xlIjoiQWRtaW4ifQ.8qHJDbs5nw4FBTr3F8Xc1NJYOMSJmGnRma7pji0YwB4'
};

const isUserAuthenticated = () => {
    const user = getLoggedInUser();
    if (!user) {
        return false;
    }
    const decoded = jwtDecode(user.token);
    return true;
    // const currentTime = Date.now() / 1000;
    // if (decoded.exp < currentTime) {
    //     console.warn('access token expired');
    //     return false;
    // } else {
    //     return true;
    // }
};

const getLoggedInUser = () => {
    const cookies = new Cookies();    
    // const user = cookies.get('user');
    return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};

export { isUserAuthenticated, getLoggedInUser };