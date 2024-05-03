import React, { useEffect } from 'react'
import OpenNewWindowBtn from '@/layout/buttons/OpenNewWindowBtn'
import image from '@/public/NewNova.png'
import BigCard from '@/ui/BigCard'
import BigCardExpand from '../components/ui/BigCardExpand'
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
      type: "ExpandBorderBottom"
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

  const fetchData = async () => {
    const query = `
      query {
        allSectionData {
          _id
          title
          body
        }
      }
    `;
  
    try {
      const res = await fetch('https://426kwv4m.api.sanity.io/v2023-08-01/graphql/production/default', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
      });
  
      const { data, errors } = await res.json();
  
      if (errors) {
        console.error(errors);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    fetchData()


  return (
    <div className='py-6 mb-7 px-3 flex flex-row gap-10'>
        <BigCard data={data.data} image={image} />
        <BigCardExpand data={data.data3} image={image} />
        <BigCardExpand data={data.data2} image={image} />

    </div>
  )
}

export default page