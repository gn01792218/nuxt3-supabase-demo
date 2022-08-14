export default defineNuxtRouteMiddleware(() => {
    const { authData, authIsLogIn } = useAuth()
    
    if(!authIsLogIn.value){
        return navigateTo("/authRedirect")
    }
});
