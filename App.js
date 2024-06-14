
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app.router';
// import { Flex } from './components/Flex/Flex.components';
import { Menu } from './components/menu/menu.components';
import { RegistrationPage } from './components/registration/registration.components';
import { Grid } from './components/Grid/Grid.components';
import { CardComponents } from './components/card/card.components';
import { U_menu } from './components/u_menu/u_menu.components';
import { Navbar } from './components/navbar/navbar.components';
import { Navbar1 } from './components/navbar1/navbar1.components';
import { Banners } from './components/banners/banners.components';
import { Banner1 } from './components/banner1/banner1.components';
import { Section } from './components/section/section.components';
import { Block } from './components/block/block.components';
import { Product } from './components/product/product.components';
import { Banner2 } from './components/banner2/banner2.components';
import { Product1 } from './components/product1/product1.components';
import { Block1 } from './components/block1/block1.components';
import { Footer } from './components/footer/footer.components';
import { Section1 } from './components/section1/section1.components';
import { About } from './components/About/about.components';

function App() {
  return (
    <>
      {/* <Grid></Grid> */}
      {/* <Flex></Flex>
    // <Menu></Menu> */}
      <div>
        <BrowserRouter>
          {/* <Menu></Menu>
          <CardComponents></CardComponents>
          <Grid></Grid> */}
          {/* <Navbar></Navbar>
          <Navbar1></Navbar1>
         <U_menu></U_menu>
         <Banners></Banners>
         <Banner1></Banner1>
         <Section></Section>
         <Block></Block>
         
         <Product></Product>
         <Banner2></Banner2>
         <Product1></Product1>
         <Block1></Block1>
         <Footer></Footer>
         <About></About> */}
           <AppRouter></AppRouter> 
        </BrowserRouter>
      </div>
      {/* <RegistrationPage></RegistrationPage>   */}
      {/* <div >
      <br></br>
      <p style = {{fontfamily: 'Algerian', color: 'blue'}}>
        <h1>
          AirServices
        </h1>
        <br></br>
      </p>
    <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
    <br></br>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
    <br></br>
    <label for="tno">Ticket number</label>
    <input type="number" id="tno" name="ticketnumber" placeholder="your ticket number"></input>
    <br></br>
    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  <br></br>
    <input type="submit" value="Submit" ></input>
  </form>
    </div> */}
    </>
  );
}

export default App;
