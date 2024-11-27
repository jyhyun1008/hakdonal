var page = location.href.split('/').pop().split('.')[0]

async function loadComponents() {
    if (document.querySelector('component')) {
        var componentList = document.querySelectorAll('component')
        for await (let component of componentList) {
            var result = await fetch('./component/'+component.id+'.html', {mode: "no-cors"})
            var resultText = await result.text()
            document.querySelector('component#'+component.id).innerHTML = resultText
        }
    }
}

async function loadMarkdown() {
    if (document.querySelector('markdown')) {
        var markdownList = document.querySelectorAll('markdown')
        for await (let markdown of markdownList) {
            var result = await fetch('./md/'+markdown.id+'.md', {mode: "no-cors"})
            var resultText = await result.text()
            document.querySelector('markdown#'+markdown.id).innerHTML += marked.parse(resultText)
        }
    }
}

addEventListener("DOMContentLoaded", async (event) => {

    await loadComponents()
    await loadMarkdown()

    if (page == 'index' || !page) {
        await viewGuestNotes()
    }
})