import React, { PureComponent } from 'react'
import { Pane } from 'evergreen-ui'

export class Divider extends PureComponent {
    render() {
        return (
            <Pane borderTop="default" marginY="10px" width="100%" minHeight="4px" />
        )
    }
}

export default Divider
