var page = location.href.split('/').pop().split('.')[0]

async function loadContents(page) {
    if (page == 'index') {
        var result = await fetch('./README.md', {mode: "no-cors"})
        var resultText = await result.text()
        document.querySelector('.box-content').innerText += resultText
    }
}

loadContents(page)