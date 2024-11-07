import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Sample data for testimonials
const testimonials = [
  {
    quote:
      "The care I received at Gridley Post Acute was exceptional. The staff truly went above and beyond to ensure my comfort and well-being.",
    name: 'John',
    avatar: '/images/staff2.png', // Replace with the path to the avatar image
  },
  {
    quote:
      "I was so impressed by the professionalism and compassion of the entire team. They made a difficult time so much easier for our family.",
    name: 'Sarah',
    avatar: '/images/staff2.png',
  },
  {
    quote:
      "Gridley Post Acute has a wonderful atmosphere. The facility is clean, and the staff is always friendly and attentive.",
    name: 'Michael',
    avatar: '/images/staff2.png',
  },
  {
    quote:
      "From the moment I arrived, I felt cared for and respected. I can't thank the staff enough for their kindness and dedication.",
    name: 'Emily',
    avatar: '/images/staff2.png',
  },
  {
    quote:
      "My rehabilitation at Gridley Post Acute was life-changing. The therapists are highly skilled and truly care about your progress.",
    name: 'Robert',
    avatar: '/images/staff2.png',
  },
  {
    quote:
      "The activities program kept my spirits up during my stay. There is something for everyone, and it made my recovery a more positive experience.",
    name: 'Linda',
    avatar: '/images/staff2.png',
  },
  {
    quote:
      "I felt like part of a family here. Everyone from the nurses to the administrative staff made me feel at home.",
    name: 'William',
    avatar: '/images/staff2.png',
  },
  {
    quote:
      "Their post-acute care services are outstanding. I felt safe, supported, and encouraged every step of the way.",
    name: 'Karen',
    avatar: '/images/staff2.png',
  },
  {
    quote:
      "Choosing Gridley Post Acute was the best decision we made for my father's recovery. He was treated with dignity and care.",
    name: 'Jessica',
    avatar: '/images/staff2.png',
  },
];

const TheSwiper: React.FC = () => {
  return (
    
      <Swiper
        style={swiperStyles}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >

        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} >
            <div style={{ textAlign: 'center', marginBottom: '10px', }}>
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={100}
                height={100}
                style={{ borderRadius: '50%' }} // Make the image round
              />
            </div>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '5px', textAlign: 'center' }}>
              "{testimonial.quote}"
            </p>
            <span style={{ display: 'block', fontWeight: 'bold', fontSize: '1rem', color: '#000', textAlign: 'center' }}>
              - {testimonial.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
   
  );
};

const swiperStyles: React.CSSProperties & { [key: string]: string } = {
  '--swiper-navigation-color': '#fff',
  '--swiper-pagination-color': '#fff',
  zIndex: '0',
 
};

export default TheSwiper;
