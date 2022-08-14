<template lang="pug">
div
    AuthLoginForm(v-if="!authIsLogIn")/ 
    div(v-else) 您已登入
        NButton.primary-btn.ml-5(@click="logOut") 登出
</template>
<script lang="ts" setup>
const {  authIsLogIn, logOut } = useAuth()
</script>
