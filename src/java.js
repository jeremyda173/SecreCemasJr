const refresh = document.getElementById("#refresh")
refresh.addEventListener("click", (e) =>{ 
    e.preventDefault()
    location.reload();
})