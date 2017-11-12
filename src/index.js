import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import injectSheet from 'react-jss';
// import './index.css';
import PropTypes from 'prop-types';
import Homepage from './Homepage.js';
import LoginCreateAccount from './LoginCreateAccount.js';
import SavedActivities from './SavedActivities.js';
import Settings from './Settings.js';
// import SingleActivityModal from './SingleActivityModal.js';


const propTypes = {
    classes: PropTypes.object.isRequired,
};


const styles = {
    main: {
        backgroundColor: '#64d8ed',
        width: '43px',
        textAlign: 'center',
    },
};

// const Test = () => (
//     <Router>
//         <div>
//             <ul>
//                 <li><Link to="/Homepage">Homepage</Link></li>
//                 <li><Link to="/SavedActivities">SavedActivities</Link></li>
//                 <li><Link to="/Settings">Settings</Link></li>
//                 <li><Link to="/LoginCreateAccount">LoginCreateAccount</Link></li>
//             </ul>
//
//             <hr />
//
//             <Route exact path="/" component={Homepage}/>
//             <Route path="/about" component={SavedActivities}/>
//             <Route path="/topics" component={Settings}/>
//             <Route path="/LoginCreateAccount" component={LoginCreateAccount}/>
//         </div>
//     </Router>
// )

// const TestTopics = ({ match }) => (
//     <div>
//         <h2
// )

class BoredAndBroke extends React.Component {
  render() {
    // const status = 'This is our project:';
    const { classes } = this.props;
    return (
        //   <div className={ classes.main }>
        //     <div>
        //         <Homepage />
        //     </div>
         //
        //  </div>
         <Router>
             <div>
                 <ul>
                     <li><Link to="/Homepage">Homepage</Link></li>
                     <li><Link to="/SavedActivities">SavedActivities</Link></li>
                     <li><Link to="/Settings">Settings</Link></li>
                     <li><Link to="/LoginCreateAccount">LoginCreateAccount</Link></li>
                 </ul>

                 <hr />

                //  <Route exact path="./" component={Homepage}/>
                 <Route path="/Homepage" component={Homepage}/>
                 <Route path="/SavedActivities" component={SavedActivities}/>
                 <Route path="/Settings" component={Settings}/>
                 <Route path="/LoginCreateAccount" component={LoginCreateAccount}/>
             </div>
         </Router>
      );
    }
  }


BoredAndBroke.propTypes = propTypes;

ReactDOM.render(
  <BoredAndBroke
    classes={styles.main}
  />,
  document.getElementById('root')
);
