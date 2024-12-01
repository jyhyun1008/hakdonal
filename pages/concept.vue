<template>
    <div id="container">
        <h1>콘셉트</h1>
        <div class="box-content">
            <div v-html=marked.parse(concept)></div>
        </div>
        <h1>해시태그</h1>
        <div class="box-content">
            <div>
                <p>모든 종류의 단문 SNS에서</p>
                <ul>
                    <li>#OO학생도들의나날 - 알파벳 'O' 사용</li>
                    <li>#학도날 - 간이 해시태그</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { marked } from 'marked';

var concept = await $fetch('https://raw.githubusercontent.com/jyhyun1008/hakdonal/main/md/concept.md')

</script>