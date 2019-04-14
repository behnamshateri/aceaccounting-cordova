class Auth {
    // url = "/token";

    signInWithEmail(username, password) {
        // login with email and password
        return fetch("/token", {
            method: 'post',
            mode: 'no-cors',
            body: "username=" + username + "&password=" + password + "&grant_type=signinWithEmail&client_id=dotnetifydemo",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
        })
            .then(response => {
                if (!response.ok) throw new Error(response.status);
                return response.json();
            })
            .then(token => {
                window.localStorage.setItem("access_token", token.access_token);
            });
    }

    signInWithPhone(code, phone, countryISO2) {
        // login with email and password
        console.log(code, phone, countryISO2);
        return fetch("/token", {
            method: 'post',
            mode: 'no-cors',
            body: "phone=" + phone + "&code=" + code  +"&countryISO2="+ countryISO2+ "&grant_type=signinWithPhone&client_id=dotnetifydemo",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
        })
            .then(response => {
                if (!response.ok) throw new Error(response.status);
                return response.json();
            })
            .then(token => {
                window.localStorage.setItem("access_token", token.access_token);
            });
    }


    signInUserAfterSignUp(code, phone, countryISO2){
        // login with email and password
        console.log(code, phone, countryISO2)
        return fetch("/token", {
            method: 'post',
            mode: 'no-cors',
            body: "phone=" + phone + "&code=" + code +"&countryISO2="+ countryISO2+ "&grant_type=signup&client_id=dotnetifydemo",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
        })
            .then(response => {
                if (!response.ok) throw new Error(response.status);
                return response.json();
            })
            .then(token => {
                window.localStorage.setItem("access_token", token.access_token);
            });
    }

    signOut(){
        window.localStorage.removeItem("access_token");
        // Todo: handle redirect to login page without reloading after signout or change manually access token in local storage
        window.location.href = "/";
    }

    getAccessToken() {
        return window.localStorage.getItem("access_token");
    }

    hasAccessToken() {
        return this.getAccessToken() != null;
    }
}

export default new Auth();