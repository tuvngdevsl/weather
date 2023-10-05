import Home from '../pages/Home'
import Month from '../pages/Month'
import Today from '../pages/Today'
import Weekend from '../pages/Weekend'


// Không cần đăng nhập vẫn xem đươc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/month', component: Month },
    { path: '/today', component: Today },
    { path: '/weekend', component: Weekend, layout: null },
]

//Phải đăng nhập mới xem được không thì sẽ sang trang login
const privateRoutes = [

]

export { publicRoutes, privateRoutes }