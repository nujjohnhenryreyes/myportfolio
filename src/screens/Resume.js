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
import SkillBar from 'react-skillbars';

const Resume = () => {
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

  const [education, educationState] = React.useState([
    { title: "BS in Information Technology", school: "Cavite State University - Imus Campus", dateInterval: "October 2015 - June 2020" },
    { title: "NC II in Computer Systems Servicing", school: "Christ The King College", dateInterval: "January 2019" }
  ]);

  const [experience, experienceState] = React.useState([
    { 
    title: "Junior Software Engineer", company: "Xypher Solutions Inc.", dateInterval: "July 2020 - Present", 
    reponsibilities: [
        "Develop web applications using MongoDB, Express.js, React.js and Node.js.",
        "Assessing project using Agile and Scrum principles.",
        "Responsible for maintaining and upgrading database schema.",
        "Provides RESTful APIs for the client.",
      ] 
    },
    { 
      title: "Intern Quality Assurance", company: "iLLimitado Inc.", dateInterval: "July 2019 - August 2019", 
      reponsibilities: [
        "Testing of web and mobile application during system development.",
        "Encode bugs and error in google spreadsheet.",
        "Design payslip for clients and created a wireframe using Microsoft Powerpoint.",
      ] 
    },
  ]);

  const [frontend, frontendState] = React.useState([
    { "type": "React.js", "level": 90 },
    { "type": "Javascript", "level": 92 },
    { "type": "JQuery", "level": 87 },
    { "type": "HTML/CSS", "level": 88 },
    { "type": "Bootstrap", "level": 83 },
    { "type": "SASS", "level": 85 },
  ]);

  const [backend, backendState] = React.useState([
    { "type": "Node.js", "level": 94 },
    { "type": "PHP", "level": 91 },
    { "type": "SQL", "level": 93 },
    { "type": "MongoDB", "level": 91 },
  ]);

  const [miscellaneous, miscellaneousState] = React.useState([
    { "type": "Git", "level": 94 },
    { "type": "Design", "level": 84 },
  ]);

  const [interest, interestState] = React.useState([
    { title: "Movies", icon: "fa-film" },
    { title: "Music", icon: "fa-headphones" },
    { title: "Swim", icon: "fa-swimmer" },
    { title: "Chess", icon: "fa-chess" },
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
  const getEducationItems = () => {
    const listItems = education.map((item, index) =>
      <div className="col-6" style={styles.educationContainer} key={index}>
        <div style={styles.educationGroup}>
          <label style={styles.educationTitle}>{item.title}</label>
          <p style={styles.educationSchool}>{item.school}</p>
          <label style={styles.dateLabel}>{item.dateInterval}</label>
        </div>
      </div>
    );

    return listItems;
  }

  const getWorkItems = () => {
    const listItems = experience.map((item, index) =>
      <div className="col-12" style={styles.workContainer} key={index}>
        <div style={styles.workContainerHeader}>
            <label style={styles.workTitle}>{item.title}</label>
            <p style={styles.workCompany}>{item.company}</p>
            <label style={styles.dateLabel}>{item.dateInterval}</label>
        </div>
        <div style={styles.workBody}>
          <ul>
            { getReponsibilitiesItems(item.reponsibilities)}
          </ul>
        </div>
      </div>
    );

    return listItems;
  }
  
  const getReponsibilitiesItems = (array) => {
    const listItems = array.map((item, index) =>
      <li key={index}>{item}</li>
    );

    return listItems;
  }

  const getInterestItems = () => {
    const listItems = interest.map((item, index) =>
      <div style={styles.interestBox} key={index}>
        <label className={`fa ${item.icon}`} style={styles.interestsIconContent} />
        <p>{item.title}</p>
    </div>
    );

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
                          Resume
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
                      <Col sm={8} style={styles.colLeft}>
                            <Row>
                                <Col sm={12} style={styles.personalInfoColumn}>
                                    <div style={styles.flexBox}>
                                        <div>
                                            <img src={`${require(`../assets/img/formal-attire-with-background.jpg`)}`} alt="" style={styles.image}/>
                                            <div align="center">
                                                <Button 
                                                    onMouseEnter={(e) => handleMouseHover(e, "#325083")} 
                                                    onMouseLeave={(e) => handleMouseHover(e, "#263f6a")}
                                                    style={styles.downloadResumeBtn}>
                                                    <i className="fa fa-download"/> Download Resume
                                                </Button>  
                                            </div>  
                                        </div>
                                        <div style={styles.nameSection}>
                                            <div style={styles.nameLabelDiv}>
                                                <label className="fa fa-user" style={styles.userIcon} />
                                                <span style={styles.spanLabel}>PERSONAL INFORMATION</span>
                                            </div>
                                            <div style={styles.infoDiv}>
                                                <div style={styles.infoGroup}>
                                                    <label style={styles.infoGroupLabel}>Name: </label> 
                                                    <span>{`${admin.firstName} ${admin.middleName.charAt(0)}. ${admin.lastName}`}</span>
                                                </div>
                                                <div style={styles.infoGroup}>
                                                    <label style={styles.infoGroupLabel}>Phone: </label> 
                                                    <span>+63 {admin.mobileNumber}</span>
                                                </div>
                                                <div style={styles.infoGroup}>
                                                    <label style={styles.infoGroupLabel}>Email: </label> 
                                                    <span>{admin.emailAddress}</span>
                                                </div>
                                                <div style={styles.infoGroup}>
                                                    <label style={styles.infoGroupLabel}>Address: </label> 
                                                    <span>{admin.completeAddress}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} style={styles.educationColumn}>
                                    <div style={styles.educationHeader}>
                                        <label className="fa fa-graduation-cap" style={styles.educationIcon} />
                                        <span style={styles.spanLabel}>EDUCATION</span>
                                    </div>
                                    <div className="row">
                                        { getEducationItems() }
                                    </div>
                                </Col>             
                                <Col sm={12} style={styles.workColumn}>
                                    <div style={styles.workHeader}>
                                        <label className="fa fa-briefcase" style={styles.workIcon} />
                                        <span style={styles.spanLabel}>Work Experience</span>
                                    </div>
                                    <div className="row">
                                        { getWorkItems() }
                                    </div>
                                </Col>                                                   
                            </Row>
                      </Col>
                      <Col sm={4} style={styles.colRight}> 
                            <div className="row">
                                <div className="col-12" style={styles.skillContainer}>
                                    <div style={styles.skillHeader}>
                                        <label className="fa fa-laptop-code"  style={styles.skillsIcon} />
                                        <span style={styles.spanLabel}>SKILLS & TOOLS</span>
                                    </div>
                                    <div style={styles.skillBox}>
                                        <label style={styles.spanLabel}>Frontend</label>
                                        <SkillBar skills={frontend} colors={{
                                        "bar": "#3498db",
                                        "title": {
                                        "text": "#fff",
                                        "background": "#2980b9"
                                        }}} animationDuration={500} animationDelay={100} height={'2vh'}/>
                                    </div>
                                    <div style={styles.skillBox}>
                                        <label style={styles.spanLabel}>Backend</label>
                                        <SkillBar skills={backend} colors={{
                                        "bar": "#da5a7e",
                                        "title": {
                                        "text": "#fff",
                                        "background": "#b93a5e"
                                        }}} animationDuration={500} animationDelay={100} height={'2vh'}/>
                                    </div>
                                    <div style={styles.skillBox}>
                                        <label style={styles.spanLabel}>Miscellaneous</label>
                                        <SkillBar skills={miscellaneous} colors={{
                                        "bar": "#93c66a",
                                        "title": {
                                        "text": "#fff",
                                        "background": "#7baf52"
                                        }}} animationDuration={500} animationDelay={100} height={'2vh'}/>
                                    </div>
                                </div>
                                <div className="col-12" style={styles.interestContainer}>
                                    <div style={styles.interestHeader}>
                                        <label className="fa fa-clock"  style={styles.interestsIcon} />
                                        <span style={styles.spanLabel}>INTERESTS</span>
                                    </div>
                                    <div style={styles.interestFlexBox}>
                                        { getInterestItems() }
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
  workIcon: { 
    backgroundColor: Theme.COLORS.LABEL_ICON,
    color: Theme.COLORS.WHITE, 
    fontSize: "16px", 
    padding: "8px 9px", 
    borderRadius: "50%", 
    marginRight: "7px", 
    marginBottom: "0px"
  },
  educationIcon: { 
    backgroundColor: Theme.COLORS.LABEL_ICON,
    color: Theme.COLORS.WHITE, 
    fontSize: "16px", 
    padding: "8px 7px 8px 7px", 
    borderRadius: "50%", 
    marginRight: "7px", 
    marginBottom: "0px"
  },
  userIcon: { 
    backgroundColor: Theme.COLORS.LABEL_ICON,
    color: Theme.COLORS.WHITE, 
    fontSize: "16px", 
    padding: "7px 9px 7px 9px", 
    borderRadius: "50%", 
    marginRight: "7px", 
    marginBottom: "0px"
  },
  skillsIcon: { 
    backgroundColor: Theme.COLORS.LABEL_ICON,
    color: Theme.COLORS.WHITE, 
    fontSize: "16px", 
    padding: "8px", 
    borderRadius: "50%", 
    marginRight: "7px", 
    marginBottom: "0px"
  },
  interestsIcon: { 
    backgroundColor: Theme.COLORS.LABEL_ICON,
    color: Theme.COLORS.WHITE, 
    fontSize: "16px", 
    padding: "8px", 
    borderRadius: "50%", 
    marginRight: "7px", 
    marginBottom: "0px"
  },
  interestsIconContent: { 
    backgroundColor: Theme.COLORS.LABEL_ICON,
    color: Theme.COLORS.WHITE, 
    fontSize: "29px", 
    padding: "8px", 
    borderRadius: "50%", 
    marginRight: "7px", 
    marginBottom: "0px"
  },
  spanLabel: { 
    fontWeight: "bold" 
  },
  downloadResumeBtn: { 
    backgroundColor: "#263f6a", 
    border: "0px", width: "190px", 
    marginTop: "7px",
    width: "100%",
    marginBottom: "15px"
  },
  dateLabel: { 
      backgroundColor: "#7192c2", 
      padding: "3px 10px", 
      color: Theme.COLORS.WHITE, 
      borderRadius: "13px", 
      margin: "0px", 
      textAlign: "center",
      margin: "0px",
      fontSize: "11px"
  },
  nameSection: { 
    marginLeft: "7px",
    marginBottom: "7px" 
  },
  nameLabelDiv: { 
    paddingBottom: "20px" 
  },
  colLeft: { 
    padding: "15px" 
  },
  personalInfoColumn: { 
    borderBottom: "1px solid " + Theme.COLORS.BORDER_DIVIDER, 
    paddingRight: "0px" 
  },
  flexBox: { 
    display: "flex", 
    flexWrap: "wrap" 
  },
  image: { 
    height: "170px", 
    border: "1px solid #dee2e9", 
    backgroundColor: "white" 
  },
  infoDiv: { 
    fontSize: "15px" 
  },
  infoGroup: { 
    paddingLeft: "15px" 
  },
  infoGroupLabel: { 
    fontWeight: "bold", 
    width: "70px" 
  },
  educationColumn: { 
    borderBottom: "1px solid " + Theme.COLORS.BORDER_DIVIDER, 
    paddingBottom: "5px" 
  },
  educationHeader: { 
    paddingBottom: "15px", 
    marginTop: "15px" 
  },
  educationContainer: { 
    padding: "0px 30px 0px 30px"
  },
  educationGroup: { 
    marginBottom: "15px" 
  },
  educationTitle: { 
    fontWeight: "bold", 
    marginBottom: "4px" 
  },
  educationSchool: { 
    padding: "0px", 
    margin: "0px 0px 4px 0px" 
  },
  workColumn: { 
    paddingBottom: "5px" 
  },
  workHeader: { 
    paddingBottom: "15px", 
    marginTop: "15px" 
  },
  workContainer: { 
    padding: "0px 30px 5px 30px" 
  },
  workContainerHeader: { 
    marginBottom: "15px" 
  },
  workTitle: { 
    fontWeight: "bold", 
    marginBottom: "4px" 
  },
  workCompany: { 
    padding: "0px",
    margin: "0px 0px 4px 0px" 
  },
  workBody: { 
    marginBottom: "15px" 
  },
  colRight: { 
    padding: "15px" 
  },
  skillContainer: { 
    borderBottom: "1px solid " + Theme.COLORS.BORDER_DIVIDER 
  },
  skillHeader: { 
    paddingBottom: "10px" 
  },
  skillBox: { 
    padding: "0px 10px 10px 10px" 
  },
  interestContainer: { 
    paddingTop: "15px" 
  },
  interestFlexBox: { 
    padding: "0px 10px 10px 10px", 
    display: "flex", 
    flexWrap: "wrap" 
  },
  interestHeader: { 
    paddingBottom: "10px" 
  },
  interestBox: { 
    display: "block", 
    textAlign: "center",
    width: "70px" 
  }
}

export default Resume;
