import React from 'react';
import { Header } from 'semantic-ui-react';

 const Title = props => {
  return (
    <div>
        <Header className="ui huge header" style={{ color: 'blue', font: "Comic Sans"}}>
            {props.state.title}
        </Header>
    </div>
  )
}
export default Title;