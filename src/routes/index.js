import { HeaderOnly } from "~/components/Layouts"

import Home_Page from "~/Pages/Home_Page"
import CreateCards_Page from "~/Pages/CreateCards_Page"
import Button from "~/components/Buttons"
//publicRoutes
const publicRoutes = [
    {path: '/', Component: Home_Page},
    {path: '/create-cards', Component: CreateCards_Page, layout: HeaderOnly}

]


//privateRoutes
const privateRoutes = [

]

export {publicRoutes, privateRoutes}