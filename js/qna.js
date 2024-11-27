async function viewGuestNotes() {

    document.querySelector('#guestbook-list').innerHTML = ''

    var endpointURL = 'https://peacht.art/api/users/notes'
    var endpointParam = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer rXOkOzQMzWzLhTcvViZGxsLtUfdweib0`,
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

async function createGuestNote(text) {

    fetch("https://peacht.art/api/notes/create", {
        method: 'POST',
        body: JSON.stringify({
                text: text,
                visibility: 'specified',
                localOnly: true,
        }),
        headers: {
            Authorization: `Bearer rXOkOzQMzWzLhTcvViZGxsLtUfdweib0`,
            'Content-Type': 'application/json',
        },
        credentials: 'omit',
    });
    setTimeout(() => {
        viewGuestNotes()
    }, 1000);
}

viewGuestNotes()