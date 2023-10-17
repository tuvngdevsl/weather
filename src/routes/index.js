import Home from '../pages/Home'
import Month from '../pages/Month'
import Today from '../pages/Today'
import Weekend from '../pages/Weekend'
import Hourly from '~/pages/Hourly'
import TenDay from '~/pages/10Day'

// Không cần đăng nhập vẫn xem đươc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/month', component: Month },
    { path: '/hourly', component: Hourly },
    { path: '/today', component: Today },
    { path: '/10day', component: TenDay },
    { path: '/I/:location', component: Home },
    { path: '/weekend', component: Weekend, layout: null },
]

//Phải đăng nhập mới xem được không thì sẽ sang trang login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }