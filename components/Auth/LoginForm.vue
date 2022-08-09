<template lang="pug">
div
  NCard.p-10
    h3.text-3xl.mb-2.capitalize {{ authState }}
    div.flex.flex-col.mb-1
      input.primary-input.mb-2(placeholder="email" type="email" v-model="userInput.email")
      input.primary-input(placeholder="password" type="password" v-model="userInput.password")
    p.text-red-300.mb-5(:class="[authError!==''?'opacity-100' : 'opacity-0']") {{authError}}
    Nbutton.primary-btn.mb-5(v-show = "authState === AuthState.LOGIN && !authData" @click="login(userInput)") Login
    Nbutton.primary-btn.mb-5(v-show = "authState === AuthState.SIGNUP && !authData" @click="signUp(userInput)") SignUp
    Nbutton.primary-btn.mb-5(v-show = "authData" @click="logOut") Logout
    p.mt-3.text-sm.text-blue-400.cursor-pointer(@click="switchAuthState") {{ authState === AuthState.LOGIN? "Don't have an account? Create one now" : "Already have an account? Login" }}
</template>
<script lang="ts" setup>
import { AuthState } from "@/types/gloable";
const { authState, authData, authError, switchAuthState, userInput, signUp, login, logOut } = useAuth();
const { supabase } = useSupabase();
</script>
