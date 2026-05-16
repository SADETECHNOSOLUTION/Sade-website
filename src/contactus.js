import { Icon } from "@iconify/react/dist/iconify.js"

const ContactUs = ()=>{
    return(
         <div className="w-full px-16 py-12 bg-dark medium:flex-row flex flex-col justify-center">
  <div className="flex flex-col gap-16 w-full">
          <div className="flex flex-col items-center w-full pt-12">
        <span className="bg-dark text-white text-3xl font-[700] text-center px-16">
          Contact Us
        </span>
        <div className="w-20 h-0.5 bg-cta mt-2 rounded-full" />
      </div>
    <div className="medium:flex-row flex flex-col   items-stretch gap-16 justify-center">
      {/* Title */}

            <div className="relative w-full med:w-1/4 bg-[#] rounded-xl pt-14 p-4 medium:h-28 flex flex-col items-center justify-start text-center gap-4 shadow-md border border-cta">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cta p-4 rounded-full shadow-md border-4 border-white">
   <Icon icon="streamline-plump:web" width="24" height="24"  style={{color: "#fff"}} />
        </div>
        <p className="text-base text-white font-[600] leading-relaxed">
sadetechnosolutions.com
        </p>
      </div>
      
      {/* Card 1 */}
      <div className="relative w-full med:w-1/4 bg-[#] rounded-xl pt-14 p-4 medium:h-28 flex flex-col items-center justify-start text-center gap-4 shadow-md border border-cta">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cta p-4 rounded-full shadow-md border-4 border-white">
<Icon icon="material-symbols:mail" width="24" height="24"  style={{color: '#fff'}} />
        </div>
        <p className="text-base text-white font-[600] leading-relaxed">
sadetechnosolutions@gmail.com
        </p>
      </div>

      {/* Card 2 */}
      <div className="relative w-full med:w-1/4 bg-[#] rounded-xl pt-14 p-4 medium:h-28 flex flex-col items-center justify-start text-center gap-4 shadow-md border border-cta">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cta p-4 rounded-full shadow-md border-4 border-white">
      <Icon icon="iconoir:phone-solid" width="24" height="24"  style={{color:'#fff'}} />
        </div>
        <p className="text-base text-white font-[600] leading-relaxed">
        +91-9003456349
        </p>
      </div>

      {/* Card 3 */}
      <div className="relative w-full med:w-1/4 bg-[#] rounded-xl pt-14 p-4 medium:h-28 flex flex-col items-center justify-start text-center gap-4 shadow-md border border-cta">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cta p-4 rounded-full shadow-md border-4 border-white">
      <Icon icon="weui:location-filled" width="24" height="24"  style={{color: '#fff'}} />
        </div>
        <p className="text-base text-white font-[600] leading-relaxed">
No 59/8 Madras Building, seshachalam street, Saidapet Chennai -600015
        </p>
      </div>


    </div>
  </div>
</div>
    )
}

export default ContactUs