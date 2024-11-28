<template>
    <div id="container">
        <h1>{{ content_title }}</h1>
        <a :href="`/story/${content_category}`">{{ content_category }}</a>
        <div class="box-content">
            <div v-for="img of content_img"><img :src=img></div>
        </div>
        <a :href="`https://postype.com/@peacht-art/post/${route.params.article}`" target="_blank">덧글 달고 후원하러 가기</a>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import { marked } from 'marked';
const route = useRoute()

const CORS_PROXY = "https://proxy.rongo.moe/?url=https://postype.com/@peacht-art/post/"
let content = await $fetch(CORS_PROXY + route.params.article)
content = content.replace(/\\/gm, '')

var content_title = content.split('<h1 class="MuiTypography-root MuiTypography-body-md joy-d3qw43">')[1].split('</h1>')[0].split('-')[2]
var content_category = content.split('<h1 class="MuiTypography-root MuiTypography-body-md joy-d3qw43">')[1].split('</h1>')[0].split('-')[1]

var content_prev, content_next
// if (content.includes('joy-6mbqgc')) {
//     content_prev = content.split('<section class="MuiStack-root post-navigation joy-1tk24vt">')[1].split('class="MuiStack-root joy-6mbqgc" href="/@peacht-art/post/')[1].split('"')[0]
// }
// if (content.includes('joy-vce80x')) {
//     content_next = content.split('<section class="MuiStack-root post-navigation joy-1tk24vt">')[1].split('class="MuiStack-root joy-vce80x" href="/@peacht-art/post/')[1].split('"')[0]
// }

let content_img = []

var content_list = content.split('<div class="photoset-inner">')
for (var j=1; j<content_list.length; j++){
    if (content_list[j].includes('" data-caption="')){
        content_img.push(content_list[j].split('data-caption="')[1].split('" class="photo"')[0])
    }
}

</script>