<template>
    <div id="container">
        <h1>가게</h1>
        <div class="box-content" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px;">
            <div v-for="item of items" class="relative" style="aspect-ratio: 1 / 1;">
                <img :src=item.img>
                <a :href=item.url>
                    <div class="character-list"><div style="text-align: center;">{{ item.title }}</div><code>{{ item.price }}</code></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>

var content = await $fetch('https://proxy.rongo.moe/?url=https://marpple.shop/kr/peachtart')
content = content.replace(/\n/gm, '').replace(/\s{1,8}/gm, ' ')
var contentList = content.split('data-rune-parent="ProductCardList"')

var items = []

async function parseRss() {
for (let i=1; i< contentList.length; i++) {
    //if (contentList[i].includes('학 생도들의')) {
        items.push({
            img: contentList[i].split('data-src="')[1].split('?')[0],
            title: contentList[i].split('ProductCardName font_16_medium_kr product_name__641c40b7" >')[1].split('<')[0],
            price: contentList[i].split('class="price-number font_20_unica_bold">')[1].split('<')[0],
            url: 'https://marpple.shop/kr/peachtart/products/'+ contentList[i].split('products/')[1].split('"')[0]
        })
    //}
}
}

await parseRss()

</script>