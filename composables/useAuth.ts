import { AuthState, Auth } from "@/types/gloable";
import useSupabase from "@/composables/useSupabase"
export default function useAuth() {
  const { supabase } = useSupabase()
  const router = useRouter()

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
  const showCheckEmailMsg = ref(false)

  const authIsLogIn = computed(()=>{
    return authData.value!== null && authData.value!==undefined
  })

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
    },
    { //第二個參數物件，設置email確認信，導向profile page
      redirectTo:`${window.location.origin}/profile`
    })

    showCheckEmailMsg.value = true
    clearAuthError()

    if(error) authError.value = error.message
  }
  async function login(auth:Auth){
    const { email, password } = auth

    const { user, error } =await supabase.auth.signIn({
      email,
      password,
    })

    clearAuthError()

    router.push('/profile')

    if(error) authError.value = error.message
  }

  async function logOut(){
    const { error } = await supabase.auth.signOut()

    clearAuthError()
    router.push('/')
    
    if(error) authError.value = error.message
    console.log(authIsLogIn.value)
  }
  function clearAuthError(){
    if(authError.value) authError.value = ""
  }
  return {
    //data
    authData,
    authState,
    userInput,
    authError,
    showCheckEmailMsg,
    authIsLogIn,
    //methods
    switchAuthState,
    signUp,
    login,
    logOut,
  };
}
