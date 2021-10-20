
const input = document.getElementById('input')

function clickMessage () {
    alert('this page will self-destruct in ten seconds')
}

function addingEventListener() {
    input.addEventListener('click', clickMessage)
}
