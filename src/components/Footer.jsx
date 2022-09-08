import React from 'react';
import FooterItems from './FooterItems';

const Footer = () => {
  return (
    <div className='bg-black text-white capitalize py-16'>
      <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5'>
        <FooterItems />
        <FooterItems />
        <FooterItems />
        <FooterItems />
        <FooterItems />
      </div>
    </div>
  );
};

export default Footer;
