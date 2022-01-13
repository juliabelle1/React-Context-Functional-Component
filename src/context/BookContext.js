import { createContext, useState } from "react"

export const BookContext = createContext()

export const BookContextProvider = (props) => {

    const [ books, setBooks ] = useState([
        {title: 'One book', id: 1},
        {title: 'Two book', id: 2},
        {title: 'Three book', id: 3},
        {title: 'Four book', id: 4}
    ])

    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}
