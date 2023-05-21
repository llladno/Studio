import Bar from "./Bar"

import "./Home.css"


function Home() {
    return (
        <div>
            <div className="backgr">
                <Bar></Bar>
                <div style={{height:1500}}>

                </div>
            </div>
            {/* {loading ? <div></div>
            : <div>Loading...</div>
          }
        <form id='formelem'>
        <input onChange={change} type="file" name="su" multiple="multiple"></input>
        </form>
          
          <p>sdasdas</p>
          <button onClick={getPhoto}>Отправить</button>
          <img className='suuuu'></img> */}
        </div>
    )
}



// const [photoFile, setphotoFile] = useState()
//   const [loading, setLoading] = useState(false)
//   let path
//   function change(e) {
//     let input = document.getElementsByTagName("input")[0]
//     console.log(e.target.files[0])
//     setphotoFile(e.target.files[0])
//   }





//   const getPhoto = async ()=>{
//     let suuuu = document.getElementsByClassName("suuuu")

//     const formData = new FormData();
//     console.log(formData)
//     console.log(photoFile)

//     formData.append("file", photoFile)

//     const res = await axios.post("http://localhost:3005/upload/photo",
//       formData,
//       {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     })

//     const data222 = res
//     console.log(data222.data.data.data)
//     suuuu.src = data222
//   }

export default Home