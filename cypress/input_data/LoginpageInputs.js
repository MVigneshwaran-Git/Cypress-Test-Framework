const LoginpageInputData = {
    url:{
        baseURL: 'https://www.saucedemo.com/v1/index.html',
    },
    validCredentials: {
        username: 'standard_user',
        password: 'secret_sauce',
    },
    invalidCredentials: {
        username: 'star',
        password: 'secre',
        errorMessageText: 'Epic sadface: Username and password do not match any user in this service',

    }
}

export default LoginpageInputData;