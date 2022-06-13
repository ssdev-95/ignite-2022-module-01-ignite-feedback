import { useState } from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import Sidebar from './components/Sidebar'
import InternalError from './components/Error'

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	function toggleSidebar() {
		setIsSidebarOpen(prev => !prev)
	}
  try {
	  return (
		  <div className="app">
				<Header
					isOpen={isSidebarOpen}
					toggleFunction={toggleSidebar}
				/>
				<main className="app__content--wrapper">
					<Sidebar isOpen={isSidebarOpen} />
					<Posts />
				</main>
		  </div>
	  )
	} catch(err) {
		return (
			err && (<InternalError error={err} />)
		)
	}
}

export default App
