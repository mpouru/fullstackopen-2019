import React from 'react'

const Filter = (props) => {

    return (
      <div>
        rajaa näytettäviä: <input value={props.newFilter} onChange={props.handleFilter} />
      </div>
    )
  }

  export default Filter