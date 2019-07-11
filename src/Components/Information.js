import React from 'react'

 const Information = props => {
    return (
        <div className="info">
            <p>{props.date}</p>
            <p>{props.service}</p>
            <p>{props.media}</p>
            
        </div>
    )
}
export default Information;