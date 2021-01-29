function toggleMenu() {
    const menu = document.querySelector('.toggle')
    const navigation = document.querySelector('.navigation')
    menu.classList.toggle('active')
    navigation.classList.toggle('active')
}

window.onload = function() {
    var loading = document.getElementById('loading')
    loading.style.marginLeft = "10px"
}