import { connect } from 'react-redux';
import Order from './Order';
import handleChangeDate from '../../actions/changeDate/handleChangeDate';

export default connect(
  state => ({
    state: state.changeDate
  }),
  { handleChangeDate }
)(Order);
