import {connect} from 'react-redux';
import List from '../components/List';

function mapStateToProps (state) {
    const {goods} = state;
    /* формирует данные для вывода */
    return {goods: goods};
    } 

export default connect(
    mapStateToProps,
    null
)(List);