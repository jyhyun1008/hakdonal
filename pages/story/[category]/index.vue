<template>
    <div id="container">
        <h1>{{ route.params.category }}</h1>
        <div style="padding-bottom: 5px;"><a href="/story">돌아가기</a></div>
        <div style="display: flex; gap: 12px; padding-bottom: 5px">
            시리즈 목록: 
            <a v-for="category of categories" :href="`/story/${category}`">{{ category }}</a>
        </div>
        <div class="box-content" style="display: flex; flex-direction: column; gap: 2px;">
            <div v-for="article of articles_category" class="article-items"><a :href="`/story/${article.category}/${article.url}`"><span>{{ article.title }}</span> <code>{{ article.category }}</code></a></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { marked } from 'marked';
const route = useRoute()

var articles = []
var categories = []
var articles_category

async function parseRss() {

    const CORS_PROXY = "https://proxy.rongo.moe/?url=" //나중에 다른 서버로 바꿔줘야함

    const feed = await $fetch(CORS_PROXY + 'http://postype.com/@peacht-art/rss')

    var article_title = feed.split('<item><title><![CDATA[')
    var article_pubdate = feed.split('<pubDate>')
    var article_link = feed.split('isPermaLink="true">')

    for (let i=1; i< article_title.length; i++) {
        if (article_title[i].includes('학 생도들의')) {
            articles.push({
                title:article_title[i].split(']]></title>')[0].split(' - ')[2],
                category: article_title[i].split(']]></title>')[0].split(' - ')[1],
                url: article_link[i].split('</guid>')[0].split('post/')[1],
                pubDate: article_pubdate[i].split('</pubDate>')[0]
            })
            categories.push(article_title[i].split(']]></title>')[0].split(' - ')[1])
        }
    }

    var categorieset = new Set(categories);
    categories = [...categorieset];

    articles_category = articles.filter((atc) => atc.category == route.params.category)

}

await parseRss()

</script>