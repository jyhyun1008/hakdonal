<template>
  <div id="app">
    <Head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <title>OO학 생도들의 나날</title>
        <meta name="summary" content="도성 전체가 누군가의 대학 캠퍼스였다면?">
        <meta property="og:image" content="/public/png/key_visual.jpg" /> 
        <meta property="og:title" content="OO학 생도들의 나날" /> 
        <meta property="og:description" content="조선후기, 도성 안에 있던 십학(十學)의 생도들이 서로 비슷한 교복을 맞춰입고 그중 관심사가 비슷한 사람끼리 교류하고 총학생회까지 있었다면 꽤 재밌었지 않았을까. 하는 상상에서 비롯된 캐릭터-중심으로 아무튼 일상을 이어가는 이야기." /> 
      <link rel="stylesheet" href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css">
    </Head>
    <NuxtLayout>
      <div id="decorator">
        <div id="top-decorator">
          <div style="background-color: var(--gwansanggam);"></div>
          <div style="background-color: var(--jeonigam);"></div>
          <div style="background-color: var(--sayogwon);"></div>
          <div style="background-color: var(--yulhakchung);"></div>
          <div style="background-color: var(--sanhakchung);"></div>
          <div style="background-color: var(--dohwaseo);"></div>
          <div style="background-color: var(--jangakwon);"></div>
          <div style="background-color: var(--seonggyungwan);"></div>
      </div>  
      </div>
      <div id="navbar">
        <div id="logo">
            <a href="/"><img src="/public/logo.png" /></a>
        </div>
        <div id="navlist">
            <div><a href="/concept">소개</a></div>
            <div><a href="/character">나오는사람들</a></div>
            <div><a href="/story">이야기</a></div>
            <div><a href="/store">가게</a></div>
        </div>
      </div>
      <NuxtPage />
    </NuxtLayout>
        <footer>
            모든 저작권은 메인 창작자 @hyun1008@peacht.art 에게 있습니다.
        </footer>
  </div>
</template>

<style>@font-face {
  font-family: 'HakgyoansimByeoljari';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimByeoljariTTF-B.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'HakgyoansimByeoljari';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimByeoljariTTF-L.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

:root {
  --accent: #79919d;
  --gwansanggam: #8c7ebf;
  --gwansanggam-trans: #8c7ebf99;
  --jeonigam: #a1d2c9;
  --jeonigam-trans: #a1d2c999;
  --sayogwon: #bea58a;
  --sayogwon-trans: #bea58a99;
  --yulhakchung: #79919d;
  --yulhakchung-trans: #79919d99;
  --sanhakchung: #BDD7AE;
  --sanhakchung-trans: #BDD7AE99;
  --dohwaseo: #f09896;
  --dohwaseo-trans: #f0989699;
  --jangakwon: #e47b5a;
  --jangakwon-trans: #e47b5a99;
  --seonggyungwan: #45548b;
  --seonggyungwan-trans: #45548b99;
}

body {
  font-family: 'HakgyoansimByeoljari';
  padding: 0;
  margin: 0;
}

#nuxt-devtools-container {
  display: none;
}

* {
  box-sizing: border-box;
}

code {
  padding: 4px;
  background-color: #00000033;
  border-radius: 5px;
}

textarea {
  width: 100%;
  height: 2em;
  resize: none;
  border: 1px solid var(--accent);
  border-radius: 5px;
  margin-bottom: 10px;
}

button {
  padding: 4px;
  border: 1px solid var(--accent);
  border-radius: 5px;
  background-color: var(--accent);
  color: white;
}

input, textarea, button {
  font-family: 'HakgyoansimByeoljari';
}

#navbar a, #logo a {
  color: inherit !important;
  text-decoration: none;
}

a {
  color: var(--accent);
  text-decoration: none;
}

li {
  margin-block-start: 1em;
  margin-block-end: 1em;
}

#navbar {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

#logo {
  margin-top: 3em;
  width: 300px;
}

img {
  width: 100%;
}

#navlist {
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-bottom: 3em;
}

#container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 5px;
}

.box-content {
  width: 100%;
  border: 1px solid var(--accent);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

#guestbook-form {
  display: flex;
  flex-direction: column;
}

.guestbook-text {
  margin-top: 10px;
}

.guestbook-text > span {
  font-size: 0.8em;
}

.relative{
  position:relative;
  overflow: hidden;
}

.character-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 1 / 1;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: #00000099;
}

.gwansanggam, .syg {
  background-color: var(--gwansanggam-trans);
}

.jeonigam, .khy {
  background-color: var(--jeonigam-trans);
}

.sayogwon, .kih {
  background-color: var(--sayogwon-trans);
}

.yulhakchung, .ydr {
  background-color: var(--yulhakchung-trans);
}

.sanhakchung, .pys {
  background-color: var(--sanhakchung-trans);
}

.dohwaseo, .odk {
  background-color: var(--dohwaseo-trans);
}

.jangakwon, .ls {
  background-color: var(--jangakwon-trans);
}

.seonggyungwan, .kyk {
  background-color: var(--seonggyungwan-trans);
}

.relative:hover .character-list {
  display: flex;
  flex-direction: column;
}

.character-list>* {
  color: white;
  text-decoration: none;
  display: block;
}

.character-profile-grid {
  display: grid;
  grid-template-columns: 1fr 2fr; 
  text-align: center;
}

.character-profile-left {
  padding: 4px;
  border-radius: 10px;
  color: white;
  margin-bottom: 10px;
}

/*decorator*/

#top-decorator {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 1em;
}

#top-decorator > div {
  flex-grow: 1;
  height: 1em;
}

#bottom-decorator {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 1em;
}

#bottom-decorator > div {
  flex-grow: 1;
  height: 1em;
}

footer {
  width: 100%;
  text-align: center;
  font-size: 0.7em;
  margin: 3em 0;
}
</style>