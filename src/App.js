import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getCategoris } from './services/storeData'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Category from './components/Category'
import './App.css'
import LandingPage from './pages/LandingPage';
import CheckOut from './pages/CheckOut';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartFromDb } from './store/actions/cartActions';
import SearchPage from './pages/SearchPage';
import Loading from './components/Loading';
import DashBoard from './pages/DashBoard';
import AddProduct from './pages/AddProduct';



function App() {

  const [categoris, setCategoris] = useState([])
  const dispatch = useDispatch()
  const cartId = useSelector(state => state.cart.cartId)




  useEffect(() => {
    getCategoris().then(res => { setCategoris(res) })
    dispatch(fetchCartFromDb(cartId))
  }, [])




  return (
    <>
      <Switch>
        {
          categoris.map(category => {
            return <Route path={`/${category.name}`} exact={true} key={category.id}>
              <Category key={category.id} value={category.id} />
            </Route>
          })
        }
        <Route path='/' exact={true}>
          <LandingPage />
        </Route>
        <Route path='/cart' exact={true}>
          <Cart />
        </Route>
        <Route path='/profile' exact={true}>
          <Profile />
        </Route>
        <Route path='/home' exact={true}>
          <Home />
        </Route>
        <Route path='/checkout' exact={true}>
          <CheckOut />
        </Route>
        <Route path='/profile' exact={true}>
          <Profile />
        </Route>
        <Route path='/search'>
          <SearchPage />
        </Route>
        <Route path='/loading'>
          <Loading />
        </Route>
        <Route path='/dashboard'>
          <DashBoard />
        </Route>
        <Route path='/addproduct'>
          <AddProduct />
        </Route>
      </Switch>
    </>
  );
}

export default App;
