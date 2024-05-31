
import HeroHeader from '../../components/Layout/HeroHeader';
import Info from '@/components/widgets/Info';
import Link from 'next/link';
import React from 'react'
const items = [
    { title: "Terms & Condition", description: "Welcome to all visitors of Tredella.com. By choosing to browse or interact with our website, you agree to follow the set terms and conditions known as the Terms of Use. We strongly encourage you to carefully review these terms. Should these terms find no favor with you, we advise against the utilization or exploration of this site." },
    { title: "1. Consent to Stipulations", description: "Tredella.com extends an assortment of services through this digital platform, contingent upon your acquiescence to these Terms of Use. These stipulations are subject to amendments by our discretion at any juncture, sans notification." },
    { title: "2. Service Synopsis", description: "Tredella.com operates as a digital marketplace, facilitating the procurement of diverse merchandise by users. It is understood that any augmentations to the present Service, including the introduction of novel Tredella.com offerings, fall under the purview of the Terms of Use" },
    { title: "3. Privacy Assurances", description: "Our protocol for data usage is detailed within the Tredella.com Privacy Policy. Your engagement with this site signifies your assent to the outlined data processing practices and your assertion that the data you have provided is precise." },
    { title: "4. Account Integrity, Encryption, and Safeguarding", description: "Subsequent to registration on Tredella.com, you will be endowed with a user ID and password. The safeguarding of your account credentials and the accountability for any endeavors undertaken through your account rests solely with you." },
    { title: "5. Conduct of Users", description: "You are forbidden from utilizing this website for the distribution of content that is unlawful, damaging, intimidating, abusive, harassing, slanderous, crude, lewd, invasive of privacy, discriminatory, or offensive in any manner. You must not cause harm to minors. You are prohibited from masquerading as any entity or individual, including Tredella.com representatives, or from presenting any false affiliation with any entity or individual." },
    { title: "6. Proprietary Rights", description: "The assortment of materials on this site, including written content, visuals, trademarks, symbols, sound recordings, digital assemblies, and programming, is the property of Tredella.com or its material contributors, safeguarded by global copyright conventions." },
    { title: "7. Warranties and Liability Exclusions", description: "Tredella.com delivers this site in its current state and as it is accessible, without offering any guarantees, be they stated outright or suggested, about the websites functionality or the accuracy, substance, materials, or goods featured on it" },
    { title: "8. Jurisdictional Legislation", description: "The governance and interpretation of these Terms of Use, along with any discrete agreements through which we render services, shall comply with the pertinent laws." },
    { title: "9. Modifications to Terms of Use", description: "Tredella.com retains the exclusive discretion to modify, alter, or supplant any segment of these Terms of Use by disseminating updates and alterations on our website. The onus is on you to periodically review our site for such amendments." },
    { title: "10. Inquiries and Correspondence", description: <><p>For queries regarding the Terms of Use, please direct your communications to <Link className='text-primary100 underline' href={"mailto:support@tredella.com"}>support@tredella.com</Link></p></> },
    
  ];
const terms = () => {
    
  return (
    <>
       <HeroHeader pageName={"Terms & Condition"} />
      <Info
      items={items}
      />  
    </>
  )
}

export default terms