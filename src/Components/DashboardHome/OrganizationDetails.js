import React,{Component} from "react";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import FirstStep from "./CompanyDetailsSteps/FirstStep";
import SecondStep from "./CompanyDetailsSteps/SecondStep";
import ThirdStep from "./CompanyDetailsSteps/ThirdStep";
import FourthStep from "./CompanyDetailsSteps/FourthStep";
import FifthStep from "./CompanyDetailsSteps/FifthStep";
import SixthStep from "./CompanyDetailsSteps/SixthStep";
import SeventhStep from "./CompanyDetailsSteps/SixthStep";


class OrganizationDetails extends Component{
    constructor(props){
        super(props)
        this.state = ({
            activeStep: 0,
        });
    }
    handleNext(){
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack(){
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset(){
        this.setState({
            activeStep: 0,
        });
    };

    confirmCompany(validation){
        console.log(validation)
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <FirstStep/>;
            case 1:
                return <SecondStep/>;
            case 2:
                return <ThirdStep/>;
            case 3:
                return <FourthStep/>;
            case 4:
                return <FifthStep/>;
            case 5:
                return <SixthStep/>;
            case 6:
                return <SeventhStep/>;

            default:
                return 'Uknown stepIndex';
        }
    }

    render(){
        const steps = getSteps();
        return(
            <div className="col-xs-12">
                <div className="container">
                    <form action="" method="get">
                    <Stepper activeStep={this.state.activeStep} alternativeLabel>
                        {steps.map(label => {
                            return (
                                <Step key={label} className="progress-bar-dashboard">
                                    <StepLabel className="progress-bar-dashboard-text">{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>

                    {this.state.activeStep === steps.length ? (
                        <div>
                            <p >your registeration is completed</p>
                            <Button onClick={this.handleReset.bind(this)}>Reset</Button>
                        </div>

                    ) : (

                        <div>
                            <div className="col-xs-12 no-horizantal">
                                {this.getStepContent(this.state.activeStep)}
                            </div>
                            <div className="col-xs-12 no-horizantal inline-row-flex-space btn-containe">
                                <Button
                                    variant="contained"
                                    disabled={this.state.activeStep === 0}
                                    onClick={this.handleBack.bind(this)}
                                    className="submit-btn"
                                >
                                    Back
                                </Button>

                                <Button variant="contained" color="primary" onClick={this.handleNext.bind(this)} className="submit-btn">
                                    {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>




                        </div>
                    )
                    }
                </form>
                </div>
            </div>
        )
    }
}

export default OrganizationDetails;

function getSteps() {
    // Todo Md: Name steps
    // Complete Organization creation steps
    // Step 1: is lookup from KVK database using opencompanies.nl and KVK registration
    // Step 2: xxxx
    return ['First', 'Second', 'Third', 'Forth', 'Sixth' , 'Payment'];
}
//
// function getStepContent(stepIndex) {
//     switch (stepIndex) {
//         case 0:
//             return <FirstStep/>;
//         case 1:
//             return <SecondStep/>;
//         case 2:
//             return <ThirdStep/>;
//         case 3:
//             return <FourthStep/>;
//         case 4:
//             return <FifthStep/>;
//         case 5:
//             return <SixthStep/>;
//         case 6:
//             return <SeventhStep/>;
//
//         default:
//             return 'Uknown stepIndex';
//     }
// }