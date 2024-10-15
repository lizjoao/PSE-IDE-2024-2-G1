import Menu from './menu.js'
import Header from './header.js'
import Catalogo from './catalogo.js'
//import Assassinos from './assassinos.js'
import Ingresso from './ingressos.js'
import Footer from './footer.js'

export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <Catalogo />
      <Ingresso />
      <Footer />
    </>
  )
}