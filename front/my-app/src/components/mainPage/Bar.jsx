
import "./Home.css"

function Bar() {
    return (
      <div className="barcenter">
        <div>
            LOGO
        </div>
        <div className="barul">
            <ul>
                <li>О нас</li>
                <li>студия</li>
                <li>галлерея</li>
                <li>контакты</li>
            </ul>
        </div>
        <div>
            <button><a href="/login">Войти</a></button>
        </div>
      </div>
    );
  }
  
  export default Bar;
  