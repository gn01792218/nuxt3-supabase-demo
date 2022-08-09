<template lang="pug">
div
    AuthLoginForm(v-if="!authData")/ 
    div(v-else) 您已登入
        Button.primary-btn(@click="logOut") 登出
</template>
<script lang="ts" setup>
const { authData, logOut } = useAuth();
</script>
