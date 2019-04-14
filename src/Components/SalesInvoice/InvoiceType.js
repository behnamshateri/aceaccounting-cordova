import React,{Component} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import NumberFormat from 'react-number-format';
import {Link} from "react-router-dom";



class InvoiceType extends Component{
    render(){
        return(
            <div className="col-xs-12 inline-row-flex no-horizantal">
                <Card className="invoice-detail">
                    <Link to="/invoices/draft">
                        <CardActionArea className="invoice-detail-contain">
                            <CardContent >
                                <Typography gutterBottom variant="headline" component="p">
                                    Draft
                                    <span className="badge-number">5</span>
                                </Typography>
                                <Typography component="p">
                                    <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>

                <Card className="invoice-detail">
                    <Link to="/invoices/awaiting-approved">
                        <CardActionArea className="invoice-detail-contain">
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="p">
                                    awaiting Approval
                                    <span className="badge-number">0</span>
                                </Typography>
                                <Typography component="p">
                                    <NumberFormat value={0} displayType={'text'} thousandSeparator={true} prefix={'$'} />

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>

                <Card className="invoice-detail">
                    <Link to="/invoices/awaiting-payment">
                        <CardActionArea className="invoice-detail-contain">
                            <CardContent>
                                <Typography gutterBottom variant="headline" component="p">
                                    Awaiting Payment
                                    <span className="badge-number">12</span>
                                </Typography>
                                <Typography component="p">
                                    <NumberFormat value={24981} displayType={'text'} thousandSeparator={true} prefix={'$'} />

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>

                <Card className="invoice-detail">
                    <Link to="/invoices/override">
                        <CardActionArea className="invoice-detail-contain">
                            <CardContent >
                                <Typography gutterBottom variant="headline" component="p">
                                    Override
                                    <span className="badge-number">12</span>
                                </Typography>
                                <Typography component="p">
                                    <NumberFormat value={3423981} displayType={'text'} thousandSeparator={true} prefix={'$'} />

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </div>
        )
    }
}

export default InvoiceType;