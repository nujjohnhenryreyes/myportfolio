import React from 'react';
import { Link } from 'react-router-dom';
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
    Nav, 
    NavItem, 
    NavLink   
} from 'reactstrap';
import Theme from '../constants/Theme';

const SideNav = (props) => {
    const [navigation, navigationState] = React.useState({
        portfolio: "PORTFOLIO",
        resume: "RESUME",
        aboutMe: "ABOUT ME",
        contact: "CONTACT",
        signIn: "SIGN IN",
    });

    const [social, socialState] = React.useState({
        facebook: "https://www.facebook.com/nujreyes00/",
        linkedIn: "https://www.linkedin.com/in/nuj-reyes-4250391b3/",
        gitHub: "https://github.com/nujjohnhenryreyes"
    });

    const handleMouseHover = (e, color) => {
        e.target.style.backgroundColor = color;
    }

  return (
    <Card style={
        (!props.isLightMode) ? styles.darkCard : styles.lightCard
        }>
        <CardHeader style={styles.cardHeader} >
            <CardImg src={`${require(`../assets/img/${props.admin.image}`)}`} className="profile" alt="profile" style={styles.cardImg}/>
            <div style={{color: `${(!props.isLightMode) ? Theme.COLORS.WHITE : Theme.COLORS.DARKTEXT}`}}>
                {`${props.admin.firstName.toUpperCase()} ${props.admin.middleName.charAt(0).toUpperCase()}. ${props.admin.lastName.toUpperCase()}`}
            </div>
            <label style={styles.designation}>{ props.admin.designation }</label>
        </CardHeader>
        <CardBody style={styles.cardBody}>
            <Row>
                <Col sm={12}>               
                    <Link to="route" target="_blank" onClick={() => { window.open(social.facebook); }} style={styles.socialLinks} >
                        <i className="fa fa-facebook-square" /> 
                    </Link>
                    <Link to="route" target="_blank" onClick={() => { window.open(social.linkedIn); }} style={styles.socialLinks} >
                        <i className="fa fa-linkedin-square" /> 
                    </Link>
                    <Link to="route" target="_blank" onClick={() => { window.open(social.gitHub); }} style={styles.socialLinks} >
                    <i className="fa fa-github" />
                    </Link>
                </Col>
                <Col sm={12} style={styles.navColumn} align="center">
                <Nav vertical style={styles.nav}>
                    <NavItem>
                        <Link to="/" style={styles.link}>
                            <div style={styles.aboutMe}   
                                onMouseEnter={(e) => handleMouseHover(e, "#efae2a")} 
                                onMouseLeave={(e) => handleMouseHover(e, "#e49d0c")}>
                                <i className="fa fa-user" style={{ marginRight: "12px" }} />{ navigation.aboutMe }
                            </div>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/portfolio" style={styles.link}>
                            <div style={styles.portfolio}
                                onMouseEnter={(e) => handleMouseHover(e, "#5793dc")} 
                                onMouseLeave={(e) => handleMouseHover(e, "#467ec3")}>
                                <i className="fa fa-folder-open" style={{ marginRight: "12px" }} />{ navigation.portfolio }
                            </div>
                        </Link>
                    </NavItem>                
                    <NavItem>
                        <Link to="/resume" style={styles.link}>
                            <div style={styles.resume}
                                onMouseEnter={(e) => handleMouseHover(e, "#f55499")} 
                                onMouseLeave={(e) => handleMouseHover(e, "#e84289")}>
                                <i className="fa fa-file" style={{ marginRight: "12px" }} />{ navigation.resume }
                            </div>
                        </Link>
                    </NavItem>                 
                    <NavItem>
                        <Link to="/contact" style={styles.link}>
                            <div style={styles.contact}
                                onMouseEnter={(e) => handleMouseHover(e, "#42c4bd")} 
                                onMouseLeave={(e) => handleMouseHover(e, "#3fbbb4")}>
                                <i className="fa fa-phone" style={{ marginRight: "12px" }} />{ navigation.contact }
                            </div>
                        </Link>
                    </NavItem>
                    {/* <NavItem>
                        <Link to="/signin" style={styles.link}>
                            <div style={styles.signIn}     
                                onMouseEnter={(e) => handleMouseHover(e, "#9dc840")} 
                                onMouseLeave={(e) => handleMouseHover(e, "#90b73b")}>
                                <i className="fa fa-sign-in" style={{ marginRight: "12px" }} />{ navigation.signIn }
                            </div>
                        </Link>
                    </NavItem> */}
                </Nav>
                </Col>
            </Row>
        </CardBody>
    </Card>
  );
}

const styles = {
    lightCard: { 
        textAlign: "center", 
        paddingTop: "17px",
        height: "100%",
    },
    darkCard: { 
        textAlign: "center", 
        paddingTop: "17px",
        height: "100%",
        backgroundColor: Theme.COLORS.DARKMODE
    },
    cardHeader: {
        fontSize: "16px", 
        fontWeight: "bold", 
        backgroundColor: "transparent", 
        border: "0px"
    },
    cardBody: {
        padding: "0px 12px 0px 12px", 
        overflow: "hidden"
    },
    cardImg: { 
        borderRadius: "50%", 
        border: "1px solid " + Theme.COLORS.PRIMARY, 
        marginBottom: "12px" 
    },
    link: {
        textDecoration: 'none',  
        color: "white"
    },
    socialLinks: { 
        color: Theme.COLORS.MUTED, 
        fontSize: "30px", 
        marginRight: "8px", 
        marginLeft: "8px" 
    },
    designation: { 
        backgroundColor: "#ebedf5", 
        padding: "5px 15px 5px 15px", 
        borderRadius: "50px" 
    },
    navColumn: { 
        padding: "10px 20px 10px 20px" 
    },
    nav: { 
        lineHeight: "0.6" 
    },
    aboutMe: {
        backgroundColor: "#e49d0c",
        width: "95%",
        padding: "14px 16px 14px 16px",
        borderRadius: "14px",
        fontSize: "18px",
        textAlign: "left"
    },
    portfolio: {
        backgroundColor: "#467ec3",
        width: "95%",
        padding: "14px 16px 14px 16px",
        borderRadius: "14px",
        fontSize: "18px",
        textAlign: "left"
    },
    resume: {
        backgroundColor: "#e84289",
        width: "95%",
        padding: "14px 16px 14px 16px",
        borderRadius: "14px",
        fontSize: "18px",
        textAlign: "left"
    },  
    contact: {
        backgroundColor: "#3fbbb4",
        width: "95%",
        padding: "14px 16px 14px 16px",
        borderRadius: "14px",
        fontSize: "18px",
        textAlign: "left"
    },
    signIn: {
        backgroundColor: "#90b73b",
        width: "95%",
        padding: "14px 16px 14px 16px",
        borderRadius: "14px",
        fontSize: "18px",
        textAlign: "left"
    },
}

export default  SideNav;
