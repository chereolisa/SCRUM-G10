import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Features() {

    return (
        <div className='howitworks-container'>
            <h2>How TruthCheck Works</h2>

            <div className='howitworks-images'>
                <img src='/src/Images/howitworks1.png' alt='How it works' className='howitworks-image'/>
                <img src='/src/Images/howitworks2.png' alt='How it works' className='howitworks-image'/>
                <img src='/src/Images/howitworks3.png' alt='How it works' className='howitworks-image'/>
                <img src='/src/Images/howitworks4.png' alt='How it works' className='howitworks-image'/>
                </div>
        </div>
    )
}
export default Features