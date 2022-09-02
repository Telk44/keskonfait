import axios from 'axios'

const API_URL = '/auth/signup'

//register user
const register = async(userData) => {
            const response = await axios.post(API_URL, userData)
            if(response.data) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
    console.log("localstorage depuis register",localStorage)
            return response.data
}

//login User
const API_URL_LOGIN = '/auth/login'
const login = async(userData) => {
    const response = await axios.post(API_URL_LOGIN, userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))

    }
    console.log("localstorage depuis signup",localStorage)
    return response.data
}

//Logout User
const logout = () => localStorage.removeItem('user')

const authService = {
    register,
    logout,
    login
}

export default authService