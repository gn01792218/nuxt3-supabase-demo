import { AuthState } from "@/types/gloable";
export default function useAuth() {
  const authState = ref<AuthState>(AuthState.LOGIN);
  
  function switchAuthState() {
    if (authState.value === AuthState.LOGIN) authState.value = AuthState.SIGNUP;
    else authState.value = AuthState.LOGIN;
  }
  return {
    //data
    authState,
    //methods
    switchAuthState,
  };
}
