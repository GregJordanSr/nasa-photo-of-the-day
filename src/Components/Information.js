import React from 'react'

 const Information = props => {
    return (
        <div className="info">
            <p>{props.state.date}</p>
            <p>{props.state.service}</p>
            <p>{props.state.media}</p>
            
        </div>
    )
}
export default Information;