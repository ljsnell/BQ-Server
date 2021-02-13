import { Select } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';

const options = [
    '1',
    '2',
    '3',
    '4',
    '5'
];

class LightCheck extends Component {
    handleChanges = (event) => {
        console.log(event.target.value)
    }

    render() {
        return (
            <>
                <div>
                    <>Select Chair to Test: </>
                    <Select native={true} onChange={this.handleChanges} native value='1'>
                        <option key='1' value='1'>1</option>
                        <option key='2' value='2'>2</option>
                        <option key='3' value='3'>3</option>
                        <option key='4' value='4'>4</option>
                        <option key='5' value='5'>5</option>
                    </Select >
                </div>
            </>
        )
    }
}

export default LightCheck
