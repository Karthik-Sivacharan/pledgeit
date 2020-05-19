import axios from 'axios'

const base_url = "http://localhost:5000/api/auth/"

const login = async (username, password) => {
    const endPoint = 'login';
    try{
        var res = await axios.post(base_url + endPoint, {
            username: username,
            password: password    
        });
        if(!res.data.success){
            throw res.data.msg;
        }
        return res.data;
    }
    catch(err){
       return res.data;
    }
}
const register = async (username, email, password) => {
    const endPoint = "register";
    try{
        var res = await axios.post(base_url + endPoint, {
            username: username,
            password: password,
            email: email    
        });
        if(!res.data.success){
            throw res.data.msg;
        }
        return res.data;
    }
    catch(err){
       return res.data;
    }
}

export const auth = {
    login, 
    register
}