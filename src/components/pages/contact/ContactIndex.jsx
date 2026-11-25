import React from 'react'
import BreadCrumb from '../../common/BreadCrumb'
import ContactBody from './ContactBody'

const ContactIndex = () => {
  return (
    <>
    <BreadCrumb title="Contact Us" routeName="contact us" parentRouteName='home' parentRouteUrl='/' />
    <ContactBody/>
    </>
  )
}

export default ContactIndex