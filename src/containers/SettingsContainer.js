import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Settings from '../components/Settings'

function mapStateToProps(state) {
  return {
    results: state.demo.results,
    activity: state.demo.activity,
    activities: state.demo.activities,
    is_first_time: state.demo.is_first_time,
    saved_activities: state.demo.saved_activities,
    tagline: state.demo.tagline,
    user: state.demo.user,
    users: state.demo.users,
    is_update_needed: state.demo.is_update_needed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
