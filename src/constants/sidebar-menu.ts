import DashboardIcon from '../assets/icons/dashboard.svg'

export type SidebarMenuItem = {
    id: number,
    icon: any,
    path: string,
    title: string
}

const sidebar_menu: SidebarMenuItem[] = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {

        id: 2,
        icon: DashboardIcon,
        path: '/items',
        title: 'Items',
    },
]

export default sidebar_menu
