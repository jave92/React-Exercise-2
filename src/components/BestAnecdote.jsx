import React from 'react'

const BestAnecdote = ({anecdote, votes}) => {
  return (
    <>
        <h1>Anecdote with most votes</h1>
        <p>{anecdote}</p>
        <h5>Has {votes} votes</h5>
    </>
  )
}

export default BestAnecdote