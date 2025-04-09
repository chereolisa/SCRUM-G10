import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  // Register Service Worker for offline support
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.ts') // Or the path to your service worker
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope)
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error)
          })
      })
    }
  }, [])

  // Function to change language
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 sm:p-6 md:p-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl">{t('welcome')}</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <p className="text-center text-gray-700">
          {t('description')}
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 text-center">
        <p>© 2025 SCRUM G10</p>
      </footer>

      {/* Language Switcher */}
      <div className="absolute bottom-4 right-4">
        <button onClick={() => changeLanguage('en')} className="px-4 py-2 bg-blue-500 text-white rounded-md">English</button>
        <button onClick={() => changeLanguage('ig')} className="px-4 py-2 bg-green-500 text-white rounded-md">Igbo</button>
        <button onClick={() => changeLanguage('ha')} className="px-4 py-2 bg-yellow-500 text-white rounded-md">Hausa</button>
        <button onClick={() => changeLanguage('yo')} className="px-4 py-2 bg-red-500 text-white rounded-md">Yoruba</button>
      </div>
    </div>
  )
}

export default App
