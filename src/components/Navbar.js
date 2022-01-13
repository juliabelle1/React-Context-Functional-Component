import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

export const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div>
            <nav style={{ background : theme.ui, color: theme.syntax }}>
                            <h1>Context App</h1>
                            <button onClick={toggleAuth}>
                                { isAuthenticated ? 'Logged in' : 'Logged out' }
                            </button>
                            <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            </ul>
                        </nav>
        </div>
    )
}

