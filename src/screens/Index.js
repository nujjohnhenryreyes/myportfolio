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
  Button  
} from 'reactstrap';
import SplashScreen from '../components/SplashScreen';
import SideNav from '../components/SideNav';
import Background from '../components/Background';
import Theme from '../constants/Theme'; 

const Index = () => {
  const mode = localStorage.getItem("light-mode");

  /* States */
  const [isLoading, loadingState] = React.useState(true);
  const [isLightMode, lightModesState] = React.useState(([null, `true`].includes(mode))? true : false);
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
  
  const [abouts, aboutsState] = React.useState([
    "I'm a software engineer specialized in frontend and backend development for complex scalable web apps." + 
    "I enjoy taking complex problems and turning them into simple, better and understandable way." +
    "I also love handling database server and building queries." +
    "When I'm not doing anything, I develop simple projects to enhance and further develop my skills as a full stack web developer."
    ,
    "Want to know more about me?" + 
    "You can directly download my resume or view my latest project."
  ]);

  const [technologies, technologyState] = React.useState([
    { title: "ReactJS", image: "reactjs.png" },
    { title: "NodeJS", image: "nodejs.jpg" },
    { title: "MongoDB", image: "mongodb.png" },
    { title: "Javascript", image: "javascript.jpg" },
    { title: "JQuery", image: "jquery.png" },
    { title: "PHP", image: "php.png" },
    { title: "Xampp", image: "xampp.png" },   
    { title: "HTML5", image: "html5.png" },
    { title: "CSS3", image: "css3.png" },
    { title: "Bootstrap 4", image: "bootstrap4.png" },
    { title: "SASS", image: "sass.jpg" },
    { title: "MS SQL", image: "mssql.png" },
    { title: "GIT BASH", image: "gitbash.jpg" },
  ]);

  /* Effects */
  React.useEffect(() => {
    setTimeout(() => {
      loadingState(false);
    }, 1000);
  }, []);

  /* Handles */
  const handleMouseHover = (e, color) => {
    e.target.style.backgroundColor = color;
  }

  /* Functions */
  const getAboutItems = () => {
    const listItems = abouts.map((item, index) =>
      <CardText key={index} style={styles.cardText}>{item}</CardText>
    );
    return listItems;
  }

  const getTechnologyItems = () => {
    const listItems = technologies.map((item, index) => ( 
    <div style={styles.imgTechBox} key={index}>
      <div style={styles.imgTechContainer}>
        <img src={`${require(`../assets/img/${item.image}`)}`} alt="" className="techonology"  style={styles.imgTech} />
      </div>
      <p>{item.title}</p>
    </div> ));
    return listItems;                                   
  }

  const switchMode = (e) => {
    lightModesState(e.target.checked);
    localStorage.setItem("light-mode", e.target.checked);
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
                          ABOUT ME 
                      </Col>
                      <Col style={styles.noPadding}>
                        <div style={styles.toggleContainer}>
                          <input
                              className="switch-checkbox"
                              id="switch-mode"
                              checked={isLightMode}
                              onChange={e => switchMode(e)}
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
                    <Row>
                      <Col sm={12} style={styles.introSection}>
                              <Row style={styles.introRow}>
                                <Col lg={7}  xl={9} style={styles.introLeft}>
                                  <CardTitle style={styles.name}>
                                    {`${admin.firstName.toUpperCase()} ${admin.middleName.charAt(0).toUpperCase()}. ${admin.lastName.toUpperCase()}`}
                                  </CardTitle>                      
                                  { getAboutItems() }
                                  <div className="row">
                                    <div className="col-sm-6 col-md-12 col-xl-4" style={styles.btnCols}>
                                      <Button 
                                        onMouseEnter={(e) => handleMouseHover(e, "#325083")} 
                                        onMouseLeave={(e) => handleMouseHover(e, "#263f6a")}
                                        style={styles.downloadResumeBtn}>
                                            <i className="fa fa-download"/> Download Resume
                                      </Button>   
                                      </div> 
                                      <div className="col-sm-6 col-md-12 col-xl-4" style={styles.btnCols}>
                                      <Button 
                                        onMouseEnter={(e) => handleMouseHover(e, "#a19898")} 
                                        onMouseLeave={(e) => handleMouseHover(e, "#8c8383")}
                                        style={styles.latestProjectBtn}>
                                          <i className="fa fa-eye"/> View Latest Project
                                      </Button>    
                                    </div>
                                  </div>                                           
                                </Col>
                                <Col lg={5} xl={3} >
                                  <CardImg src={`${require(`../assets/img/formal-attire-with-background.jpg`)}`} alt="" style={styles.adminImg} />
                                  <div className="row" style={styles.contactInfo}>
                                    <div className="col-12">
                                      <label className="fa fa-phone" style={styles.contactIcon} />
                                      <span style={styles.contactText}>{`+63 ${admin.mobileNumber}`}</span>
                                    </div>
                                    <div className="col-12">  
                                      <label className="fa fa-envelope" style={styles.contactIcon} />
                                      <span style={styles.contactText}>{admin.emailAddress}</span>
                                    </div>
                                    <div className="col-12">  
                                      <label className="fa fa-map-marker" style={styles.contactIcon} />
                                      <span style={styles.contactText}>{admin.completeAddress}</span>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                      </Col>
                      <Col sm={12} >
                        <div className="col-md-12 col-lg-10" style={styles.noPadding}>
                          <div>
                            <label className="fa fa-laptop-code"  style={styles.laptopCodeIcon} />
                            <span style={styles.spanLabel}>TECHNOLOGY USED</span>
                          </div>
                          <div style={styles.technologyContainer}>
                            <div style={styles.flexBox}>
                                { getTechnologyItems() }                         
                            </div>
                          </div>  
                        </div>
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
  btnCols: { 
    padding: "0px 4px" 
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
  introSection: { 
    padding: "15px",
    borderBottom: "1px solid " + Theme.COLORS.BORDER_DIVIDER,
    marginBottom: "15px" 
  },
  introRow: { 
    marginTop: "15px" 
  },
  introLeft:{ 
    paddingBottom: "1.25rem" 
  },
  name: { 
    fontSize: "30px", 
    fontWeight: "bold", 
    marginBottom: "25px" 
  },
  downloadResumeBtn: { 
    backgroundColor: "#263f6a", 
    border: "0px", width: "190px", 
    marginRight: "7px", 
    marginBottom: "7px",
    width: "100%" 
  },
  cardText: { 
    paddingRight: "30px", 
    textAlign: "justify" 
  },
  latestProjectBtn: { 
    backgroundColor: "#8c8383", 
    border: "0px", 
    width: "190px", 
    marginBottom: "7px",
    width: "100%" 
  },
  adminImg: { 
    borderRadius: "2px 70px 2px 70px", 
    marginBottom: "15px",
    border: "1px solid #dee2e9"  
  },
  contactInfo: { 
    float: "right", 
    width: "238px", 
    padding: "0px" 
  },
  contactIcon: { 
    backgroundColor: Theme.COLORS.MUTED, 
    color: Theme.COLORS.WHITE, 
    fontSize: "12px", 
    padding: "6px 7px 6px 7px", 
    borderRadius: "50%", 
    marginBottom: "4px", 
    marginRight: "7px" 
  },
  contactText: { 
    paddingTop: "3px", 
    fontSize: "11px", 
    textDecoration: "underline #1b74b8" 
  },
  laptopCodeIcon: { 
    backgroundColor: Theme.COLORS.LABEL_ICON, 
    color: Theme.COLORS.WHITE, 
    fontSize: "16px", 
    padding: "8px", 
    borderRadius: "50%", 
    marginRight: "7px" 
  },
  technologyContainer: { 
    padding: "0px 15px", 
    fontSize: "13px"
  },
  spanLabel: { 
    fontWeight: "bold" 
  },
  flexBox: { 
    padding: "0px 10px 10px 10px", 
    display: "flex", 
    flexWrap: "wrap" 
  },
  imgTechBox: { 
    display: "block", 
    textAlign: "center", 
    width: "90px", 
    marginRight: "10px" 
  },
  imgTechContainer: { 
    width: "70px", 
    height: "70px", 
    backgroundColor: Theme.COLORS.WHITE, 
    paddingTop: "10px", 
    borderRadius: "5px", 
    marginLeft: "10px" 
  },
  imgTech: { 
    height: "50px", 
    marginBottom: "2px", 
    maxWidth: "100%" 
  }
}

export default Index;
