
import "./Home.css"

function Bar() {

    return (
      <div className="barcenter">
        <div style={{width:15+'%'}}>
            <a href='/' className='pframe'>PFrame Studio</a>
        </div>
        <div className="barul">
            <ul>
                <li>о нас</li>
                <li>студия</li>
                <li>галерея</li>
                <li>контакты</li>
            </ul>
        </div>
        <div style={{width:15+'%',display:'flex', justifyContent:'center'}}>
            <button className='login'><a href="/login">Войти</a></button>
        </div>
      </div>
    );
  }
  
  export default Bar;
  