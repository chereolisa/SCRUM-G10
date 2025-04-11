import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

function Info() {

    return (
        <>
        <div className='info-container'>
            <h1>Verify Before You Share-<br/>
                Fight Misinformation in<br/>
                Nigeria</h1>
            <p>TruthCheck helps you verify news, images, and claims circulating in Nigeria.<br/>
                Stop misinformation before it spreads.</p>
        </div>
        <div className='verify-container'>
        <div className='verify'>
            <input className="verify-input" type="text" placeholder='Paste  or type a URL, headline, or statement to fact check...'/>
            <button className="verify-button"><i className="fas fa-file" style={{ fontSize: '18px', color: 'white'}}></i>&nbsp;Check Text</button>
        </div>
        </div>
        </>
    )
}
export default Info