import { NavLink, Outlet} from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link active">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="page01" className="nav-link" href="">Page 1</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="page02" className="nav-link" href="#">Page 2</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="page03" className="nav-link">Page 3</NavLink>
                </li>
            </ul>
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}
