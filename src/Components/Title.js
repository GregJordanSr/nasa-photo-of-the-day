import React from 'react'

 const Title = props => {
  return (
    <div>
        <header className="header">
            {props.title}
        </header>
    </div>
  )
}
export default Title;