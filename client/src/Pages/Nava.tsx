import { Link } from "react-router";
import { useContext,  useState } from "react";
import { UserContext } from "../UserAuth/User";
import { PenTool,LogOut ,LoaderCircle } from "lucide-react";
import { CgMenu } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import listItems from "./Links/navalist";

function Nava() {
  const [IsOpen, setIsOpen] = useState<boolean>(false);
  const [IsLodaing,setLoading]=useState<boolean>(false)
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("User name is Provide ");
  }

  // Logout route
  
  const logoutuser=async()=>{
   try{
    setLoading(true)
   const response=await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/logout`,{
    method:"POST",
    credentials:"include"
   })
    if(!response.ok){
      console.log("Logout Process Fail")
    }else{
      console.log("Logout succcessfull")
      setTimeout(()=>{
        window.location.href = "/";
      },3000)
    }
   }catch(error){
     console.log("Error",error)
   }
  } 
  const { user } = context;
  const ToggleMenuBar = () => setIsOpen((prev) => !prev);
  return (
    <section className={` bg-navabar  sticky top-0 z-30   w-full `}>
      <div className=" py-1 px-2 flex relative items-center   boder-2 justify-between">
        <Link  to="/"
          className=" items-center  text-white hover:bg-gradient-to-t from-slate-100 via-slate-200 to-slate-300 md:text-xl hover:shadow-md   rounded-md py-1 hover:text-writly flex gap-1 text-[16px] font-semibold font-dm px-4 whitespace-nowrap">
          <PenTool size={20} /> Writly
        </Link>
        <div className="hidden md:flex  items-center gap-4">
          {user ? (
            <div onClick={ToggleMenuBar}
            className={`cursor-pointer flex items-center gap-2 px-4 py-1.5 rounded-lg`}>
              <img src={user.profileImage} className="object-cover w-7 h-7 rounded-lg" />
            </div>
          ) : (
            <div className="flex items-center gap-3 px-3">
              <Link to="/login" className="text-[16px]  text-white  hover:bg-zinc-600  hover:bg-opacity-30 font-semibold px-6 py-1 rounded-md hover:bg- transition">
                Login
              </Link>
              <Link to="/register" className="text-[16px] font-semibold text-white px-6 py-1 rounded-md hover:bg-zinc-600  hover:bg-opacity-30 transition">
                Register
              </Link>
            </div>
          )}
        </div>
        
    <div className="md:hidden   flex  items-center gap-6  p-1 rounded-full">
          <button onClick={ToggleMenuBar} className="flex items-center">
            {IsOpen ? (
              <IoIosClose size={28} className=" text-white transition-transform duration-300 hover:rotate-180 hover:scale-110"  />
            ) : (
              <CgMenu size={28} className=" text-white transition-transform duration-300 hover:rotate-180 hover:scale-110"  />
            )}
          </button>
        </div>
        {IsOpen && (
          <div className={`absolute   md:hidden right-0 w-full  rounded-l-md  min-h-screen  top-[2.5rem]   flex  z-20 bg-maincolor   border-zinc-700 shadow-md  text-white    sm:w-72  md:w-64  p-2 transition-all duration-300 ease-in-out`}>
            {user ? (
              <div className="flex flex-col   w-full  gap-2 px-2 py-3">
                <div className=" relative w-full  h-32 rounded">
                  <img src={user?.coverImage} className=" cursor-pointer object-cover w-full h-full rounded" />
                  <img src={user?.profileImage} className=" cursor-pointer absolute top-[4.5rem]  border-[3px]  border-slate-200 w-20 aspect-square  rounded-full  object-cover " />
                </div>
                <div className=" flex mt-5  items-start   justify-start  bg-navabar rounded-md px-2 py-1 hover:bg-[#2a2929] transition-colors duration-200  cursor-pointer">
                <span className="font-mono font-medium  text-start  text-lg">{user.username}</span>
                </div>
                <div className="flex p-1 flex-col gap-8 mt-5 ">
                  {listItems.map((item,idx)=>(
                    <Link to={typeof item.link==="function"? item.link(user?.username)||"":item.link}key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#2a2929] transition-colors duration-200" >
                    <span className="text-white text-xl">{item.icon}</span>
                    <span className="text-white font-medium text-[15px] ">{item.label}</span>
                  </Link>
                  ))}
                  <button 
                  onClick={logoutuser}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg  text-red-600/70 hover:text-white  hover:bg-red-500/50 transition-colors duration-200">
                   {IsLodaing ? 
                   <span className="flex gap-2  items-center">Logout<LoaderCircle className="animate-spin" /></span>
                   :
                   <span className="flex gap-2  items-center"><LogOut className="" /> Logout</span>
                      }</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4  w-full px-4 py-2">
                <Link to="/login" className="text-[16px]  rounded-md  w-full text-white  hover:bg-zinc-600  hover:bg-opacity-30 font-semibold  px-2 py-2">Login</Link>
                <Link to="/register" className=" text-[16px]  w-full  rounded-md  text-white  hover:bg-zinc-600  hover:bg-opacity-30 font-semibold  px-2 py-2">Register</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Nava;
