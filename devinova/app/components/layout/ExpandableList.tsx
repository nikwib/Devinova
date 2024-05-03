import React from 'react'
import Expandable from '../ui/Expand';

const ExpandableList = ({
    data
  }: {
    data: any;
  }) => {
  return (
    <div className='w-full flex flex-col md:flex-row px-14 py-32 gap-20'>
        <Expandable data={data.data} textColor={"text-primary"} />
        <Expandable data={data.data2} textColor={"text-secondary"} />
        <Expandable data={data.data3} textColor={"text-notification"} />
    </div>
  )
}

export default ExpandableList