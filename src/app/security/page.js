
import HeroHeader from '../../components/Layout/HeroHeader';
import Info from '@/components/widgets/Info';
import React from 'react'
const items = [
    { title: "The second is an example of a relative URL?", description: " Relative URLs link to a web page by describing the position of the page relative to the position of the current page. When writing internal links that point to other pages of the same website we have the option of writing relative URLs rather than absolute URLs." },
    { title: "What the first syntax says is?", description: "look in the lowest level of the file directory for the file products, and look for blue products within that file”. What the second syntax says is." },
    { title: "Why Are Relative URLs Used?", description: "Relative URLs are very popular with web developers. It is common for websites to be developed on a staging server with a domain name that is not the same as the eventual permanent domain name. If relative URLs are used, when the site is transferred from the staging server to being live on the web all of the relative URLs will continue to work just fine. However, if absolute URLs are used the development team will have to go through the site fixing all of the URLs." }
  ];

const security = () => {
  return (
    <>
        <HeroHeader pageName={"Careers"} />
      <Info
      items={items}
      /> 
    </>
  )
}

export default security