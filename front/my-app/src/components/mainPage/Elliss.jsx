async function Elliss (event, setSelectData, data, axios, sud, day) {
    setSelectData(event.target.textContent + data)
    const selectedDate = await axios.post("http://109.68.215.157:3005/selectedDate", {
        day: event.target.textContent
    })
    let time2 = 12
    sud.innerHTML = ''
    sud.style.gridTemplateColumns = "none"
    if (selectedDate.data.length === 0) {
        for (let n = 0; n < 8; n++) {
            sud.innerHTML += `
                <button class="btnunselected">${n + 1} ${time2 + n}:00</button>`
        }
    } else {//12, 13
        let mas = []
        for (let b = 0; b < selectedDate.data.length; b++) {
            if (selectedDate.data[b].date.includes("2")) mas[0] = "12:00"
            else if (selectedDate.data[b].date.includes("3")) mas[1] = "13:00"
            else if (selectedDate.data[b].date.includes("4")) mas[2] = "14:00"
            else if (selectedDate.data[b].date.includes("5")) mas[3] = "15:00"
            else if (selectedDate.data[b].date.includes("6")) mas[4] = "16:00"
            else if (selectedDate.data[b].date.includes("7")) mas[5] = "17:00"
            else if (selectedDate.data[b].date.includes("8")) mas[6] = "18:00"
            else if (selectedDate.data[b].date.includes("9")) mas[7] = "19:00"
        }

        for (let c = 0; c < 8; c++) {
            if (mas[c] === undefined) {
                sud.innerHTML += `
                    <button class="btnunselected">${c + 1} ${time2 + c}:00</button>`
            }
        }
        // for (let n = 0; n < 8; n++) {
        //     console.log(selectedDate.data)
        //     mis.map((x) => {
        //         console.log(x.date)
        //         if (x.date.includes("3")) {
        //             return sud.innerHTML += `
        //                             <button class="btnunselected">${n + 1} ${time2 + n}:00</button>`
        //         }
        //
        //     })
        // }


    }
    //     for (let b = 0; b < selectedDate.data.length; b++) {
    //         let sl = selectedDate.data[b].date.slice(0, 2)
    //         console.log(sl)
    //         for (let n = 0; n < 8; n++) {
    //         if (sl.includes(event.target.textContent)) { //01 == 01 //15 == 15
    //             console.log(selectedDate.data[b].date.slice(0, 2))
    //             console.log(event.target.textContent)
    //             if (!selectedDate.data[b].date.includes(time2 + n + "")) {// not
    //                 console.log("не не")
    //                 console.log(selectedDate.data[b].date.includes(time2+n+""))
    //                 sud.innerHTML += `
    //                         <button class="btnunselected">${n + 1} ${time2 + n}:00</button>`
    //             }
    //
    //         } else if (!selectedDate.data[b].date.slice(0, 2).includes(event.target.textContent)) { //01 != event
    //             if (n > 6 && sud.children.length === 0) {
    //                 if (sud.children.length === 0 && mass.length == 0) {
    //                     console.log(mass)
    //                     mass.push(`${n + 1} ${time2 + n}:00`)
    //                     for (let c = 0; c < 8; c++) {
    //                         console.log(">")
    //                         sud.innerHTML += `
    //                                     <button class="btnunselected">${c + 1} ${time2 + c}:00</button>`
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

}

export default Elliss


