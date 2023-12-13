
import "./Home.css"
import profile from './../img/profile.png'

function Bar() {

    return (
      <div className="barcenter">
        <div style={{width:15+'%'}}>
            <a href='/' className='pframe'>PFrame Studio</a>
        </div>
        <div className="barul">
            <ul>
                <li><a href='#about'>о нас</a></li>
                <li><a href='/studio'>студия</a></li>
                <li><a href='/develop'>галерея</a></li>
                <li><a href='#contacts'>контакты</a></li>
            </ul>
        </div>
        <div style={{width:15+'%',display:'flex', justifyContent:'center'}}>
            <button className='login'><a href="/login"><img width='35px' src={profile}></img></a></button>
        </div>
      </div>
    );
  }
  
  export default Bar;
  