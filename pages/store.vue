<template>
    <div id="container">
        <h1>가게</h1>
        <div v-if="items.length" class="box-content" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px;">
            <div v-for="item of items" class="relative" style="aspect-ratio: 1 / 1;">
                <img :src=item.img>
                <a :href=item.url target="_blank">
                    <div class="character-list"><div style="text-align: center;">{{ item.title }}</div><code>{{ item.price }}</code></div>
                </a>
            </div>
        </div>
        <div v-else class="box-content">현재 판매 중인 상품이 없습니다.</div>
        <h1>부스 일정</h1>
        <div class="box-content" v-html=marked.parse(offline)></div>
    </div>
</template>

<script setup>

import { marked } from 'marked';

var content = await $fetch('https://proxy.peacht.art/?url=https://marpple.shop/kr/peachtart/products/')
content = content.replace(/\n/gm, '').replace(/\s{1,8}/gm, ' ')
var contentList = content.split('data-rune-parent="ProductCardList"')

for (let i=1; i<contentList.length; i++) {
    contentList[i] = contentList[i].split('{"data"')[0]
}

var items = []

async function parseRss() {
    for (let i=1; i<contentList.length; i++) {
        if (contentList[i].includes('학 생도들의')) {
            items.push({
                img: contentList[i].split('data-src="')[1].split('?')[0],
                title: contentList[i].split('ProductCardName font_16_medium_kr product_name__641c40b7" >')[1].split('<')[0],
                price: contentList[i].split('class="price-number font_20_unica_bold">')[1].split('<')[0],
                url: 'https://marpple.shop/kr/peachtart/products/'+ contentList[i].split('products/')[1].split('"')[0]
            })
        }
    }
}

await parseRss()

var offline = await $fetch('https://raw.githubusercontent.com/jyhyun1008/hakdonal/main/md/offline.md')

</script>