import React from "react";
import { article, assets } from "../../assets";
import { useNavigate, useParams } from "react-router-dom";

const BlogProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  let productIndex = article.findIndex((e) => e.id == id);
  console.log(article[productIndex]);

  console.log(id);

  return (
    <div className="sm:w-[60vw] w-full  flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-5">
        <div className="flex  sm:w-[60vw] sm:p-0 p-4 flex-col items-end overflow-hidden relative group cursor-pointer">
          <img
            src={article[productIndex].image}
            alt=""
            className="h-full w-full group-hover:scale-110 transition-transform duration-1000 ease-in-out "
          />
        </div>

        <div className="flex flex-col gap-y-4 items-start sm:p-0 p-4">
          <h1 className="text-3xl font-bold">{article[productIndex].title}</h1>
          <p>
            <span className="text-sm text-[#777777]">by fashe-theme Admin</span>{" "}
            | crafts, street style |{" "}
            <span className="text-sm text-[#777777]">1 Comments</span>
          </p>
          <p className="text-[#777777]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
            turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit amet
            tempor magna. Donec eros sem, porta eget leo et, varius eleifend
            mauris. Donec eu leo congue, faucibus quam eu, viverra mauris. Nulla
            consectetur lorem mi, at scelerisque metus hendrerit vitae. Proin
            vel magna vel neque porta ultricies non eget mauris. Suspendisse
            potenti.
          </p>
          <p className="text-[#777777]">
            Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu
            nulla varius pretium eget eu magna. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Aenean dictum faucibus felis, ac vestibulum risus mollis in.
            Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis.
            Etiam malesuada elit a nibh aliquam, placerat ultricies nibh dictum.
            Nam ut egestas velit. Pellentesque viverra tincidunt tellus. Etiam
            cursus, ligula id vehicula cursus, turpis mauris facilisis massa,
            eget tincidunt est purus et odio. Nam quis luctus libero, non
            posuere velit. Ut eu varius diam, eu euismod elit. Donec efficitur,
            neque eu consectetur consectetur, dui sem consectetur felis, vitae
            rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed
            arcu lectus, fermentum imperdiet purus eu, ornare ornare libero.
          </p>

          <div className="flex gap-x-2 items-center pt-10">
            <span>Tags Cloud</span>
            <button className="border border-[#dfdede] text-[#dfdede] px-4 py-1 rounded-full hover:border-orange-600 hover:text-orange-600">
              crafts
            </button>
            <button className="border border-[#dfdede] text-[#dfdede] px-4 py-1 rounded-full hover:border-orange-600 hover:text-orange-600">
              street style
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 sm:p-0 p-4">
          <h1 className="font-bold text-2xl font-sans">1 COMMENT TO SHOW</h1>
          <div className="flex gap-x-4">
            <img src={assets.avatar} alt="" />
            <div className="flex flex-col ">
               <p className="text-[#666666]"><span onClick={() => {navigate(`/blog/${id}`)}} className="font-bold font-sans hover:text-orange-600 cursor-pointer">test name</span> <span className="text-xs ">/ Jan 11, 2018</span> <span  onClick={() => {navigate(`/blog/${id}`)}} className="hover:text-orange-600 cursor-pointer">Reply</span></p>
               <p className="text-[#666666]">test message</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
          <h1 className="font-bold text-2xl font-sans">LEAVE A COMMENT</h1>
          <span className="text-[#666666] text-xs">Your email address will not be published. Required fields are marked *</span>
          </div>

          <div className="flex flex-col gap-y-4">
            <textarea name="" id="" placeholder="message" cols={90} rows={6} className="p-4 border border-[#c8c6c6]" ></textarea>
            <input type="text" placeholder="Your Name" className="p-4 border border-[#c8c6c6] sm:w-[20vw] w-[50vw]"/>
            <input type="email" placeholder="Email address" className="p-4 border border-[#c8c6c6] sm:w-[20vw] w-[50vw]"/>
            <button  className="w-fit sm:px-[2vw] px-[4vw] bg-neutral-900 text-white py-2 rounded-3xl  hover:bg-red-500">POST COMMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogProduct;
