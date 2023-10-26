import Home from '~/pages/Home'
import Monthly from '~/pages/Monthly'
import Weekend from '~/pages/Weekend'
import Hourly from '~/pages/Hourly'
import TenDay from '~/pages/10Day'
import Radar from '~/pages/Radar'

// Không cần đăng nhập vẫn xem đươc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/monthly', component: Monthly },
    { path: '/hourly', component: Hourly },
    { path: '/today', component: Home },
    { path: '/10day', component: TenDay },
    { path: '/I/:location', component: Home },
    { path: '/weekend', component: Weekend },
    { path: '/radar', component: Radar },
]

//Phải đăng nhập mới xem được không thì sẽ sang trang login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }