import React from 'react';
import { connect } from 'react-redux'

const Control = (props) => {
    return (
        <div>
            <button onClick={ () => props.add() }>+ Add</button>
            <button onClick={ () => props.sub() }>- Sub</button>
        </div>
    );
};

function mapDispatchProps(dispatch){
    return {
        add : () => {
            dispatch({ type : 'ADD' })
        },

        sub : () => {
            dispatch({ type : 'SUB' })
        }
    }
}

export default connect(null, mapDispatchProps)(Control);