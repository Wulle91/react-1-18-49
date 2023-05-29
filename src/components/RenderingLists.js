import React from 'react'
import Book from './Book'


function RenderingLists() {
    const bookList = [
        'too kill a mocking bird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'to kill a mocking bird',
            author: ' harper lee',
            pages: 281,
        },
        {
            title: 'the great gatsby',
            author: ' f.scott fitzgerald',
            pages: 218,
        },
        {
            title: 'the catcher in the rye',
            author: ' j.d. salinger',
            pages: 234,
        },
    ]
  return (
    <div>
        {bookList.map(book => {
            return <h1 key={book}>{book}</h1>
        })}
        <hr/>
        {
            books.map(book => {
                return (<div key={book}>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                    <p>{book.pages}</p>
                </div>)
            })
        }
        <hr/>
        {
            books.map(book => {
                return <Book key={book.title} book={book}/>
            })
        }
    </div>
  )
}

export default RenderingLists