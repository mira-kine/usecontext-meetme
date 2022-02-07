import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import { useUser } from '../../context/UserContext'

const Layout = ({ user, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />
      <main className="flex flex-col flex-1 justify-center items-center">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
