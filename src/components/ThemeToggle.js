import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from '../context/ThemeContext';


export const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <div>
            <button onClick={toggleTheme}>Toggle the theme</button>
        </div>
    )
}

