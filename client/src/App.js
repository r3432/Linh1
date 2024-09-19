import { Routes, Route } from 'react-router-dom'
import { Home, Login, Rental, Homepage, DetailPost, SearchDetail } from './containers/Public'
import { path } from './ultils/constant'
import { System, CreatePost ,ManagePost} from './containers/System'
import * as actions from './store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'



function App() {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.auth)
  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrent())
    }, 1000)
  }, [isLoggedIn])

  useEffect(() => {
    dispatch(actions.getPrices())
    dispatch(actions.getAreas())
    dispatch(actions.getProvinces())
  }, [])

  return (
    <div className="bg-primary overflow-hidden">
      <Routes>
    
        <Route path={path.SYSTEM} element={<System />} >
          <Route path={path.CREATE_POST} element={<CreatePost />} />
        
        </Route>

      </Routes>
    </div>
  );
}

export default App;
