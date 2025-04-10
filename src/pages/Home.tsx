import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-800">{t('welcome')}</h2>
      <p className="text-lg text-gray-600">{t('description')}</p>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">{t('button')}</button>
    </div>
  )
}

export default Home
