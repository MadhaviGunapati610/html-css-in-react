import '../styles/Navigation.css';

const Navigation = () => {
return (
    <>
    <header className="method-1 method-2">
        <a className='logo' href="#" >
        <img src="https://assets.codepen.io/296057/lil-bv-logo.svg" alt="Binaryville. Click for home." />
        </a>
        <nav className='main-nav'>
            <ul className='method1-ul method2-ul'>
                <li>
                <a href="#" >Home</a>
                </li>
                <li>
                <a href="#" >About</a>
                </li>
                <li>
                <a href="#" >Products</a>
                </li>
                <li>
                <a href="#" >Services</a>
                </li>
                <li>
                <a href="#" >Contact</a>
                </li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default Navigation;