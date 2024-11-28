<template>
    <div id="container">
        <h1>{{ content_title }}</h1>
        <div style="padding-bottom: 5px;">카테고리: <a :href="`/story/${content_category}`">{{ content_category }}</a></div>
        <div class="box-content" v-html=content_html>
        </div>
        <a :href="`https://postype.com/@peacht-art/post/${route.params.article}`" target="_blank" style="display: block; width: 100%; text-align: center; border-radius: 10px; background-color: var(--accent); color: white; padding: 4px;">덧글 달고 후원하러 가기</a>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import { marked } from 'marked';
const route = useRoute()

const CORS_PROXY = "https://proxy.rongo.moe/?url=https://postype.com/@peacht-art/post/"
let content = await $fetch(CORS_PROXY + route.params.article)
content = content.replace(/\\/gm, '')

var content_title = content.split('<h1 class="MuiTypography-root MuiTypography-body-md joy-d3qw43">')[1].split('</h1>')[0].split(' - ')[2]
var content_category = content.split('<h1 class="MuiTypography-root MuiTypography-body-md joy-d3qw43">')[1].split('</h1>')[0].split(' - ')[1]

var content_prev, content_next
// if (content.includes('joy-6mbqgc')) {
//     content_prev = content.split('<section class="MuiStack-root post-navigation joy-1tk24vt">')[1].split('class="MuiStack-root joy-6mbqgc" href="/@peacht-art/post/')[1].split('"')[0]
// }
// if (content.includes('joy-vce80x')) {
//     content_next = content.split('<section class="MuiStack-root post-navigation joy-1tk24vt">')[1].split('class="MuiStack-root joy-vce80x" href="/@peacht-art/post/')[1].split('"')[0]
// }

let content_img = []
let content_html = content.split('div class="post-content v2 editor-v5   text-left font-sans-serif" id="post-content">')[1].split('<section class="pay pay-support"><div class="vcard">')[0]
content_html = content_html.replace(/img src\=\"(.+)\" alt\=\"(.+)\"/gm, 'img src="$2" alt=""')

var content_list = content.split('<div class="photoset-inner">')
for (var j=1; j<content_list.length; j++){
    if (content_list[j].includes('img ')){
        content_img.push(content_list[j].split('data-caption="')[1].split('" class="photo"')[0])
    }
}

</script>