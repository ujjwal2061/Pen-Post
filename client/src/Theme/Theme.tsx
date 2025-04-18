import { ReactNode, createContext, useState ,useEffect} from "react"

const Default_Them:string='system'

export const themeoptions:string[]=["light","dark","system"] as const


export type Theme=(typeof themeoptions)[number]

type Initalstate={
    theme:Theme
    changeTheme:(selcetTheme:Theme)=>void;
}
const initalstate:Initalstate={
    theme:Default_Them,
    changeTheme:()=> {}
}
interface ContextProps{
    children:ReactNode
}

const ThemeContex=createContext(initalstate);
export const ThemeProvider=({children}:ContextProps)=>{
    const [theme ,setTheme]=useState<Theme>(()=>{
        const savedTheme=localStorage.getItem("theme") as Theme
         return savedTheme || Default_Them
        })
    useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);
    

    const value={
        theme,
        changeTheme:(selcetTheme:Theme)=>{
            setTheme(selcetTheme)
        }
    }
    return(
        <ThemeContex.Provider value={value}>
               {children}
        </ThemeContex.Provider>
    )
}
export {ThemeContex}