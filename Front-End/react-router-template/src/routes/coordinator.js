
export const goToHome = (navigate) =>{
    navigate('/')
}

export const goToProfile = (navigate, name) =>{
    navigate(`/profile/${name}`)
}