import React from 'react'

const Footer = () => {
  return (
    <div>
     <div className="flex flex-col bg-black text-white  h-auto justify-around  items-center">
      <div className="flex flex-col bg-black text-white w-[90%]  justify-around  items-center  md:flex-row md: h-auto">
       
      
       <div>
        <ul>
            <li>
                <h1 className='text-2xl mt-3'>Company</h1>
            </li>
            <div className="py-3 text-xl"><li><button>About</button></li>
            <li><button>Blog</button></li>
            <li><button>Jobs</button></li>
            <li><button>Parterns</button></li></div>
            
        </ul>
       </div>
       <div>
       <ul>
            <li>
                <h1 className='text-2xl mt-3'>Solutions</h1>
            </li>
            <div className="py-3 text-xl"><li><button>Marketing</button></li>
            <li><button>Analytics</button></li>
            <li><button>Commerce</button></li>
            <li><button>Insights</button></li>
            <li><button>Support</button></li></div>
            
        </ul>
       </div>
       <div>
       <ul>
            <li>
                <h1 className='text-2xl mt-3'>Documentation</h1>
            </li>
            <div className="py-3 text-xl"><li><button>Guides</button></li>
            <li><button>API Status</button></li>
         </div>
            
        </ul>
       </div>
       <div>
       <ul>
            <li>
                <h1 className='text-2xl mt-3'>Legal</h1>
            </li>
            <div className="py-3 text-xl"><li><button>Claim</button></li>
            <li><button>Privacy</button></li>
            <li><button>Terms</button></li>
           </div>
            
        </ul>
       </div>
       </div>
       <div className="flex justify-center items-center">
        <div>
          <div className='flex flex-col justify-center items-center my-2 pb-3'>
            <p>@2023 My Company.All rights reserved</p>
            <p>Made with Love by Me.</p>
            <p>Icons by Freepik From www.flaticon.com</p>
          </div>
        </div>
       </div>
      
     </div>
    </div>
  )
}
 
export default Footer