import React from 'react';
import ReactDOM from 'react-dom';
// import injectSheet from 'react-jss';
// import './index.css';
import Homepage from './Homepage.js';
import PropTypes from 'prop-types';

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

class BoredAndBroke extends React.Component {
  render() {
    // const status = 'This is our project:';
    const { classes } = this.props;
    return (
          <div className={ classes.main }>
            <span>This is our project, welcome!</span>
            <div>
                <Homepage />
            </div>
         </div>
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
// export default injectSheet(styles)(BoredAndBroke);


// ========================================// ========================================// ========================================

// import React from 'react';
// import PropTypes from 'prop-types';
// import injectSheet from 'react-jss';
// import Homepage from './Homepage.js';
//
// const propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// const styles = {
//     main: {
//         backgroundColor: '#64d8ed',
//         textAlign: 'center',
//         marginLeft: '50px',
//         width: '45px',
//     },
// };
//
// class BoredAndBroke extends React.Component {
//   render() {
//     const status = 'This is our project:';
//     const { classes } = this.props;
//     return (
//         <div>
//           <div className={ classes.main }>
//             {status}
//             <br />
//             <span>Enjoy!</span>
//           </div>
//           <div>
//             <Homepage />
//           </div>
//         </div>
//     );
//   }
// }
//
// BoredAndBroke.propTypes = propTypes;
// export default injectSheet(styles)(BoredAndBroke);
