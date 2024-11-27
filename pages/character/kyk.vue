<template>
    <div id="container">
        <h1>삼행회(三行會)</h1>
        <div class="box-content">
            <div v-html=marked.parse(samhaeng)></div>
        </div>
        <div class="box-content" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px;">
            <div class="relative" style="aspect-ratio: 1 / 1;"><img src="/public/png/syg_crop.png"><a href="./character/syg"><div class="character-list gwansanggam"><div>서윤구</div><code>관상감</code></div></a></div>
            <div class="relative" style="aspect-ratio: 1 / 1;"><img src="/public/png/khy_crop.png"><a href="./character/khy"><div class="character-list jeonigam"><div>강호영</div><code>전의감</code></div></a></div>
            <div class="relative" style="aspect-ratio: 1 / 1;"><img src="/public/png/kih_crop.png"><a href="./character/kih"><div class="character-list sayogwon"><div>김인호</div><code>사역원</code></div></a></div>
            <div class="relative" style="aspect-ratio: 1 / 1;"><img src="/public/png/ydr_crop.png"><a href="./character/ydr"><div class="character-list yulhakchung"><div>유도리</div><code>율학청</code></div></a></div>
            <div class="relative" style="aspect-ratio: 1 / 1;"><img src="/public/png/odk_crop.png"><a href="./character/odk"><div class="character-list dohwaseo"><div>오다경</div><code>도화서</code></div></a></div>
            <div class="relative" style="aspect-ratio: 1 / 1;"><img src="/public/png/ls_crop.png"><a href="./character/ls"><div class="character-list jangakwon"><div>이슬</div><code>장악원</code></div></a></div>
        </div>
        <h1>삼행회 외부</h1>
        <div class="box-content" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2px;">
            <div class="relative" style="aspect-ratio: 1 / 1;"><img src="/public/png/kyk_crop.png"><a href="./character/kyk"><div class="character-list seonggyungwan"><div>김유겸</div><code>성균관</code></div></a></div>
        </div>
        <a href="/character">접기</a>
        <h1>서윤구</h1>
        <div class="box-content">
            <img src="/public/png/syg.png">
            <div class="character-profile-grid">
                <div class="character-profile-left gwansanggam">한자</div><div>徐輪球</div>
                <div class="character-profile-left gwansanggam">소속</div><div>관상감</div>
                <div class="character-profile-left gwansanggam">전공</div><div>천문학</div>
            </div>
            <div v-html=marked.parse(text)></div>
        </div>
    </div>
</template>

<script setup>
import { marked } from 'marked';

var samhaeng = await $fetch('https://raw.githubusercontent.com/jyhyun1008/hakdonal/main/md/samhaeng.md')
var text = await $fetch('https://raw.githubusercontent.com/jyhyun1008/hakdonal/main/md/syg.md')

</script>