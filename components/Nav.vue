<template lang="pug">
nav.nav
    ul.h-full.flex.items-center.px-10.py-5
        li.mr-2(
            v-for="nav in navList"
            :key="nav.title"
            @click="nav.clickHandler ?? null"
        ) 
            NuxtLink(:to="nav.routeName?`${nav.routeName}` : '#'") {{nav.title}}
        li.ml-auto.cursor-pointer(v-show="authIsLogIn" @click="logOut") LogOut
</template>
<script lang="ts" setup>
import useAuth from '~~/composables/useAuth';
// const { authData } = useAuth()
const { authIsLogIn, logOut, userInput } = useAuth();  
const { navList } = useNav()
</script>