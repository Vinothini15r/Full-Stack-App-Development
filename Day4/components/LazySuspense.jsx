import PropTypes from 'prop-types'
import { Suspense } from "react";
import loader from '../assets/images/loader.gif'


const LazySuspense = ({component:Component, ...rest}) => {
    return (
        <Suspense fallback={<img src={loader} alt='Loader'/>}>
            <Component {...rest}/>
        </Suspense>
        )
    
}

LazySuspense.propTypes = {
    component: PropTypes.element.isRequired
}

export default LazySuspense