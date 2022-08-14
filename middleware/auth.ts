export default defineNuxtRouteMiddleware(() => {
    const { authData } = useAuth()
    
    if(!authData.value){
        return navigateTo("/authRedirect")
    }
});
