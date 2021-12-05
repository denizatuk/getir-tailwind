import Header from 'components/Header'
import HeroSection from 'components/HeroSection'
import Categories from 'components/Categories'
import Campanies from 'components/Campanies'
import Favorites from 'components/Favorites'
import MobileApps from 'components/MobileApps'
import Cards from 'components/Cards'
import Footer from 'components/Footer'
function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Categories/>
    <Campanies/>
    <div className="container mx-auto grid gap-y-6">
    <Favorites/>
    <MobileApps/>
    <Cards/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
