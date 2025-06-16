import React, { useEffect, useState } from 'react';

const Faq = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('../../../public/faq.json').then(res => res.json())
            .then(data => {
                setData(data)
            })
    });
    console.log(data)
    return (
        <div className='w-11/12 mx-auto bg-amber-100 p-3'>
            <h2 className='text-2xl font-bold text-center'>FAQ Section</h2>
            {
                data.map(dat => 
                    <div className='max-w-6xl mx-auto border m-8 p-7 rounded-2xl'>
                        <h1>Question: {dat.q1}</h1>
                        <h2>Answer: {dat.a1}</h2>

                    </div>
               )

            }
        </div>
    );
};

export default Faq;