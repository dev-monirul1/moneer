import React from 'react'
import Heading from '../../utils/Heading'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'


const data = [
    {
        id:1,
        icon:<FaEnvelope  />,
        iconColor: "#00C3B7",
        label: "Email",
        list: [
            "monnersupport@email.com", "monnerhr@email.com"
        ]
    },
    {
        id:2,
        icon:<FaPhone  />,
        iconColor: "#5F5FFF",
        label: "Call Us",
        list: [
            "(+1) 123-123-123", "(+1) 202-555-0134"
        ]
    },
    {
        id:3,
        icon:<FaMapMarkerAlt />,
        iconColor: "#FF5851",
        label: "Location",
        list: [
            "275 Jimmy Way", "Copperopolis, California(CA), 95228"
        ]
    }
]

const ContactBody = () => {
  return (
    <section className='py-25'>
        <div className="container">
            <div className="max-w-[825px] mx-auto grid grid-cols-3 gap-x-13">
                {data.map((item,index)=>(
                    <div key={index} className="flex flex-col items-center">
                    <div className={`size-20 rounded-full bg-white shadow-xl flex items-center justify-center [&>svg]:text-2xl`} style={{color: item.iconColor}}>
                        {item.icon}
                    </div>
                    <Heading text={item.label} varient='h3' className='font-bold font-montserrat text-xl text-black_2 mt-5' />
                    <ul className='mt-1.5'>
                        {item?.list.map((list,listIndex)=>(
                            <li key={listIndex} className='text-center font-lato font-bold text-base text-gray_2'>{list}</li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ContactBody