import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1,name:'Free',price:0,benefits:['lifetime free','local deals','unlimited deals','fantastic deals','crazy deals']},
        {id:1,name:'Regular',price:4.99,benefits:['everything on free','local deals','unlimited deals','fantastic deals','crazy deals']},
        {id:1,name:'Premium',price:9.99,benefits:['everything on regular','local deals','unlimited deals','fantastic deals','crazy deals']},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals Of The Town</h1>
            
            <div className='grid md:grid-cols-3 gap-3 mt-8 mb-5 ml-3 mr-3'>
                {
                    pricingOptions.map(option => <PricingOption key={option.id} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;