import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Homepage from '../components/Homepage'

function mapStateToProps(state) {
  return {
    results: state.demo.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
