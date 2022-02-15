import NavigationBar from './NavigationBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main className='container'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
