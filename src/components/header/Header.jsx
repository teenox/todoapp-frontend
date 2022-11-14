import './header.css';

const Header = ({ title }) => {
    return (
        <header>
            <div className='header'>
                <div className='logo'>
                    <img src="/logo.png" className="App-logo" alt="logo" />
                </div>
                <h1 className="title">{title}</h1>
            </div>
        </header>
    );
 };
  
 export default Header;