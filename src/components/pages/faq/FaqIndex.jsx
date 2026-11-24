import React from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import FaqBody from './FaqBody'

const FaqIndex = () => {
  return (
    <>
    <BreadCrumb title="faq" routeName="faq" parentRouteName='home' parentRouteUrl='/'/>
    <FaqBody/>
    </>
  )
}

export default FaqIndex