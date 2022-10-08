import React from 'react';
import "../Td.css";

function Td({ item }) {
    return (
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='title'>{item.id}</td>
            <td className='name'>{item.title}</td>
            {/* <td className='px-4 py-3'>{item.email}</td>
            <td className='px-4 py-3'>{item.phone}</td>
            <td className='px-4 py-3'>{item.website}</td>      */}
        </tr>
        </>
    );
}

export default Td;