var page = location.href.split('/').pop().split('.')[0]

async function loadContents(page) {
    if (page == 'index' || !page) {
        var result = await fetch('./README.md', {mode: "no-cors"})
        var resultText = await result.text()
        document.querySelector('.box-content').innerText += resultText
    }
}

loadContents(page)

async function loadComponents(component) {
    if (document.querySelector(page)) {
        var result = await fetch('./component/'+component+'.html', {mode: "no-cors"})
        var resultText = await result.text()
        document.querySelectorAll(page).innerHTML = resultText
    }
}

loadComponents(decorator)
loadComponents(navbar)
loadComponents(concept)