<template>
    <div>
        <h1>방명록</h1>
        <div id="guestbook">
            <div id="guestbook-form">
                <textarea id="guestbook-textarea"></textarea>
                <button @click="createGuestNote">전송</button>
            </div>
            <div id="guestbook-list">

            </div>
        </div>
        <h1>업데이트 노트</h1>
        <div class="box-content">
            <div id="update" v-html=marked.parse(updateLog)></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { marked } from 'marked';

var updateLog = await $fetch('https://raw.githubusercontent.com/jyhyun1008/hakdonal/main/md/update.md')


const TOKEN1 = 'rXOkOzQM'
const TOKEN2 = 'zWzLhTcv'
const TOKEN3 = 'ViZGxsLt'
const TOKEN4 = 'Ufdweib0'

async function viewGuestNotes() {

    document.querySelector('#guestbook-list').innerHTML = ''

    var endpointURL = 'https://peacht.art/api/users/notes'
    var endpointParam = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN1}${TOKEN2}${TOKEN3}${TOKEN4}`,
        },
        body: JSON.stringify({
            query: 'neo_quesdon',
            userId: 'a12xjih3zo3a08a5',
            limit: 10
        }),
        credentials: 'omit',
    }
    var result = await fetch(endpointURL, endpointParam)
    var resultJson = await result.json()

    for await(let result of resultJson) {
        document.querySelector('#guestbook-list').innerHTML += '<div class="guestbook-text"><span>'+result.createdAt.split('T')[0]+'</span> '+result.text+'</div>'
    }
}

async function createGuestNote() {

    var text = document.querySelector('#guestbook-textarea').value
    if (text.length<5) {
        alert('5글자 이상 입력해 주세요.')
    } else {
        fetch("https://peacht.art/api/notes/create", {
            method: 'POST',
            body: JSON.stringify({
                    text: text,
                    visibility: 'specified',
                    localOnly: true,
            }),
            headers: {
                Authorization: `Bearer ${TOKEN1}${TOKEN2}${TOKEN3}${TOKEN4}`,
                'Content-Type': 'application/json',
            },
            credentials: 'omit',
        });
        document.querySelector('#guestbook-textarea').value = ''
        setTimeout(() => {
            viewGuestNotes()
        }, 1000);
    }
}

onMounted(async ()=> {
    viewGuestNotes()
})
</script>