import React from 'react'
import  "./Testimonial.css"
import { Swiper,SwiperSlide } from 'swiper/react'
import { Profiler } from 'react'
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonial = () => {
    const clients =[
        {
            img: profilePic1,
            review:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero porro dolores modi perspiciatis iusto cupiditate repellat accusantium voluptas consequatur? Autem adipisci beatae placeat sit culpa facere tempore, est cupiditate commodi maiores cumque odio ipsam eum possimus ipsum eos voluptas nihil earum nam dicta praesentium hic eaque? Culpa sunt dolorum sequi.",
        },
        {
            img: profilePic2,
            review:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero porro dolores modi perspiciatis iusto cupiditate repellat accusantium voluptas consequatur? Autem adipisci beatae placeat sit culpa facere tempore, est cupiditate commodi maiores cumque odio ipsam eum possimus ipsum eos voluptas nihil earum nam dicta praesentium hic eaque? Culpa sunt dolorum sequi.",
        },
        {
            img: profilePic3,
            review:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero porro dolores modi perspiciatis iusto cupiditate repellat accusantium voluptas consequatur? Autem adipisci beatae placeat sit culpa facere tempore, est cupiditate commodi maiores cumque odio ipsam eum possimus ipsum eos voluptas nihil earum nam dicta praesentium hic eaque? Culpa sunt dolorum sequi.",
        },
        {
            img: profilePic4,
            review:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero porro dolores modi perspiciatis iusto cupiditate repellat accusantium voluptas consequatur? Autem adipisci beatae placeat sit culpa facere tempore, est cupiditate commodi maiores cumque odio ipsam eum possimus ipsum eos voluptas nihil earum nam dicta praesentium hic eaque? Culpa sunt dolorum sequi.",
        },
    ];
  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
     <span>Clients always get</span>
     <span>Exceptional Work</span>
     <span>from me.</span>
     <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
     <div className="blur t-blur1" style={{background: "skyblue"}}></div>
       </div>
    <Swiper
    modules={[Pagination]}
    slidesPreview={1}
    pagination={{clickable: true}}
    >
    {clients.map((client,index)=>{
        return(
        <SwiperSlide key={index}>
            <div className="div testimonial">
            <img src={client.img} alt="" />
             <span>{client.review}</span>
            </div>
        </SwiperSlide>
            )
        })}
</Swiper>
    </div>
  )
}

export default Testimonial
