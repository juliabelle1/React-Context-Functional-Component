import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';


//Functional components with useContext()

export const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext)
    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
            {books.map(book =>(
                <li key={book.id} style={{ background: theme.ui }}>{ book.title}</li>
            ))}
        </ul>
    </div>
    )
}

