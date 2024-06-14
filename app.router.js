import { Route, Router, Routes } from "react-router-dom";
// import { Flex } from "./components/Flex/Flex.components";
import { RegistrationPage } from "./components/registration/registration.components";
import { About } from "./components/About/about.components";
import { Home } from "./components/home/home";
import { Productpg } from "./components/Productpg/Productpg.components";
import { Terms } from "./components/terms/terms.components";
import { Contact } from "./components/contact/contact.components";
import { Blog } from "./components/Blog/Blog.components";
import { Signin } from "./components/Sign_in/Sign_in.components";
import { Order } from "./components/order/order.components";
import { Faq } from "./components/FAQ/FAQ.components";
import { Home2 } from "./components/home2/home2.components";

export function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path="/about"
                element={<About></About>}>
            </Route>
            <Route path="/productpg"
                element={<Productpg></Productpg>}>
            </Route>
            <Route path="/Terms" element={<Terms></Terms>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Blog" element={<Blog></Blog>}></Route>
            <Route path="/Signin" element={<Signin></Signin>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/order' element={<Order></Order>}></Route>
            <Route path='/Faq' element={<Faq></Faq>}></Route>
            <Route path="/home2" element={<Home2></Home2>}></Route>
        </Routes>
    )
}