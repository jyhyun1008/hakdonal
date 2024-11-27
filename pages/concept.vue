<template>
    <div id="container">
        <h1>콘셉트</h1>
        <div class="box-content">
            <div v-html=marked.parse(concept)></div>
        </div>
    </div>
</template>

<script setup>
import { marked } from 'marked';

var concept = await $fetch('https://raw.githubusercontent.com/jyhyun1008/hakdonal/main/md/concept.md')

</script>