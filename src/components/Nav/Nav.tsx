import { NavWrapper } from "./styled";

const Nav = () => {

    const navLinks = [
    {id: 0, title: 'Home', link: '/'},
    {id: 1, title: 'GitHub Popular', link: '/popular'},
    {id: 2, title: 'GitHub Battle', link: '/battle'},
    {id: 3, title: 'Movie', link: '/movie'},
    {id: 4, title: 'Shop', link: '/'},
];

    return <>
    <NavWrapper>
        <nav>

        <ul style={{ color: "white" }}>
            {navLinks.map(link => (
                <li key={link.id}>
                    <a href={link.link}>{link.title}</a>
                </li>
            ))}
        </ul>

    </nav>
    </NavWrapper>
    </>
}

export default Nav;