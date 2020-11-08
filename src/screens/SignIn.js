import React from 'react';
import classnames from "classnames";
import {
  Row,
  Col, 
  Card,
  CardHeader,
  CardBody,
  CardImg, 
  CardTitle, 
  CardSubtitle, 
  CardText,
  Button,
  FormGroup,
  Form,
  Input  
} from 'reactstrap';
import SplashScreen from '../components/SplashScreen';
import SideNav from '../components/SideNav';
import Background from '../components/Background';
import Theme from '../constants/Theme';
import Lightbox from 'react-image-lightbox';
import ComponentValidator from "simple-react-validator";
const validator = new ComponentValidator();

const Index = () => {
  /* States */
  const [isLoading, loadingState] = React.useState(true);
  const [isLightMode, lightModesState] = React.useState(true);
  const [error, errorState] = React.useState({});
  const [admin, adminState] = React.useState({
      firstName: "Nuj John Henry",
      middleName: "Vera",
      lastName: "Reyes",
      designation: "Software Engineer",
      image: "gradpic.jpg",
      mobileNumber: "9650624447",
      emailAddress: "nujjohnhenryreyes@gmail.com",
      completeAddress: "145 Panapaan IV, Bacoor, Cavite"
  });
  const [form, formState] = React.useState({
    username: "",
    password: ""
 });

  /* Effects */
  React.useEffect(() => {
    setTimeout(() => {
      loadingState(false);
    }, 1000);
  }, []);

    /* Handles */
    const handleOnChange = (e, stateName) => {
      form[stateName] = e.target.value;
      error[stateName] = (!e.target.value) ? "Please enter your" : null;
      formState({ ...form });
      errorState({ ...error });
    }

    const handleMouseHover = (e, hover) => {
      e.target.style.border = (!hover) 
          ? "0px" 
          : "1px solid #edede5";
    } 
    
  if(!isLoading){
    return (
      <div className="main">  
      <Background />
        <div style={styles.frontScreen}>
           <Row style={styles.mainRow}> 
              <Col md={5} lg={4} xl={3} style={styles.colSideNav}>
                <SideNav admin={admin} isLightMode={isLightMode} />
              </Col>
              <Col md={7} lg={8} xl={9} style={styles.colBody}>
                <Card body style={(!isLightMode) ? styles.darkCard : styles.lightCard}>
                  <CardBody style={{color: `${(!isLightMode) ? Theme.COLORS.WHITE : Theme.COLORS.DARKTEXT}`}}>
                    <Row style={styles.bodyRow}>
                      <Col style={styles.pageTitle}>
                          SIGN-IN
                      </Col>
                      <Col style={styles.noPadding}>
                        <div style={styles.toggleContainer}>
                          <input
                              className="switch-checkbox"
                              id="switch-mode"
                              checked={isLightMode}
                              onChange={e => lightModesState(e.target.checked)}
                              type="checkbox"
                              style={{ display: "none" }}
                            />
                          <label
                              className={classnames({
                                "dark-mode-label": !isLightMode,
                                "light-mode-label": isLightMode,
                              })}
                              htmlFor="switch-mode"
                              style={{ margin: "0px" }}
                            > 
                              <span className={classnames({
                                "dark-mode-button": !isLightMode,
                                "light-mode-button": isLightMode,
                              })} /> 
                          </label>
                        </div>  
                      </Col>
                    </Row>
                    <Row style={{ height: "100%" }}>
                      <Col sm={12} style={styles.signinSection}>
                        <Card body style={{ height: "100%", padding: "0px", overflow: "hidden", border: "0px", backgroundColor: "transparent"}}> 
                              <Row style={{ height: "100%" }}>
                                <Col style={{ background: "linear-gradient(to bottom, #6fa5dd 0%, #ffccff 93%)" }} className="d-none d-xl-block" xl={4} align="center">
                                  <div style={{ padding: "0px 10px 50px 10px", fontSize: "26px", color: Theme.COLORS.DARKTEXT, width: "100%" }} className="vertical-center" >
                                    <CardImg src={`${require(`../assets/img/n-icon.png`)}`} style={{ height: "150px", width: "150px" }} />
                                    <p>WELCOME BACK</p>
                                  </div>
                                </Col>
                                <Col style={{ height: "100%", position: "relative" }} lg={12} xl={8} align="center">
                                <div className="bg-primary" className="vertical-center" style={{ width: "100%" }}>
                                  <Form style={{ maxWidth: "450px" }}>
                                          <FormGroup>
                                              <Input 
                                                className={
                                                  (!isLightMode) 
                                                    ? classnames({ "border border-warning": error.username }) 
                                                    : classnames({ "border border-danger": error.username }) 
                                                }
                                              type="text" 
                                              placeholder="Email or phone number" 
                                              onChange={(e) => handleOnChange(e, "username")} 
                                              style={styles.textbox}/>
                                              <div style={{ textAlign: "left" }}>
                                                {
                                                    error.username
                                                    ? <small 
                                                        className={`pl-2 ${
                                                          (!isLightMode) 
                                                            ? classnames({ "text-warning": error.username }) 
                                                            : classnames({ "text-danger": error.username }) 
                                                        }`}>* {error.username} email or phone number</small>
                                                    : null
                                                }
                                              </div>
                                          </FormGroup>
                                          <FormGroup>
                                              <Input 
                                                   className={
                                                    (!isLightMode) 
                                                      ? classnames({ "border border-warning": error.password }) 
                                                      : classnames({ "border border-danger": error.password }) 
                                                  }
                                                  type="text" 
                                                  placeholder="Password" 
                                                  onChange={(e) => handleOnChange(e, "password")} 
                                                  style={styles.textbox}/>
                                                  <div style={{ textAlign: "left" }}>
                                                    {
                                                        error.password
                                                        ? <small 
                                                            className={`pl-2 ${
                                                              (!isLightMode) 
                                                                ? classnames({ "text-warning": error.password }) 
                                                                : classnames({ "text-danger": error.password }) 
                                                            }`}>* {error.password} password</small>
                                                        : null
                                                    }
                                                  </div>
                                          </FormGroup>
                                          <div>
                                              <Button 
                                                type="button"
                                                onMouseEnter={(e) => handleMouseHover(e, 1)}
                                                onMouseLeave={(e) => handleMouseHover(e, 0)}
                                                onClick={(e) => e.preventDefault()}                                            
                                              style={styles.btnLogin}>Sign In</Button>
                                          </div>
                                      </Form>   
                                </div>
                                </Col>
                              </Row>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>     
              </Card>
              </Col>
           </Row>
        </div>
    </div>
    );
  }else{
    return (<SplashScreen />);
  }
}

const styles = {
  frontScreen: { 
    height: "100%", 
    width: "100%", 
    position: "relative", 
    zIndex: "2",
    overflowX: "hidden",
    padding: "2%"
  },
  lightCard: { 
    height: "100%", 
    paddingTop: "0px",
    overflow: "auto" 
  },
  darkCard: { 
    height: "100%", 
    paddingTop: "0px" ,
    overflow: "auto",
    backgroundColor: Theme.COLORS.DARKMODE
  },
  mainRow: { 
    height: "100%", 
    padding: "3px"
  },
  colSideNav: { 
    paddingRight: "10px", 
    marginBottom: "10px"
  },
  colBody: { 
    marginBottom: "10px", 
    height: "100%" 
  },
  bodyRow: { 
    borderBottom: "1px solid " + Theme.COLORS.MUTED 
  },
  pageTitle: { 
    padding: "0px", 
    fontSize: "23px", 
    fontWeight: "bold" 
  },
  noPadding: { 
    padding: "0px"
  },
  toggleContainer: { 
    padding: "0px", 
    float: "right"  
  },
  signinSection: { 
    padding: "15px",
    marginBottom: "15px" 
  },
  textbox: { 
    maxWidth: "450px", 
    height: "50px", 
    borderRadius: "25px" 
  },
  btnLogin: { 
    width: "100%" , 
    maxWidth: "450px", 
    height: "50px", 
    borderRadius: "25px", 
    background: "#5f97d6", 
    border: "0px" 
  }
}

export default Index;
