<template lang="pug">
div 
    NCard.p-10
        h3.text-3xl.mb-2.capitalize {{ authState }}
        div.flex.flex-col
            input.primary-input(placeholder="email")
            input.primary-input(placeholder="password")
        Nbutton.primary-btn.mb-5 Login
        p.mt-3.text-sm.text-blue-400.cursor-pointer(
            @click="switchAuthState"
        ) {{authState === AuthState.LOGIN? "Don't have an account? Create one now" : "Already have an account? Login"}}

</template>
<script lang="ts" setup>
import { AuthState } from "@/types/gloable";
const { authState, switchAuthState } = useAuth()

</script>