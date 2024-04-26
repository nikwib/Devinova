import React from 'react'
import OpenNewWindowBtn from '@/layout/buttons/OpenNewWindowBtn'
import image from '@/public/NewNova.png'
import BigCard from '@/ui/BigCard'
const data = {
    data: {
      subHeadAbove: "subhead above",
      title: "Creative",
      subHead: "Subhead",
      body: "In today's fast-paced world, effective communication is more crucial than ever. Whether it's conveying ideas, building relationships, or driving business success, clear and compelling communication is key. At our company, we understand the power of words to inspire, inform, and engage. With our team of skilled professionals, we strive to deliver communication solutions tailored to your needs. From crafting captivating content to developing impactful strategies, we are committed to helping you achieve your goals",
      button: <OpenNewWindowBtn btnText="Open" />,
    },
    data2: {
      subHeadAbove: "subhead above",
      title: "Curious",
      subHead: "Subhead",
      body: "In today's fast-paced world, effective communication is more crucial than ever. Whether it's conveying ideas, building relationships, or driving business success, clear and compelling communication is key. At our company, we understand the power of words to inspire, inform, and engage. With our team of skilled professionals, we strive to deliver communication solutions tailored to your needs. From crafting captivating content to developing impactful strategies, we are committed to helping you achieve your goals",
      button: <OpenNewWindowBtn btnText="Open" />,
    },
    data3: {
      subHeadAbove: "subhead above",
      title: "Friendly",
      subHead: "Subhead",
      body: "Whether it's conveying ideas, building relationships, or driving business success, clear and compelling communication is key. At our company, we understand the power of words to inspire, inform, and engage. With our team of skilled professionals, we strive to deliver communication solutions tailored to your needs. From crafting captivating content to developing impactful strategies, we are committed to helping you achieve your goals",
      button: <OpenNewWindowBtn btnText="Open" />,
    },
  }
  
const page = () => {
  return (
    <div className='py-6 mb-7'>
        <BigCard  data={data.data} image={image} />

    </div>
  )
}

export default page