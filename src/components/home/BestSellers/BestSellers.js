import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  home5,
  chair1,
  chair2,
  shofa1,
  shofa2,
  set1,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={chair2}
          productName="Premium Chairs"
          price="440"
          color="Blank and Brown"
          badge={true}
          des="Crafted with timeless elegance and durability, our wood chair blends natural beauty with sturdy construction, perfect for any setting."
        />
        <Product
          _id="1012"
          img={shofa2}
          productName="Premium Sofa"
          price="880.00"
          color="Gray"
          badge={false}
          des="Elevate your living space with our luxurious sofa, designed for both comfort and style, offering a perfect blend of elegance and relaxation."
        />
        <Product
          _id="1013"
          img={set1}
          productName="Premium workSpace"
          price="1200.00"
          color="Mixed"
          badge={true}
          des="Streamline your workspace with our versatile system, designed for efficiency and organization, offering customizable solutions for optimal productivity"
        />
        <Product
          _id="1014"
          img={home5}
          productName="Premium Sofa"
          price="220.00"
          color="Blue"
          badge={true}
          des=" Introducing our latest addition to the living room oasis: The Harmony Haven Sofa. Sink into a world of comfort and style with this elegantly crafted centerpiece. Designed with plush cushions and luxurious upholstery, the Harmony Haven Sofa offers the perfect balance of relaxation and refinement."
        />
       
      </div>
     
    </div>
  );
};

export default BestSellers;
