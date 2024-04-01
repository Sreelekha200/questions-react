import React from 'react'
import Question from './Question'

const Questions = ({questions, activeId, toggleQuestion}) => {

    return (
        <section className='container'>
            <h1>Questions</h1>
    {questions.map((item) => {
        return (     
              <Question key={item.id} {...item} activeId={activeId} toggleQuestion={toggleQuestion}></Question>          
          )
    })}
    </section>
    )
}

export default Questions

