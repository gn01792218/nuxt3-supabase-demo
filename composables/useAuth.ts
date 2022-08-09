import { AuthState, Auth } from "@/types/gloable";
import useSupabase from "@/composables/useSupabase"
export default function useAuth() {
  const { supabase } = useSupabase()
  
  const userInput = ref<Auth>({
    email:"",
    password:"",
  })

  const authState = ref<AuthState>(AuthState.LOGIN);
  
  const authData = useState('user',()=>null)
  supabase.auth.onAuthStateChange((e, session)=>{  //自動監聽authState賦值給前端userData
    authData.value = session?.user
  })

  const authError = ref("")

  function switchAuthState() {
    if (authState.value === AuthState.LOGIN) authState.value = AuthState.SIGNUP;
    else authState.value = AuthState.LOGIN;
    clearAuthError()
  }

  async function signUp(auth:Auth){
    if(!auth.email) return

    const { email, password } = auth

    let {user,error} = await supabase.auth.signUp({
      email:email,
      password:password
    })
    clearAuthError()
    if(error) authError.value = error.message
    return user
  
  }
  async function login(auth:Auth){
    const { email, password } = auth

    const { user, error } =await supabase.auth.signIn({
      email,
      password,
    })
    clearAuthError()
    if(error) authError.value = error.message
  }

  async function logOut(){
    const { error } = await supabase.auth.signOut()
    
    clearAuthError()

    if(error) authError.value = error.message
  }
  function clearAuthError(){
    if(authError.value) authError.value = ""
  }
  return {
    //data
    authState,
    userInput,
    authData,
    authError,
    //methods
    switchAuthState,
    signUp,
    login,
    logOut,
  };
}
