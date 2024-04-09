import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs'

export const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-1'>
                    <div className='header_top__icon_wrapper'>
                        <BsFacebook />
                    </div>
                    <div className='header_top__icon_wrapper'>
                        <BsTwitter />
                    </div>
                    <div className='header_top__icon_wrapper'>
                        <BsInstagram />
                    </div>
                    <div className='header_top__icon_wrapper'>
                        <BsLinkedin />
                    </div>
                    <div className='header_top__icon_wrapper'>
                        <BsWhatsapp />
                    </div>
                </div>
                <div className='text-gray-500 text-[12px] '>
                    <strong>FREE SHIPPING </strong>
                    ORDER OVER - €100
                </div>
                <div className='flex gap-4'>
                    <select name='currency' id='currency' className='text-gray-500 text-[12px] w-[70px]'>
                        <option value='EUR €' selected>EUR €</option>
                        <option value='INR ₹'>INR ₹</option>
                        <option value='USD $'>USD $</option>
                    </select>

                    <select name='language' id='language' className='text-gray-500  text-[12px] w-[80px]'>
                        <option value='English' selected>English</option>
                        <option value='German'>German</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}
