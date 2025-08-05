import { NavLink } from "react-router-dom"

export default function Header () {


    const NavMenu = [{
        id:1,
        to: "/",
        text: "Home",
    },
    {
        id: 2,
        to: "/movies",
        text: "Movies"
    }]
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                        
                            <ul  className="navbar-nav">
                            {NavMenu.map(item => {
                                return (
                                    <li className="nav-item" key={item.id}>
                                        <NavLink className="nav-link" to={item.to} aria-current="page">
                                            {item.text}
                                        </NavLink>
                                    </li>
                                )
                            })}
                            </ul>
                            <a className="navbar-brand" href="#">Logo </a>                                      
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>                         
                        
                    
                </div>
            </nav>
        </header>
    </>
    )
}