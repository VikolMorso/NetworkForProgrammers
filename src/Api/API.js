import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "f31e96ab-e0de-473e-a59d-f95043afee5c"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const UsersApi = {
    follow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            if (response.data.resultCode === 0) {
                return response

            }
        })
    },
    unFollow(id) {
        return instance.post(`follow/${id}`).then(response => {
            if (response.data.resultCode === 0) {
                return response
            }
        })
    },
    getUsers(currentPage = 1, page = 10) {
        return instance.get(`users?page=${currentPage}&count=${page} `).then(response => response.data)

    },
    getOurUser() {
        return instance.get(`auth/me `)
    },
    getProfileUser(userId) {
        return ProfileAPI.getProfileUser(userId)
        // instance.get(`profile/`+userId)
    },
    login(email, password, rememberMe = false, captcha ){
        
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout(){
        
        return instance.delete('auth/login')
    },
    getCaptcha(){
        
        return instance.get('/security/get-captcha-url')
    },
    getFriends(currentPage = 1, page = 10){
        return instance.get(`users?page=${currentPage}&count=${page}&friend=true `).then(response => response.data)
    },
    searchUser(user){
        return instance.get(`users?term=${user}`).then(response => response.data)
    },



}

export const ProfileAPI = {
    getProfileUser(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatusUser(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        
        return instance.put(`profile/status`, { status: status }).then(response => {
            
            if (response.data.resultCode === 0) {
                return response
            }
        }
        )
    },
    savePhoto(photo) {
        var formData = new FormData();
        formData.append("image", photo)
        
        return instance.post(`profile/photo/`, formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(data) {
        
        return instance.put(`profile/`, data)
    },
    
}
