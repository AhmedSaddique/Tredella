
import HeroHeader from '../../components/Layout/HeroHeader';
import Info from '@/components/widgets/Info';
import Link from 'next/link';
import React from 'react'
const items = [
    { title: "Introduction", description: "Welcome to Tredella. Your confidentiality is of dominant value to us. This Privacy Policy contours the identifiable information we gather, how its liable, and the measures we take to make sure your personal information is counseled adequately. Our solutions are inspired by leading e-commerce entities like Amazon and Noon, ensuring a level of confidentiality that respects and protects your online data." },
    { title: "Information Collection", description: <>
      <p>When you visit Tredella <Link className='text-primary100 underline' href={"/"}>https://tredella.com</Link>, we may accumulate several types of information, including</p>
    </> },
    { title: "Why Are Relative URLs Used?", description: "Relative URLs are very popular with web developers. It is common for websites to be developed on a staging server with a domain name that is not the same as the eventual permanent domain name. If relative URLs are used, when the site is transferred from the staging server to being live on the web all of the relative URLs will continue to work just fine. However, if absolute URLs are used the development team will have to go through the site fixing all of the URLs." },
    { title: "Use of Information", description: <><p>The information we gather is used to:</p> 
    <ul className='px-4'>
      <li className='list-disc'>Provide, operate, and maintain our website.</li>
      <li className='list-disc'>Improve, personalize, and expand our website.</li>
      <li className='list-disc'>Understand and analyze how you use our website.</li>
      <li className='list-disc'>Develop new products, services, features, and functionality.</li>
      <li className='list-disc'>Interact with you, directly or via our collaborators, for support services, delivering updates and news about the website, and for purposes of marketing and promotion.</li>
      <li className='list-disc'>Send you emails.</li>
      <li className='list-disc'>Find and prevent fraud.</li>
    </ul>
    </> },
    { title: "Information Sharing", description: "Tredella will not accord your details with any arbitrator, beside as imperative by the law or to safeguard our right and the sanctuary of others, or with your absolute approval. In addition we may share your information with trusted arbitrators who collaborate with us in operating our website, manage our business, or assisting our users, so long as those parties acknowledge to keep this information confidential." },
    { title: "Security of Your Information", description: "We appreciate your confidence in accommodating us with your Personal Information, therefore we endeavor to use commercially admissible means of safeguarding it. Nevertheless, be certain that no procedure of digital transmission, or procedure of electronic storage is 100% secure & reliable, and we cant promise its absolute security" },
    { title: "Cookies", description: "Tredella uses “cookies” to intensify your involvement in our platform. These are used to contend your shopping cart, acknowledge your preferences based on previous or current site activities which authorize us to accommodate you with augmented services. You have the recourse to accept or refuse these cookies and know when a cookie is being sent to your device. If you refuse to refuse our cookies, you may not be able to use some portions of our services." },
    { title: "Your Rights", description: "You possess the entitlement to access, modify, or eliminate the data we hold regarding you. Where feasible, you have the capability to directly access, amend, or solicit the eradication of your Personal Data within the settings of your account. Should you find yourself incapable of executing these actions independently, kindly reach out to us for support." },
    { title: "Changes to This Privacy Policy", description: "We periodically refresh our Privacy Policy and recommend that you periodically check this document for any modifications. We will inform you of any revisions by displaying the new Privacy Policy on this webpage. These modifications become effective instantly upon their publication on this page." },
    { title: "Contact Us", description: <><p>Should you have any questions or suggestions regarding our Privacy Policy, please do not hesitate to contact us <Link className='text-primary100 underline' href={"mailto:Info@tredella.com"}>Info@tredella.com</Link>. This policy is effective as of 23 February 2023.</p></> },
  ];
const Privacy = () => {
  return (
    <>
      <HeroHeader pageName={"Careers"} />
      <Info
      items={items}
      />   
    </>
  )
}

export default Privacy