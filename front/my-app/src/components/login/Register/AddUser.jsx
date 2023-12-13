
exports.AddUser = (data,axios)=>{

    axios.post("http://109.68.215.157:3005/user/registration",{
        name:data[0],
        mail:data[1],
        number: data[2],
        passwd: data[3],
        login: data[4]
    })
}