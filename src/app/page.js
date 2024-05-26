import MainSlider from "@/components/Carousel/MainSlider";
import t1 from "../../public/images/t1.jpg"
import t2 from "../../public/images/t2.jpg"
import t3 from "../../public/images/t3.jpg"
import Container from "@/components/Layout/Container/Container";
import ProductSlider from "@/components/Carousel/ProductSlider";
import Category from "@/components/Carousel/Category";
import TabsData from "@/components/widgets/TabsData";
import Tabs from "@/components/ui/Tabs/Tabs";
import ModalView from "@/components/ui/Modal";

export default function Home() {
  const tabs = [
    { label: 'Top Deals', content: <><TabsData
    items ={ [
      {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
      {image:t2,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
      {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
      {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
      {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    ]}
    /></> },
    { label: 'Top Brands', content: <><TabsData
    items ={ [
      {image:t2,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t2,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t2,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t2,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t2,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    ]}
    /></> },
    { label: 'Deals', content: <><TabsData
    items ={ [
      {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
      {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
      {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
      {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
      {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    ]}
    /></> },
  ];
  return (
    <Container>
    <MainSlider  MainImage={[{image:t1,},{image:t2,}, {image:t3,}, {image:t2,},]} />

    <Category/>
    <Tabs className="justify-center" tabs={tabs} />
    <ProductSlider
  Heading={"Brands"}
  ProductItem={[
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
  ]}
  />
     <ProductSlider
  Heading={"Top Selling"}
  ProductItem={[
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
  ]}
  />
     <ProductSlider
  Heading={"All Products"}
  ProductItem={[
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
    {image:t1,title:"Urban Shoes Good", review:"12", price:"100" , oldPrice:"200"},
  ]}
  />
    </Container>
  );
}
