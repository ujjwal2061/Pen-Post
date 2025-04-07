import { useContext } from "react";
import ProfiledImage from "../assets/discord.jpeg"
import { UserContext } from "../UserAuth/User";
import { SlLike } from "react-icons/sl";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
const Blog=()=>{
  
  const context=useContext(UserContext)
  if(!context){
    throw new Error
  }
  const {user}=context

  const uppercaseletter=(text:string|null)=>{
    if (!text) return "";
    if(text?.charAt(0)===text?.charAt(0).toUpperCase()){
      return text
    }else{
   const upperletter=user?.charAt(0).toUpperCase()+text.slice(1)
     return upperletter
    }
  }

  const linkslist=localStorage.getItem("Links")||"{}"
  const newlink=JSON.parse(linkslist)
  console.log(newlink)
  // const todaydate=new Date()
  // const isoString=new Date().toISOString()
  const localDate=new Date().toLocaleDateString();
    return (
        <section className="min-h-screen ">
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] px-5 py-2">
          <div className="  hidden md:block  md:col-span-1   px-5    md:px-7  lg:px-10 py-6 ">
          <div className="   border-2  items-center shadow-sm  rounded-md">
            <div className="flex   items-center p-2  justify-between w-36 gap-2 ">
              <img src={ProfiledImage} className="object-cover w-20 h-20 rounded-full" />
               <p className="font-dm font-semibold mt-12">{uppercaseletter(user)}</p>
            </div>
            <div className="flex  flex-col gap-2 px-4  py-3 ">
              <h2 className="flex justify-between bg-slate-100 px-3  font-bold rounded-md py-1 ">Post
                <span className="font-semibold">12</span>
              </h2>
              <h3  className="flex justify-between bg-slate-100 px-3  font-bold rounded-md py-1">Followers
                <span className="font-semibold">2k</span>
              </h3>
              <h3  className="flex justify-between bg-slate-100 px-3  font-bold rounded-md py-1">Folowing
                <span className="font-semibold">1,024</span></h3>
            </div>
          </div>
          </div>
          {/*Post Section*/}
          <div className=" col-span-3 md:col-span-1 w-full flex flex-col justify-start md:h-[calc(100vh-1rem)] overflow-y-auto scroll-hidden">
            <div className="flex flex-wrap md:flex-row gap-3  md:justify-start justify-center py-3 px-4  ">
              <h1 className="bg-black px-4  flex rounded-md text-white text-[14px] items-center">Latest</h1>
              <h1 className="bg-slate-100 px-4  flex rounded-md  text-[14px] items-center">Popular</h1>
              <h1 className="bg-slate-100 px-4  flex rounded-md  text-[14px] items-center">Follwing</h1>
            </div>
            <div className="flex flex-col border-2 px-2 py-2  m-3 gap-2 shadow-sm rounded-md ">
              <div className="flex flex-row p-1 items-center gap-2">
                <img src={ProfiledImage} className="object-cover rounded-full w-9 h-9" />
                <div className="flex flex-col text-gray-800 font-dm font-semibold">
                  <span className="text-[10px]">{uppercaseletter(user)}</span>
                  <p className="text-[10px]">{localDate}</p>
                </div>
              </div>
               <div className="px-2 ">
                <p className="text-[15px] text-start font-dm ">The Very First Post on Bolg-Hub</p>
               </div>
              {/**Image section */}
               <div className="w-full border-2  h-56 overflow-hidden rounded-md">
                <img src={ProfiledImage} 
                loading="lazy"
                className="w-full h-full object-cover" />
               </div>
              <div className="flex flex-row p-2 items-center border-t-2  rounded-sm  gap-2   justify-between">
                <div className="flex flex-row  py-1  gap-3 justify-center items-center  text-center">
                <span className="flex gap-1 text-sm items-center cursor-pointer">
                <SlLike  size={18}/>
                  <h3 className="font-semibold mt-1 ">10k</h3>
                </span>
                <span className="flex gap-1 text-sm items-center cursor-pointer">
                <AiOutlineDislike size={19} className="mt-1"  />
                <h3 className="font-semibold mt-1 ">0</h3>
                </span>
                <span className="flex items-center text-sm gap-1 cursor-pointer">
                <FaRegComment  size={19}/>
                 <h3 className="font-semibold ">200</h3>
                </span>
                </div>
                <span className="flex text-sm cursor-pointer ">
                <CiBookmarkPlus  size={20}/>
                </span>
              </div>
            </div>
            {/**Will be Remove it  */}
            <div className="flex flex-col     border-2 px-2  m-3 gap-2 shadow-sm rounded-md ">
              <div className="flex flex-row p-1 items-center gap-2">
                <img src={ProfiledImage} className="object-cover rounded-full w-9 h-9" />
                <div className="flex flex-col text-gray-800 font-dm font-semibold">
                  <span className="text-[10px]">{uppercaseletter(user)}</span>
                  <p className="text-[10px]">{localDate}</p>
                </div>
              </div>
              <div className="px-2 ">
                <p className="text-[15px] text-start font-dm ">
                  Just publicshed my lastest article on React hooks and State management</p>
               </div>
              {/**Image section */}
              <div className=" w-full h-56 rounded-md border-2 overflow-hidden">
                <img src={ProfiledImage} className="object-cover rounded-md w-full h-full " />
              </div>
              <div className="flex flex-row px-2 rounded-sm   border-t-2 items-center gap-2   justify-between">
                <div className="flex flex-row  py-1  gap-3 justify-center items-center  text-center">
                <span className="flex gap-1 text-sm items-center cursor-pointer">
                <SlLike  size={18}/>
                  <h3 className="font-semibold mt-1 ">5k</h3>
                </span>
                <span className="flex gap-1 text-sm items-center cursor-pointer">
                <AiOutlineDislike size={19} className="mt-1"  />
                <h3 className="font-semibold mt-1 ">80</h3>
                </span>
                <span className="flex items-center text-sm gap-1 cursor-pointer">
                <FaRegComment  size={19}/>
                 <h3 className="font-semibold ">150</h3>
                </span>
                </div>
                <span className="flex text-sm cursor-pointer ">
                <CiBookmarkPlus  size={20}/>
                </span>
              </div>
            </div>
             {/* *Will be Remove it  */}
             <div className="flex flex-col   m-3 gap-2 border-2 px-2  shadow-sm rounded-md ">
              <div className="flex flex-row p-1 items-center gap-2">
                <img src={ProfiledImage} className="object-cover rounded-full w-9 h-9" />
                <div className="flex flex-col text-gray-800 font-dm font-semibold">
                  <span className="text-[10px]">{uppercaseletter(user)}</span>
                  <p className="text-[10px]">{localDate}</p>
                </div>
              </div>
              <div className="px-2 ">
                <p className="text-[15px] text-start font-dm ">
                Here's my taken on the future of AI and machine learing in 2025</p>
               </div>
              {/**Image section */}
              {/* <div className="flex border-2  rounded-md px-2 w-full">
                <img src={ProfiledImage} className="object-cover rounded-md w-96 h-44 " />
              </div> */}
              <div className="flex flex-row px-2 rounded-sm gap-3   border-t-2  items-center  justify-between">
                <div className="flex flex-row  py-1   gap-3 justify-center items-center  text-center">
                <span className="flex gap-1 text-sm items-center cursor-pointer">
                <SlLike  size={18}/>
                  <h3 className="font-semibold mt-1 ">5k</h3>
                </span>
                <span className="flex gap-1 text-sm items-center cursor-pointer">
                <AiOutlineDislike size={19} className="mt-1"  />
                <h3 className="font-semibold mt-1 ">80</h3>
                </span>
                <span className="flex items-center text-sm gap-1 cursor-pointer">
                <FaRegComment  size={19}/>
                 <h3 className="font-semibold ">150</h3>
                </span>
                </div>
                <span className="flex text-sm cursor-pointer ">
                <CiBookmarkPlus  size={20}/>
                </span>
              </div>
            </div>
              
          </div>
          <div className="md:col-span-1 hidden  text-center  md:block">
            <h1 className="font-dm font-semiboldt">Comming Sonn !</h1>
            </div>
        </div>

      </section>
    )
}
export default Blog;