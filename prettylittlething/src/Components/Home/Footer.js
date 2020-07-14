import React from 'react';
import './Home.css';

const Footer = () => {
  return(
    <div className='footer'>
      <div className='footer_grid'>
        <div className='footer_list'>
          <div className='footer_head'>LET US HELP YOU</div>
          <a href='https://www.prettylittlething.us/faq'>Help</a>
          <a href='https://www.prettylittlething.us/returns-policy'>Returns</a>
          <a href='https://www.prettylittlething.us/size-guide'>Size Guide</a>
          <a href='https://www.prettylittlething.us/delivery-information'>Shipping</a>
          <a href='https://www.prettylittlething.us/klarna'>Klarna</a>
          <a href='https://www.prettylittlething.us/afterpay'>Afterpay</a>
        </div>
        <div className='footer_list'>
          <div className='footer_head'>ABOUT US</div>
          <a href='https://www.prettylittlething.us/about'>About Us</a>
          <a href='https://www.prettylittlething.us/charity'>Giving Back</a>
          <a href='https://www.prettylittlething.us/diversity'>Diversity</a>
          <a href='https://careers.prettylittlething.com/#_ga=2.174988066.1632988021.1594411873-890133378.1593908096'>Careers</a>
          <a href='https://www.prettylittlething.us/privacy-policy'>Privacy Policy</a>
          <a href='https://www.prettylittlething.us/students'>Students</a>
          <a href='https://www.prettylittlething.us/affiliates'>Become An Affiliate</a>
          <a href='https://www.prettylittlething.us/plt-app-info'>App Info</a>
        </div>
        <div className='footer_list'>
          <div className='footer_head'>INFORMATION</div>
          <a href='https://www.prettylittlething.us/terms'>Terms & Conditions</a>
          <a href='https://www.prettylittlething.us/privacy-policy'>Privacy Policy</a>
          <a href='https://www.prettylittlething.us/privacy-policy#ccpa'>California Consumer Privacy Act</a>
          <a href='https://www.prettylittlething.us/site-map'>Sitemap</a>
        </div>
        <div className='footer_list'>
          <div className='footer_head'>MY ACCOUNT</div>
          <a href='https://www.prettylittlething.us/sales/order/history'>Order History</a>
          <a href='https://www.prettylittlething.us/#tracking_popup'>Track My Order</a>
          <a href='https://www.prettylittlething.us/wishlist'>My Wishlist</a>
          <a href='https://www.prettylittlething.us/checkout/cart/'>View Bag</a>
          <a href='https://www.prettylittlething.us/refer-a-friend?situation=footer'>Refer a friend</a>
        </div>
      </div>
    </div>
  )
}
export default Footer;