
export const getUserId = () => {
    if(localStorage.getItem('login') === 'null')
        localStorage.setItem('login', JSON.stringify({login: false}))
    else{
        const {login} = JSON.parse(localStorage.getItem('login'))
        if(login){
            const {userId} = JSON.parse(localStorage.getItem('login'))
            return userId
        }
    }
    return null
}