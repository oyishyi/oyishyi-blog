import React from 'react'
import { connect } from 'react-redux'

export const Write = (props) => {
    return (
        <div>写文章</div>
    );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write)
