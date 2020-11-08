import React from 'react';
import ReactLoading from 'react-loading';
import Background from './Background';
import Theme from '../constants/Theme';

const SplashScreen = () => {
  const [admin, adminState] = React.useState({
    firstName: "Nuj John Henry",
    middleName: "Vera",
    lastName: "Reyes",
    designation: "Software Engineer",
    image: "gradpic.jpg"
});

  return (
  <div className="main">  
    <Background />
      <div style={styles.frontScreen}>
        <div className="col" style={styles.body}>
          <div className="vertical-center" style={styles.personSection}>
            <div style={styles.nameSection}>
              <span>{admin.firstName.toUpperCase()} { admin.middleName.charAt(0) + '.' } </span>
              <span style={styles.lastname}>{admin.lastName.toUpperCase()}</span>
            </div>
            <div style={styles.designationSection}>
              <span style={styles.designationFirstWord}>{admin.designation.split(" ")[0]} </span>
              <span>{admin.designation.split(" ")[1]}</span>
            </div>
          </div>
        </div>
        <div className="col" style={styles.footerSection}> 
            <div  style={styles.footerSectionUp} />
            <div style={styles.footerSectionDown} align="center">
              <ReactLoading type="bubbles" color={`${Theme.COLORS.PRIMARY}`} height={20} width={150} />
            </div>
        </div>
      </div>
  </div>
  );
}

const styles = {
  frontScreen: { 
    height: "100%", 
    width: "100%", 
    position: "relative", 
    zIndex: "2" 
  },
  body: {
    height: "100%", 
    padding: "3%", 
    position: "absolute" 
  },
  personSection: {
    padding: "10px"
  },
  nameSection: {
    fontSize: "clamp(2rem, 2vw, 4rem)", 
    fontWeight: "bold",
    paddingTop: "265px",
  },
  lastname:{
    color: "#bfb343", 
    textShadow: "1px 1px #ebe39b"
  },
  designationSection: {
    marginBottom: "10%", 
    fontSize: "24px"
  },
  designationFirstWord: {
    color: "#bfb343", 
    textShadow: "0px 1px #ebe39b"
  },
  footerSection: {
    height: "100%", 
    position: "relative", 
    textAlign: "center"
  },
  footerSectionUp: {
    height: "75%"
  },
  footerSectionDown: {
    height: "25%"
  }
}

export default SplashScreen;
