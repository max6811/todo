

import {connect} from 'react-redux'
import {setVisibility} from '../actions'
import Link from './Link'

const mapStateToProps = (state, ownProps) => {
    return {
        filter_visibility: state.filter_visibility
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: () => {
            console.log('filtrar por link');
            // console.log(value);
            console.log(ownProps.filter);
            dispatch(setVisibility(ownProps.filter))
        }
    }
}


const FilterLink = connect(
 mapStateToProps,
 mapDispatchToProps
)(Link);

export default FilterLink
