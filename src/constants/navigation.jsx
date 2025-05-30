import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiSolidCameraMovie } from "react-icons/bi";
import {IoSearchOutline} from 'react-icons/io5'

export const navigation =[
    {
        label:'TV',
        link:'tv',
        icon:<PiTelevisionSimpleBold/>
    },
    {
        label:'Movies',
        link:'movie',
        icon: <BiSolidCameraMovie/>
    }
]

export const MobileNav=[
    {
        label:'Home',
        link:'/',
        icon:<MdHomeFilled/>
    },
    ...navigation,
    {
        label:'Search',
        link:'search',
        icon:<IoSearchOutline/>
    }
]