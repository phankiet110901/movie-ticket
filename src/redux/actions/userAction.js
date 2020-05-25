const UserLogin = (userName) => {
    return {
        type: "Login",
        payload: userName
    }
}



export{
    UserLogin
}