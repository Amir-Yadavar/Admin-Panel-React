import Home from './pages/Home/Home'
import NewUser from './pages/NewUser/NewUser'
import UserLists from './pages/Users/UserLists'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import User from './pages/Users/User/User'
import Mail from './pages/Mail/Mail'
import Analytics from './pages/Analytics/Analytics'
import Sales from './pages/Sales/Sales'
import ReadMore from './pages/ReadMore/ReadMore'
import Messages from './pages/Messages/Messages'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/analytics', element: <Analytics /> },
    { path: '/sales', element: <Sales /> },
    { path: '/readmore', element: <ReadMore /> },
    { path: '/messages', element: <Messages /> },
    { path: '/newUser', element: <NewUser /> },
    { path: '/mail', element: <Mail /> },
    { path: '/users', element: <UserLists /> },
    { path: '/products', element: <Products /> },
    { path: '/products/:productId', element: <Product /> },
    { path: '/users/:userId', element: <User /> },
]

export default routes