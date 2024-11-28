<template>
    <div id="container">
        <h1>그림-모음</h1>
        <div class="box-content" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px;">
            <div></div>
        </div>
        <h1>글-모음</h1>
        <div style="display: flex; gap: 12px;">
            <a v-for="category of categories" :href="`/story/${category}`">{{ category }}</a>
        </div>
        <div class="box-content" style="display: flex; flex-direction: column; gap: 2px;">
            <div v-for="article of articles" class="article-items"><a :href="`/${article.category}/${article.url}`"><span>{{ article.title }}</span> <code>{{ article.category }}</code></a></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { marked } from 'marked';
import Parser from 'rss-parser';

const CORS_PROXY = "https://proxy.rongo.moe/?url=" //나중에 다른 서버로 바꿔줘야함
let parser = new Parser();

let feed = await parser.parseURL(CORS_PROXY + 'https://postype.com/@peacht-art/rss');
var episodes = feed.items
var articles = []
var categories = []

for (let j=0; j<episodes.length;j++) {
    if (episodes[j].title.includes('학 생도들의')) {
        articles.push({
            title: episodes[j].title.split('-')[2],
            category: episodes[j].title.split('-')[1],
            url: episodes[j].link.split('post/')[1]
        })
        categories.push(episodes[j].title.split('-')[1])
    }
}

var categorieset = new Set(categories);
categories = [...categorieset];

</script>