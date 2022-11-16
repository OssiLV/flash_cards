import { HeaderOnly, HeaderOnly2 } from "~/components/Layouts"

import Home_Page from "~/Pages/Home_Page"
import CreateCards_Page from "~/Pages/CreateCards_Page"
import CardsAdded__Page from "~/Pages/CardsAdded_Page"
//publicRoutes
const publicRoutes = [
    {path: '/', Component: Home_Page},
    {path: '/create-cards', Component: CreateCards_Page, layout: HeaderOnly},
    {path: '/cards-added', Component: CardsAdded__Page, layout: HeaderOnly2}

]


//privateRoutes
const privateRoutes = [

]

export {publicRoutes, privateRoutes}