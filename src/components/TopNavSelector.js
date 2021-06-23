import react from 'react'
import TopNav from './TopNav'
import TopNavMobile from './TopNavMobile'

const TopNavSelector = () => {
    let width = window.innerWidth
    return (
        width > 500 ? <TopNav /> : <TopNavMobile />
    )
}


export default TopNavSelector