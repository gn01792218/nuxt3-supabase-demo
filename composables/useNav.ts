import { Nav } from '@/types/gloable'

export default function useNav() {

  const navList = ref<Nav[]>([
    {
        title:"Home",
        routeName:"/",
        show:true,
    },
    {
        title:"My Profile",
        routeName:'/profile',
        show:true,
    },
  ])

  return {
    //data
    navList,
    //methods
  };
}