<template lang="pug">
div
    AuthLoginForm(v-if="!authData")/ 
    div(v-else) 您已登入
        NButton.primary-btn.ml-5(@click="logOut") 登出
</template>
<script lang="ts" setup>
// const { authData } = useAuth()
const {  authData, logOut } = useAuth()
</script>
