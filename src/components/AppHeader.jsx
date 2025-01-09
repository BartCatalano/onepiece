import { NavLink } from "react-router-dom";

function AppHeader () {

const naviMenu = [
    {
        path:"/",
        title:"Home"
    },
    {
        path:"/mugiwara",
        title:"Mugiwara"

    },
    {
        path:"/rosso",
        title:"Shanks Il Rosso"

    }
]

    return(
<header>

            {naviMenu.map((page) => {
                return (
                <div key={page.title}><NavLink to={page.path}>{page.title}</NavLink></div>
            )
            })}
            
        
        </header>
    )
}

export default AppHeader;