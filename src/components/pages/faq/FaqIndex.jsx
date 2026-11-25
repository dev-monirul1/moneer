import React from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import FaqBody from './FaqBody'
import FaqContactForm from './FaqContactForm'

const FaqIndex = () => {
  return (
    <>
    <BreadCrumb title="faq" routeName="faq" parentRouteName='home' parentRouteUrl='/'/>
    {/* <FaqBody/>
    <FaqContactForm/> */}
    </>
  )
}

export default FaqIndex