import {  useContext,useEffect ,useState } from "react";
import DiscordImg from "../assets/discord.jpeg"
import coverImage from "../assets/download.jpeg"
import ProfiledImage from "../assets/discord.jpeg"
import { UserContext } from "../UserAuth/User";
import { SlLike } from "react-icons/sl";
import { AiOutlineDislike } from "react-icons/ai";
import {  FaRegComment } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
const Profile=()=>{

  const context=useContext(UserContext)
    if(!context){
      throw new Error
    }
    const {user}=context
    const [ProfileImage,setProfileImage]=useState<string>("")
    const [CoverImage,setCoverImage]=useState<string>("")
    const [Newusername,setUserName]=useState<string>("")
    const [Bio,setBio]=useState<string>("")
    const [githubLink,setGitHubLink]=useState<string>("")
    const [twitterLink,settwitterLink]=useState<string>("")
    const [websiteLink,setwebsiteLink]=useState<string>("")
    const [isSaveing,setSaving]=useState<boolean>(false)
    const [links,setlinks]=useState<{ 
        twitter?: string; 
        github?:  string; 
        website?: string
    }[]>([{}])
    console.log(()=>{
        setProfileImage(ProfileImage)
        setCoverImage(CoverImage)
    }
    )
    useEffect(()=>{
      const storename=localStorage.getItem("username")
      const storeBio=localStorage.getItem("Bio")
      if (storename) setUserName(storename);
      if (storeBio) setBio(storeBio);
    },[])
    console.log("All libks",links)
    // function for the getall Link
    const getallLink=()=>{
           const alllinks=[
             {twitter:twitterLink},
             {github:githubLink},
             {website:websiteLink},
           ]
           localStorage.setItem("Links",JSON.stringify(alllinks))
            setlinks(alllinks)   
    } 
    const itemList=[
    { label: "Twitter", value: twitterLink, setValue: settwitterLink, placeholder: "Twitter link" },
    { label: "GitHub", value: githubLink, setValue: setGitHubLink, placeholder: "GitHub link" },
    { label: "Portfolio", value: websiteLink, setValue: setwebsiteLink, placeholder: "Portfolio link" },  
    ] 
    //- temp function to save the Infroamtion
    const getallInfro=(event:React.FormEvent)=>{
      event.preventDefault();
      try{
        setSaving(true)
        setUserName(Newusername)
        setBio(Bio)
        localStorage.setItem("username",Newusername)
        localStorage.setItem("Bio",Bio)
        getallLink();
        setBio("")
        setUserName("")
        setGitHubLink("")
        settwitterLink("")
        setwebsiteLink("")
      }catch(e){
        console.log("Error at Saving",e)
      }finally{
        setSaving(false)
      }
    } 
    const uppercaseletter=(text:string|null)=>{
      if (!text) return "";
      if(text.charAt(0)===text.charAt(0).toUpperCase()){
        return text
      }else{
        return text.charAt(0).toUpperCase() + text.slice(1);
  
      }
    }
    const localDate=new Date().toLocaleDateString();
    return (
        <section className="py-8 text-center border-2 ">
         <div className="items-center flex flex-col justify-center py-2 gap-2   ">
            <form onSubmit={getallInfro} className="w-[710px]  md:w-[900px]  ">
                <h1 className="text-3xl  p-1  text-start px-8 font-semibold font-dm">Profile</h1>
                 <div className="p-2 sticky top-0  z-30 shadow-sm bg-white m-2 ">
                    <h2 className="text-start font-bold text-md  text-[12px]  sm:text-[16px] md:text-[18px]">Profile Picture</h2>
                    <p  className="text-start text-[12px] sm:text-[14px] md:text-[16px] font-medium">Upload a picture to make your profile stand out 
                        and let people recognize your comments and contributions easily!</p>
                 </div>
                 <div className="relative rounded-xl px-2  h-32 ">
                 <div className="relative   w-full h-20 sm:h-36 md:h-44 lg:h-52 ">
                     <input type="file"  id="coverImageInput" className="hidden" accept="image/*" />
                     <img src={CoverImage || coverImage}  className="object-cover w-full h-20 sm:h-32  md:h-32 rounded-r-2xl"/>
                     <label htmlFor="coverImageInput" 
                       className="absolute inset-0  bg-opacity-50 opacity-0 group-hover/cover:opacity-100 flex items-center justify-center text-black cursor-pointer bg-gray-700 transition-opacity duration-300">
                       <span>Change Cover</span>
                      </label>
                    </div>
                    <div className="absolute left-0 md:left-0 -top-[25.7px] sm:-top-[42.5px] transform translate-y-1/3">
                    <div className="relative w-20 h-20 sm:w-32 sm:h-32  md:w-32 md:h-32 lg:w-32 lg:h-32 rounded-r-xl   overflow-hidden group/profile">
                   <input type="file"  id="profileImageInput"    className="hidden"   accept="image/*" />
                   <img   src={ProfileImage || DiscordImg}  className="object-cover w-full h-full"   alt="Profile" />
                   <label  htmlFor="profileImageInput" 
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover/profile:opacity-100 flex items-center justify-center text-white text-xs cursor-pointer transition-opacity duration-300">
                   <span>Edit</span>
                  </label>
                 </div>
                </div>
            </div>
            <div className=" sm:mt-4  md:mt-5 border-2  rounded-md p-3">
            <div className=" px-3 py-1 flex flex-col gap-3  text-start  ">
             <div className="flex justify-between  items-center gap-2">
             <h2 className="  font-dm   text-[12px] sm:text-[16px]  md:text-[18px] font-bold">Account Infromation</h2>
            </div>
               <input type="text" value={Newusername}  onChange={(e)=>setUserName(e.target.value)}
               placeholder="Username"  className="md:w-1/2  sm:w-96  rounded-lg  outline-none font-dm    w-full  bg-gray-200 font-medium px-2 py-1"/>
               <h3 className="font-dm font-bold">Bio</h3>
               <textarea rows={3} value={Bio}  onChange={(e)=>setBio(e.target.value)}
               placeholder="Bio"  className="md:w-1/2  sm:w-96 w-full  rounded-lg  outline-none font-dm    bg-gray-200 font-medium px-2 py-1"/>
               <div className=" rounded-md px-3 py-1">
                  <h1 className="text-xl  p-1  text-start px-3 font-bold font-dm text-[12px]   sm:text-[16px] md:text-[22px] ">Profile Social Links</h1>
                   <p  className="text-start px-3 font-dm  -slate-200  text-[12px]  sm:text-[16px] md:text-[18px] ">Add your social media profiles so others 
                   can connect with you and you can grow your network!</p>
                   <div className="border-2 mt-2 py-4 flex flex-col w-full  sm:w-[480px] md:w-[520px] gap-4 px-4 rounded-md">
                       {itemList.map((value,index)=>(
                        <div  key={index} className="flex items-center gap-4">
                        <label className="font-dm text-gray-700 font-medium min-w[80px]">{value.label}</label>
                        <input type="text"    placeholder={value.placeholder} value={value.value} onChange={(e)=>value.setValue(e.target.value)}
                          className="flex-1 p-2 rounded-md border-2 outline-none" />
                        </div>
                       ))}
                  </div>
               </div>
               <button type="submit" className="bg-black  hover:bg-slate-700 transition-all duration-100 w-28 px-6 text-center text-white font-dm font-semibold rounded-md py-1">
               {isSaveing ? (
                <h2>Saving</h2>
              ):(
              <h2>Save</h2>
              )}
              </button>
               </div>
            </div>    
            </form>
          {/*For the all Post of user*/}
          <div className="border-2 w-[710px]  md:w-[900px] rounded-md ">
            <h1 className="text-start px-4 font-dm font-semibold py-2 underline">Post Section</h1>
            <div className="flex flex-col     border-2 px-2  m-3 gap-2 shadow-sm rounded-md ">
            <div className="flex flex-row justify-between p-1 items-center gap-2">
                <div className="flex flex-row items-center  text-gray-800 font-dm font-semibold">
                 <img src={ProfiledImage} className="object-cover rounded-full w-9 h-9" />
                   <div className="mt-4  flex-col flex  ">
                   <span className="text-[12px] ml-1 font-extrabold">{uppercaseletter(user?.username)}</span>
                   <p className="text-[9px] font-bold">{localDate}</p>
                   </div>
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
            
          </div>
        </div>
</section>
    )
}
export default Profile;