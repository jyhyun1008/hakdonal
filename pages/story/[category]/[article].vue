<template>
    <div id="container">
        <h1>{{ content_title }}</h1>
        <div style="padding-bottom: 5px;">카테고리: <a :href="`/story/${content_category}`">{{ content_category }}</a></div>
        <div class="box-content" v-html=content_html>
        </div>
        <div v-if="content_prev || content_next" style="display:flex; justify-content: space-around; gap: 10px; margin-bottom: 10px;">
            <div v-if="content_prev" class="prevnext"><a :href="`/story/${route.params.category}/${content_prev}`">이전</a></div>
            <div v-else class="prevnext">이전 글이 없습니다.</div>
            <div v-if="content_next" class="prevnext"><a :href="`/story/${route.params.category}/${content_next}`">다음</a></div>
            <div v-else class="prevnext">다음 글이 없습니다.</div>
        </div>
        <a :href="`https://postype.com/@peacht-art/post/${route.params.article}`" target="_blank" style="display: block; width: 100%; text-align: center; border-radius: 10px; background-color: var(--accent); color: white; padding: 4px;">덧글 달고 후원하러 가기</a>
    </div>
</template>

<script setup>

const route = useRoute()
const CORS_PROXY = "https://proxy.peacht.art/?url=" //나중에 다른 서버로 바꿔줘야함

var articles = []

async function parseRss() {

    const feed = await $fetch(CORS_PROXY + 'http://postype.com/@peacht-art/rss')

    var article_title = feed.split('<item><title><![CDATA[')
    var article_pubdate = feed.split('<pubDate>')
    var article_link = feed.split('isPermaLink="true">')

    for (let i=1; i< article_title.length; i++) {
        if (article_title[i].includes('학 생도들의') && article_title[i].split(']]></title>')[0].split(' - ')[1] == route.params.category) {
            articles.push({
                title:article_title[i].split(']]></title>')[0].split(' - ')[2],
                category: article_title[i].split(']]></title>')[0].split(' - ')[1],
                url: article_link[i].split('</guid>')[0].split('post/')[1],
                pubDate: article_pubdate[i].split('</pubDate>')[0]
            })
        }
    }
}

await parseRss()

let content = await $fetch(CORS_PROXY + 'https://postype.com/@peacht-art/post/' + route.params.article)
content = content.replace(/\\/gm, '')

var content_title = content.split('<h1 class="MuiTypography-root MuiTypography-body-md joy-d3qw43">')[1].split('</h1>')[0].split(' - ')[2]
var content_category = content.split('<h1 class="MuiTypography-root MuiTypography-body-md joy-d3qw43">')[1].split('</h1>')[0].split(' - ')[1]

var currentIndex = articles.findIndex((el) => el.url == route.params.article)
var content_prev, content_next
if (currentIndex > 0) {
    content_next = articles[currentIndex - 1].url
}
if (currentIndex < articles.length - 1) {
    content_prev = articles[currentIndex + 1].url
}

let content_img = []
let content_html = content.split('id="post-content">')[1].split('<section class="pay pay-support"><div class="vcard">')[0]
content_html = content_html.replace(/img src\=\"([^\"]+)\" alt\=\"([^\"]+)\"/gm, 'img src="$2" alt=""')

var content_list = content.split('<div class="photoset-inner">')
for (var j=1; j<content_list.length; j++){
    if (content_list[j].includes('img ')){
        content_img.push(content_list[j].split('data-caption="')[1].split('" class="photo"')[0])
    }
}

</script>