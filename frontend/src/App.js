import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from "./components/PrivateRoute"
import Home from './pages/Home/Home'
import Login from './pages/Login'
import Account from "./pages/Account"
import Activities from "./pages/Activities"
// import ActivityDetail from "./pages/ActivityDetail/ActivityDetail";
import Register from './pages/Register'
import NewActivity from "./pages/NewActivity"
import Activity from "./pages/Activity/Activity"

function App() {
  return (
    <>
        <Router>
            <div className="container">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/new-activity' element={<PrivateRoute />}>
                        <Route path='/new-activity' element={<NewActivity />} />
                    </Route>
                    {/*<Route path='/activities' element={<PrivateRoute />}>*/}
                    <Route path='/activities' element={<Activities />} />
                    {/*</Route>*/}
                    {/*<Route path='/activity/:id' element={<PrivateRoute />}>*/}
                        <Route path='/activity/:activityId' element={<Activity />} />
                        {/*<Route path='/activity/one/:activityId' element={<Activity />} />*/}
                    {/*</Route>*/}
                </Routes>
                <Footer />
            </div>
        </Router>
        <ToastContainer />
    </>
  );
}

export default App;
