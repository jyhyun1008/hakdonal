<template>
    <div id="container">
        <h1>포스타입-모음</h1>
        <div style="display: flex; gap: 12px; padding-bottom: 5px">
            시리즈 목록: 
            <a v-for="category of categories" :href="`/story/${category}`">{{ category }}</a>
        </div>
        <div class="box-content" style="display: flex; flex-direction: column; gap: 2px;">
            <div v-for="article of articles" class="article-items"><a :href="`/story/${article.category}/${article.url}`"><span>{{ article.title }}</span> <code>{{ article.category }}</code></a></div>
        </div>
        <h1>그림-모음</h1>
        <div class="box-content" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px;">
            <div></div>
        </div>
    </div>
</template>

<script setup>

var articles = []
var categories = []

async function parseRss() {

    const CORS_PROXY = "https://proxy.peacht.art/?url=" //나중에 다른 서버로 바꿔줘야함

    const feed = await $fetch(CORS_PROXY + 'http://postype.com/@peacht-art/rss')

    var article_title = feed.split('<item><title><![CDATA[')
    var article_pubdate = feed.split('<pubDate>')
    var article_link = feed.split('isPermaLink="true">')

    for (let i=0; i< article_title.length-1; i++) {
        if (article_title[i+1].includes('학 생도들의')) {

            
            articles.push({
                title:article_title[i+1].split(']]></title>')[0].split(' - ')[2],
                category: article_title[i+1].split(']]></title>')[0].split(' - ')[1],
                url: article_link[i+1].split('</guid>')[0].split('post/')[1],
                pubDate: article_pubdate[i+1].split('</pubDate>')[0]
            })
            categories.push(article_title[i+1].split(']]></title>')[0].split(' - ')[1])
        }
    }

    var categorieset = new Set(categories);
    categories = [...categorieset];

}

await parseRss()


</script>