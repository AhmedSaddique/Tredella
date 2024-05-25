import HeroHeader from '../../components/Layout/HeroHeader';
import { BlogCard } from '@/components/ui/Aceturnity/blogCard'
import React from 'react'
import t1 from "../../../public/images/t1.jpg"

const Blog = () => {
  return (
    <>
      <HeroHeader pageName={"Blogs"} />
      <BlogCard items={[
        {image:t1, title:"What is Lorem Ipsum?", dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
        {image:t1, title:"What is Lorem Ipsum?", dec:"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"},
        {image:t1, title:"What is Lorem Ipsum?", dec:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
        {image:t1, title:"What is Lorem Ipsum?", dec:" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
      ]} />
    </>
  )
}

export default Blog