exports.showFn = (sendDataa,dis,countMonth)=>{
    sendDataa = document.getElementsByClassName('sendData')[0]
    let sud = document.getElementsByClassName("sud")[0]
    dis = document.getElementsByClassName("dis")[0]
    sendDataa.style.display = 'none'
    dis.style.display = "flex"
    sud.innerHTML = ""
    sud.style.gridTemplateColumns = "repeat(auto-fit, minmax(90px, 1fr))"
    for (let n = 0; n < countMonth; n++) {
        let b = n
        if (n < 9) {
            b = "0" + (n + 1)
        } else {
            b = n + 1
        }
        sud.innerHTML += `
        <div>
        <button class="btnunselected"><p>${b}</p></button></div>`
    }
}