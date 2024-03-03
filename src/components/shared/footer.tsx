import React from 'react'

const disclaimer = "Disclaimer: This site only provides guidance and the user still has the responsibilty to engage the medical practitioner in person."
                    + " A diagnosis and treatment plan can only be made after full medical history and physical examination has been done."
                    + " Use the information as a guide for further action and public health awareness but not a substitute for formal medical consultation."
                    + " The platform and its participants do not take any responsibility for any actions taken without directions obtained through a formal consultation with a quaified medical professional."

const Footer = () => {
  return (
    <div className='footer'>
        <p>{disclaimer}</p>
    </div>
  )
}

export default Footer