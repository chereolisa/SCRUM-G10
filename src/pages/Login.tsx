import React, { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission logic here (e.g., send data to API)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
      </form>
    </div>
  )
}

export default Login
