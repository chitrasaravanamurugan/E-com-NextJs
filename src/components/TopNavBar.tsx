import React from 'react'

export const TopNavBar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
                <div className='navbar__link relative'>HOME</div>
                <div className='navbar__link relative'>CATEGORIES</div>
                <div className='navbar__link relative'>{`MEN'S`}</div>
                <div className='navbar__link relative'>{`WOMEN'S`}</div>
                <div className='navbar__link relative'>SHOES</div>
                <div className='navbar__link relative'>CLOTHING</div>
                <div className='navbar__link relative'>ACCESSORIES</div>
                <div className='navbar__link relative'>FIND US</div>
                <div className='navbar__link relative'> OFFERS</div>
            </div>
        </div>
    </div>
  )
}
