<template lang="pug">
div 
    h1.text-3xl.mb-5 MyNote
    AuthNotesForm/
</template>
<script lang="ts" setup>
definePageMeta({
    middleware:"auth",
})
</script>