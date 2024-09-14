import dress from "./banner-02.jpg";
import converse from "./banner-07.jpg";
import whiteShirt from "./banner-08.jpg";
import whiteShirtBg from "./bg-video-01.jpg.webp";
import backPackBlog from "./blog-01.jpg";
import shirtBlog from "./blog-02.jpg";
import redBackPack from "./blog-03.jpg";
import glasses from "./shop-item-09.jpg";

import carousel1 from "./carousel1.jpg";
import carousel2 from "./carousel2.jpg";
import carousel3 from "./carousel3.webp";
import carousel4 from './salopette.jpg'

import gallery1 from "./gallery-03.jpg";
import gallery2 from "./gallery-07.jpg";
import gallery3 from "./gallery-09.jpg";
import gallery4 from "./gallery-13.jpg";
import gallery5 from "./gallery-15.jpg";

import item1 from "./item-02.jpg";
import item2 from "./item-03.jpg";
import watch from "./banner-03.jpg";
import item4 from "./item-07.jpg";
import item5 from "./item-cart-01.jpg";
import item6 from "./item-cart-02.jpg";
import item7 from "./item-cart-03.jpg";
import glasses2 from './glasses2.jpg'
import watch2 from './item-05.jpg'
import grayBackPack from './banner-04.jpg'
import accessoire from './banner-09.jpg'


import logo from "./logo.png.webp";

import shopy8 from './shopy8.webp';
import shopy7 from './shopy7.webp';
import shopy6 from './shopy6.webp';
import shopy5 from './shopy5.webp';
import shopy4 from './shopy4.webp';
import shopy3 from './shopy3.webp';
import shopy2 from './shopi2.webp';


import visa from "./visa.png.webp";
import masterCard from "./mastercard.png.webp";
import paypal from "./paypal.png.webp";
import express from "./express.png.webp";
import discover from "./discover.png.webp";

import shopBanner from './banner.webp'

import aboutBanner from './about_banner.jpg'
import aboutStory from './about_story.webp'

import avatar from './avatar.webp'



export const assets = {
  dress,
  converse,
  whiteShirt,
  whiteShirtBg,
  backPackBlog,
  shirtBlog,
  redBackPack,
  grayBackPack,
  accessoire,
  glasses,
  glasses2,
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  item1,
  item2,
  watch,
  watch2,
  item4,
  item5,
  item6,
  item7,
  logo,
  visa,
  masterCard,
  paypal,
  express,
  discover,
  shopy8,
shopy7,
shopy6,
shopy5,
shopy4,
shopy3,
shopy2,

shopBanner,

aboutBanner,
aboutStory,
avatar
};





export const products = [
    // Clothes
    {
      image: assets.whiteShirt,
      title: "T-Shirt",
      price: 19.99,
      color: "White",
      state: "new"
    },
    {
      image: assets.item2,
      title: "Denim Jacket",
      price: 49.99,
      color: "Blue",
      state: "sale"
    },
    {
      image: assets.dress,
      title: "Casual Dress",
      price: 39.99,
      color: "Red",
      state: "new"
    },
    {
      image: assets.shirtBlog,
      title: "Sweatshirt",
      price: 29.99,
      color: "White",
      state: "sold"
    },
    {
      image: assets.item5,
      title: "Blazer",
      price: 69.99,
      color: "White",
      state: "new"
    },
    {
      image: assets.gallery2,
      title: "Jeans",
      price: 49.99,
      color: "Light Blue",
      state: "new"
    },
  
    // Shoes
    {
      image: assets.converse,
      title: "Black Running Shoes",
      price: 89.99,
      color: "Black",
      state: "new"
    },
    {
      image: assets.gallery5,
      title: "White Running Shoes",
      price: 129.99,
      color: "White",
      state: "sold"
    },
  
    // Bags
    {
      image: assets.backPackBlog,
      title: "Backpack",
      price: 89.99,
      color: "White",
      state: "sold"
    },
    {
      image: assets.redBackPack,
      title: "Clutch Bag",
      price: 69.99,
      color: "Red",
      state: "sale"
    },
  
    // Sunglasses
    {
      image: assets.glasses,
      title: "Aviator Sunglasses",
      price: 119.99,
      color: "Black",
      state: "new"
    },
    
  ];


export const carouselImages  = [
  {
    id: 4,
    image: assets.shopy8,
    title: "Boxy7 T-Shirt with Roll Sleeve",
    price: 20,
    colors: "white",
    qty: 0
  },
  { 
    id: 5,
    image: assets.shopy7,
    title: "Boxy7 T-Shirt with Roll Sleeve",
    price: 20,
    colors: "blue",
    qty: 0
  },
  { 
    id: 6,
    image: assets.shopy6,
    title: "Boxy7 T-Shirt with Roll Sleeve",
    price: 20,
    colors: "blue",
    qty: 0
  },
  { 
    id: 6,
    image: assets.shopy5,
    title: "Boxy7 T-Shirt with Roll Sleeve",
    price: 20,
    colors: "gray",
    qty: 0
  },
  { 
    id: 7,
    image: assets.shopy4,
    title: "Boxy7 T-Shirt with Roll Sleeve",
    price: 20,
    colors: "white",
    qty: 0
  },
  { 
    id: 8,
    image: assets.shopy3,
    title: "Boxy7 T-Shirt with Roll Sleeve",
    price: 20,
    colors: "white",
    qty: 0
  },
  { 
    id: 9,
    image: assets.shopy2,
    title: "Boxy7 T-Shirt with Roll Sleeve",
    price: 20,
    colors: "gray",
    qty: 0
  },
  { 
    id: 10,
    image: assets.item2,
    title: "Boxy7 T-Shirt with Roll Sleeve",
    price: 20,
    colors: "blue",
    qty: 0
  },

]

export const article = [
  {
    image: assets.backPackBlog,
    title: "Black Friday Guide: Best Sales & Discount Codes",
    id: 1
  },
  {
    image: assets.shirtBlog,
    title: "Black Friday Guide: Best Sales & Discount Codes",
    id: 2
  },
  {
    image: assets.redBackPack,
    title: "New York SS 2018 Street Style: By Annina Mislin",
    id: 3
  }
]








  