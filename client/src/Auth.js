import auth0 from "auth0-js"
import jwtDecode from "jwt-decode"

const LOGIN_SUCCESS_PAGE = "/"


class Auth {
    auth0 = new auth0.WebAuth({
        domain: "react2018.auth0.com",
        clientID: "nlQ9Uo0_Uo0LtAfHNo3bgG95jWnjgJrA",
        redirectUri: "https://ccfinder.herokuapp.com/callback",
        audience: "https://react2018.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid profile"
    })
    constructor(){
        this.login = this.login.bind(this)
    }

    login(){
        this.auth0.authorize();

    }
    
    handleAuthentication(){
        console.log("here")
        this.auth0.parseHash((err, result) =>{
            if (result && result.accessToken && result.idToken){
                let expiresAt = JSON.stringify(((result.expiresIn) *1000 + new Date().getTime()));

                window.localStorage.setItem("access-token", result.accessToken);
                window.localStorage.setItem("idToken", result.idToken);
                window.localStorage.setItem("expires_at", expiresAt)
                //eslint-disable-next-line
                location.hash = "";
                //eslint-disable-next-line
                location.pathname = LOGIN_SUCCESS_PAGE
            }
            else if (err){
                //eslint-disable-next-line
                // location.pathname = LOGIN_FAIL_PAGE
                console.log(err)
            }
        })
    }

    isAuthenticated(){
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"))
        return new Date().getTime() < expiresAt;
    }
    logout(){
        localStorage.removeItem("access-token");
        localStorage.removeItem("idToken");
        localStorage.removeItem("expires_at")
        localStorage.removeItem("profileID")
        //eslint-disable-next-line
        location.pathname = window.location.href

    }
    getProfile(){
        if (localStorage.getItem("idToken")){
            return jwtDecode(localStorage.getItem("idToken"))
        }
        else{
            return {}
        }
    }
}

export default Auth;