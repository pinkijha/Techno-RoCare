import React from 'react'
import PageHeader from './PageHeader'

const PendingOrders = () => {
  const tableItem = [
    {id:1, orderId: 6019, orderDate: '01-02-2026', partnerName: 'Anurag Singh'},
    {id:2, orderId: 6019, orderDate: '01-02-2026', partnerName: 'D. N. Patel'},
    {id:3, orderId: 6018, orderDate: '01-02-2026', partnerName: 'Aarti Dev'},
    {id:4, orderId: 6016, orderDate: '01-02-2026', partnerName: 'Anurag Singh'},
    {id:5, orderId: 6017, orderDate: '01-02-2026', partnerName: 'D. N. Patel'},
    {id:6, orderId: 6016, orderDate: '01-02-2026', partnerName: 'Aarti Dev'},
    {id:7, orderId: 6015, orderDate: '01-02-2026', partnerName: 'Anurag Singh'},
    {id:8, orderId: 6014, orderDate: '31-01-2026', partnerName: 'D. N. Patel'},
    {id:9, orderId: 6013, orderDate: '31-01-2026', partnerName: 'Aarti Dev'},
    {id:10, orderId: 6012, orderDate: '31-01-2026', partnerName: 'Anurag Singh'},
    {id:11, orderId: 6011, orderDate: '31-01-2026', partnerName: 'Aarti Dev'},
  ]
  return (
    <div className='space-y-4 min-h-screen '>
      <section className='w-full flex text-sm justify-between p-3 bg-white rounded-xs'>
       <PageHeader/>
      </section>

      <section className='bg-white rounded-xs shadow mb-1 p-4 overflow-x-auto space-y-4'>
      <table className='border w-full text-sm border-collapse bg-white shadow-md rounded-lg border-[#D9D9D9] '>
        <thead className='bg-[#D9D9D9]'>
         <tr className=''>
          <th  className='px-4 py-2 text-left'>Sr. No.</th>
          <th  className='px-4 py-2 text-left'>Order Id</th>
          <th  className='px-4 py-2 text-left'>Order Date</th>
          <th  className='px-4 py-2 text-left'>Service Partner Name</th>
          <th  className='px-4 py-2 text-left'>Current Status</th>
          <th  className='px-4 py-2 text-left'>Hire Type</th>
          <th  className='px-4 py-2 text-left'>Credit Required?</th>
          <th  className='px-4 py-2 text-left'>Preview Data</th>
          <th  className='px-4 py-2 text-left'>Action</th>
         </tr>
        </thead>

        <tbody >
       {tableItem.map((item)=>(
        
        <tr key={item.id} className='even:bg-white odd:bg-gray-100'>
          <td className='px-4 py-2'>{item.id}</td>
          <td className='px-4 py-2'>{item.orderId}</td>
          <td className='px-4 py-2'>{item.orderDate}</td>
          <td className='px-4 py-2'>{item.partnerName}</td>
          <td className='px-4 py-2'>Pending</td>
          <td className='px-4 py-2'>Random</td>
          <td className='px-4 py-2'>0</td>
          <td className='px-4 py-2'>
            <button className='cursor-pointer hover:bg-[#25803D] bg-[#7EC1B1] px-4 py-2 text-sm text-white rounded-3xl'>
              Preview</button></td>
          <td className='px-4 py-1'>
            <button className='cursor-pointer hover:bg-[#25803D] bg-[#7EC1B1] px-4 py-2 text-sm text-white rounded-3xl'>
              Decision</button></td>
        </tr>
       ))}
        </tbody>  
      </table>
      <div className='flex justify-between text-sm'>
        <div><p>Showing 1 to 10 of 30 Entries</p></div>
        <div className='flex gap-2'>
          <button className=' bg-white border border-[#7EC1B1] px-4 py-2 text-[#7EC1B1] rounded-2xl'>Previous</button>
          <button className=' bg-[#7EC1B1] px-4 py-2 text-white rounded-xl'>1</button>
          <button className=' bg-[#7EC1B1] px-4 py-2 text-white rounded-xl'>2</button>
          <button className=' bg-[#7EC1B1] px-4 py-2 text-white rounded-xl'>3</button>
          <button className=' bg-white border border-[#7EC1B1] px-4 py-2 text-[#7EC1B1] rounded-2xl'>Next</button>
        </div>
      </div>
      </section>
    </div>
  )
}

export default PendingOrders
