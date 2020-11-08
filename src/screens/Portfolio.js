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
import Lightbox from 'react-image-lightbox';

const Index = () => {
  /* States */
  const [isLoading, loadingState] = React.useState(true);
  const [isLightMode, lightModesState] = React.useState(true);
  const [imageViewer, imageViewerState] = React.useState({ photoIndex: 0, isOpen: false });
  const [projectCode, projectCodeState] = React.useState(null);
  const [images, imagesState] = React.useState([]);
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

  const [projects, projectState] = React.useState([
      { 
        title: "THESIS: eJOBCAV", 
        finishedOn: "July 2019",
        stack: "HTML5 / CSS3 / Javascript / PHP / MySQL",        
        selectedImage: "ejobcav/1-home.PNG",
        strCode: "xhsth",
        images: [
          "ejobcav/1-home.PNG", "ejobcav/2-about.PNG", "ejobcav/3-articles.PNG", "ejobcav/4-achievements.PNG", "ejobcav/5-affiliation.PNG", "ejobcav/6-viewcompany.PNG", "ejobcav/7-viewjobs.PNG", "ejobcav/8-gallery.PNG", "ejobcav/9-events.PNG", "ejobcav/10-faqs.PNG", "ejobcav/11-search.PNG",
          "ejobcav/12-contact-us.PNG", "ejobcav/13-login.PNG", "ejobcav/14-complete-info.PNG", "ejobcav/15-joblists.PNG", "ejobcav/16-personal-info.PNG", "ejobcav/17-education.PNG", "ejobcav/18-trainings.PNG", "ejobcav/19-eligibility.PNG", "ejobcav/20-preferences.PNG", "ejobcav/21-work-experience.PNG", "ejobcav/22-skills.PNG",
          "ejobcav/23-nsrp-form.PNG", "ejobcav/24-resume.PNG", "ejobcav/25-applied-jobs.PNG", "ejobcav/26-application-status.PNG", "ejobcav/27-email.PNG", "ejobcav/28-notification.PNG", "ejobcav/29-saved-jobs.PNG", "ejobcav/30-recommendation.PNG", "ejobcav/31-activity-log.PNG", "ejobcav/32-company-dashboard.PNG", "ejobcav/33-accept-event-invitation.PNG",
          "ejobcav/34-job-applications.PNG", "ejobcav/35-position-applied.PNG", "ejobcav/36-submitted-resume.PNG", "ejobcav/37-submitted-nsrp-form.PNG", "ejobcav/38-interview-scheduler.PNG", "ejobcav/39-video-interview.PNG", "ejobcav/40-company-reports.PNG", "ejobcav/41-application-record.PNG", "ejobcav/42-admin-dashboard.PNG", "ejobcav/43-vacancy-approval.PNG", "ejobcav/44-event-posting.PNG",
          "ejobcav/45-users.PNG", "ejobcav/46-companies.PNG", "ejobcav/47-file-maintenance.PNG", "ejobcav/48-archives.PNG", "ejobcav/49-admin-reports.PNG", "ejobcav/50-job-seekers.PNG", "ejobcav/51-backup-adn-restore.PNG"
        ] 
      },
  ]);
  
  /* Effects */
  React.useEffect(() => {
    setTimeout(() => {
      loadingState(false);
    }, 1000);
  }, []);

  const handleMouseHover = (e, status) => {
      projectCodeState(status);
      e.target.style.backgroundColor = (!status) ? "transparent" : "#767777";     
  }

  const handleOnClick = (e, index) => {
    const setOfImages = projects[index].images;
    const newSetOfImages = [];
    for(let i = 0; i < setOfImages.length; i++){
        newSetOfImages.push(require(`../assets/img/${setOfImages[i]}`))
    }
    imagesState(newSetOfImages);    
    imageViewerState({ ...imageViewer, ["isOpen"]: true })     
  }

  /* Functions */
  const onCloseRequest = () => {
    imagesState([]);
    imageViewerState({ photoIndex: 0, isOpen: false });
  }

  const getProjectItems = () => {
    const listItems = projects.map((item, index) =>
      <div className="col-md-12 col-xl-4" style={styles.portfolioColumn} key={index}>
        <Card body style={styles.portfolioBox}>
            <div style={styles.boxBody} align="center">
                <div 
                onMouseEnter={(e) => handleMouseHover(e, item.strCode)}
                onMouseLeave={(e) => handleMouseHover(e, null)}     
                onClick={(e) => handleOnClick(e, index)}                                        
                style={styles.imageContainer} />
                <CardImg src={`${require(`../assets/img/${item.selectedImage}`)}`} 
                alt=""
                className={classnames({
                    "portfolio-on": (projectCode === item.strCode),
                    "portfolio-off": (projectCode !== item.strCode),
                  })}
                style={styles.image} />
            </div>
            <div style={styles.boxFooter}>
               <div>
                <label>{item.title}</label>
                  <label style={styles.dateLabel} >{item.finishedOn}</label>
               </div>
               <div>
                <label>STACK:</label>
                <span> {item.stack}</span>
            </div>
            </div>   
          </Card>                                                        
      </div>
    );

    return listItems;
  }

  if(!isLoading){
    return (
      <div className="main">  
      <Background />
      {imageViewer.isOpen && images.length && (
            <Lightbox
                mainSrc={images[imageViewer.photoIndex]}
                nextSrc={images[(imageViewer.photoIndex + 1) % images.length]}
                prevSrc={images[(imageViewer.photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => onCloseRequest()}
                onMovePrevRequest={() =>
                    imageViewerState({ ...imageViewer, ["photoIndex"]: (imageViewer.photoIndex + images.length - 1) % images.length})
                }
                onMoveNextRequest={() =>
                    imageViewerState({ ...imageViewer, ["photoIndex"]: (imageViewer.photoIndex + 1) % images.length })
                }
            />
        )}
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
                          PORTFOLIO 
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
                    <Row>
                      <Col sm={12} style={styles.portfolioSection}>
                        <div className="row">
                            { getProjectItems() }
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
  portfolioSection: { 
    padding: "15px",
    marginBottom: "15px" 
  },
  dateLabel: { 
    backgroundColor: "#7192c2", 
    padding: "2px 10px", 
    color: Theme.COLORS.WHITE, 
    borderRadius: "13px", 
    margin: "0px", 
    textAlign: "center",
    margin: "0px",
    fontSize: "11px",
    float: "right"
  },
  portfolioColumn: { 
    padding: "5px",
    minWidth: "400px" 
  },
  portfolioBox: { 
    padding: "7px", 
    color: Theme.COLORS.DARKTEXT 
  },
  boxBody: { 
    height: "250px", 
    backgroundColor: "#eff1ef", 
    position: "relative", 
    overflow: "hidden" 
  },
  imageContainer: { 
    position: "absolute", 
    height: "100%", 
    width: "100%", 
    zIndex: "1", 
    backgroundColor: "transparent", 
    opacity: "0.3", 
    cursor: "pointer" 
  },
  image: { 
    height: "100%", 
    width: "auto", 
    maxWidth: "100%", 
    cursor: "pointer", 
    position: "relative", 
    zIndex: "0" 
  },
  boxFooter: { 
    paddingTop: "7px", 
    fontSize: "12px", 
    fontWeight: "bold" 
  }
}

export default Index;
