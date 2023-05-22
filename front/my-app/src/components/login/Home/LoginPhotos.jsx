import axios from "axios";

const LoginPhotos = () => {

    async function getPhoto() {
        
        const res = await axios.post("http://localhost:3005/user/getPhotos", {
            login: sessionStorage.getItem('login')
        })
        let photo = document.getElementsByClassName("photo")[0]
        console.log(res.data)
        photo.innerHTML = `<img src="http://localhost:3005/photos/${res.data[0]}">`
    }
    getPhoto()
    return (
        <div className="photo">
    
        </div>
    );
};

export default LoginPhotos;