import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class Documents extends Component {
    render() {
        return (
            <div className="col-xs-12">
                <div className="container">
                    <Button color="primary" className="filters">
                        Primary
                    </Button>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(Documents);