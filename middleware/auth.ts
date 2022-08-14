export default defineNuxtRouteMiddleware(() => {
    const { authData } = useAuth()
    
    if(!authData.value){
        console.log('使用者尚未登入')
        return navigateTo("/authRedirect")
    }
});
