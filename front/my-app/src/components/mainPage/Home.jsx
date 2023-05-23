import Bar from "./Bar"

import "./Home.css"


function Home() {
    window.scroll(()=>{
        if (window.scrollBy() > 10){
            console.log("suuu")
        }
    })
    return (
        <div>
            <div className="backgr">
                <Bar></Bar>
                <div style={{height:1500}}>
                    <div className='pframestudiobtn'>
                        <h1>Фотостудия<br></br>
                            PFrame Studio</h1>
                        <button>Записаться</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home