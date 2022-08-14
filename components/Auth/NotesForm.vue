<template lang="pug">
div
    div
        input.primary-input.mb-2(placeholder="title" v-model="notesInput.title")
        textarea.primary-input(placeholder="note" v-model="notesInput.note")
        NButton.primary-btn(@click="addNotes(notesInput)") 送出
    div.mt-5
        NCard.mb-2(
            v-for="note in notes"
            :key="note.id"
        )
            h3.text-2xl {{note.title}}
            p {{note.note}}

</template>
<script lang="ts" setup>
const { notes, notesInput, addNotes, getAuthNotes } = useAuthNote()
getAuthNotes()
</script>