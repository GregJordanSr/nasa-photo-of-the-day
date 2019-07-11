import React from 'react';
import { Container } from 'semantic-ui-react';

 const Information = props => {
    return (
        <Container textAlign="center" className="info">
            <p>{props.state.date}</p>
            <p>{props.state.service}</p>
            <p>{props.state.media}</p>
            
        </Container>
    )
}
export default Information;