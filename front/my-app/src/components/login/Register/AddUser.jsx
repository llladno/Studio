
exports.AddUser = (data,axios)=>{
    console.log(data)
    axios.post("http://localhost:3005/user/registration",{
        name:data[0],
        mail:data[1],
        number: data[2],
        passwd: data[3],
        login: data[4]
    })
}