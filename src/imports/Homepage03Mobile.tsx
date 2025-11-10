import svgPaths from "./svg-csy09yedge";
import imgImagePlaceholder from "figma:asset/db20cf91b72f641e5264621731f0e776916d679e.png";
import img from "figma:asset/d475422af37b7d87c4c192d36dd8e4f4c5f2bb34.png";
import img1 from "figma:asset/b04a27e4198c0d97d442fa814ed7920237a99f0b.png";
import img2 from "figma:asset/059d319ff2d1f2c9b09b165379371b606b2705ca.png";
import img3 from "figma:asset/88065549c93302b430321d269a04d9072b21c258.png";
import img4 from "figma:asset/9fdf56160ab038c306c555f679abf13892bf171f.png";
import imgImg from "figma:asset/90a0f7bf49f34975b9fa45df01ac238ee70f158c.png";
import imgImg1 from "figma:asset/a54459b4e55a29f34a4842e506dea3bcf80f292d.png";
import imgImg2 from "figma:asset/4b110d6112e00214c1f78c9bd251cacba421a9ba.png";
import imgImg3 from "figma:asset/c15aef89bbf8c6182767b4e1bb3597744628cd25.png";
import imgImg4 from "figma:asset/f2c8e305f5666462188fb4f9234343f4a0f728b6.png";
import imgImagePlaceholder1 from "figma:asset/6ade5812e342cc98207e5a5564153bb77a5078d6.png";
import imgImagePlaceholder2 from "figma:asset/2b380169d2dc7213d5003b121dbf7d59488f78c0.png";
import img5 from "figma:asset/4bfb923abe4daf24e6836d0feea3a9908712889b.png";
import img6 from "figma:asset/17211fc46c4ccdc3487c5f7515429baaaf1507b4.png";
import imgImgContainer from "figma:asset/7b5fe67e42604bcc5d365e977b486682beeb66de.png";
import imgImgContainer1 from "figma:asset/58240a3d128558f36df46b415a06f2ff2df59df6.png";
import imgImgContainer2 from "figma:asset/9d1877db0e69147f1c4c545648901a7bd65a174c.png";
import imgInstagramElementsImage from "figma:asset/1d1a309cad23a72d24a85305f00df196b41d4773.png";
import imgInstagramElementsImage1 from "figma:asset/9ab0de662e28fa10e659a1acbbc99ecb89d85e7a.png";
import imgInstagramElementsImage2 from "figma:asset/6083781f02748b31636ad6f6111f0c2c7bac4c21.png";
import imgInstagramElementsImage3 from "figma:asset/fc6aee3082f8080b7bc0c5245a7472d96c9e2490.png";
import imgInstagramElementsImage4 from "figma:asset/2798397e5dab0fa6f912176b7846f5a2fc81d890.png";
import imgInstagramElementsImage5 from "figma:asset/c456d04e4963ce2362c0dd6120739fdb60471759.png";
import { imgBase, imgStripe, imgVector2900, imgVector2998, imgVector, imgVector1, imgStateFillSizeLarge, imgStateDisabledSizeSmall, imgStateDisabledSizeLarge, imgStateFillSizeSmall, imgRectangle773, imgRectangle772, imgVector2 } from "./svg-pwc6y";
type PaymentMethodsProps = {
  className?: string;
  card?: "Amex" | "ApplePay" | "Mastercard" | "PayPal" | "Stripe" | "Visa";
};

/**
 * @figmaAssetKey a1fc3e8b5778ebb4405a5b1129866591bf1cf83d
 */
function PaymentMethods({ className, card = "Visa" }: PaymentMethodsProps) {
  const element = <div aria-hidden="true" className="absolute border border-[#e8ecef] border-solid inset-0 pointer-events-none rounded-[4px]" />;
  if (card === "Amex") {
    return (
      <div className={className} data-name="Card=Amex">
        <div className="absolute bg-white inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[48px_32px] rounded-[4px]" data-name="BASE" style={{ maskImage: `url('${imgBase}')` }}>
          {element}
        </div>
        <div className="absolute bottom-[22.99%] left-[2.08%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-8px] mask-size-[48px_32px] right-[2.08%] top-1/4" style={{ maskImage: `url('${imgBase}')` }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 17">
            <g id="Group 63">
              <path d={svgPaths.p116b61c0} fill="var(--fill-0, #016FD0)" id="path3082" />
              <path d={svgPaths.p2d388c80} fill="var(--fill-0, #016FD0)" id="path3080" />
              <path d={svgPaths.p9d0a500} fill="var(--fill-0, white)" id="path3046" />
              <path d={svgPaths.p3c1c2440} fill="var(--fill-0, white)" id="path3048" />
              <path d={svgPaths.p1501b430} fill="var(--fill-0, white)" id="path3050" />
              <path d={svgPaths.p3ce90f80} fill="var(--fill-0, white)" id="path3052" />
              <path d={svgPaths.p5d8b200} fill="var(--fill-0, white)" id="path3054" />
              <path d={svgPaths.p2d8ce800} fill="var(--fill-0, white)" id="path3056" />
              <path d={svgPaths.p16fc1c80} fill="var(--fill-0, white)" id="path3058" />
              <path d={svgPaths.p38432700} fill="var(--fill-0, white)" id="path3060" />
              <path d={svgPaths.p2f74300} fill="var(--fill-0, white)" id="path3062" />
              <path d={svgPaths.p19f0ee00} fill="var(--fill-0, white)" id="path3064" />
              <path d={svgPaths.pbd57880} fill="var(--fill-0, white)" id="path3066" />
              <path d={svgPaths.p132e2e00} fill="var(--fill-0, white)" id="path3068" />
              <path d={svgPaths.pc57a880} fill="var(--fill-0, white)" id="path3072" />
              <path d={svgPaths.p36387f00} fill="var(--fill-0, white)" id="path3074" />
              <path d={svgPaths.p6010fe8} fill="var(--fill-0, white)" id="path3076" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (card === "Mastercard") {
    return (
      <div className={className} data-name="Card=Mastercard">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="BASE">
          {element}
        </div>
        <div className="absolute inset-[18.75%_16.67%_19.9%_16.67%]" data-name="Mastercard">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 20">
            <g id="Mastercard">
              <path d={svgPaths.pbff9500} fill="var(--fill-0, #ED0006)" id="Left" />
              <path d={svgPaths.p252ab980} fill="var(--fill-0, #F9A000)" id="Right" />
              <path d={svgPaths.p3329680} fill="var(--fill-0, #FF5E00)" id="Middle" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (card === "Stripe") {
    return (
      <div className={className} data-name="Card=Stripe">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="BASE">
          {element}
        </div>
        <div className="absolute bottom-[28.13%] left-[12.5%] right-[12.21%] top-1/4" data-name="Stripe">
          <img alt="" className="block max-w-none size-full" src={imgStripe} />
        </div>
      </div>
    );
  }
  if (card === "PayPal") {
    return (
      <div className={className} data-name="Card=PayPal">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="BASE">
          {element}
        </div>
        <div className="absolute inset-[34.38%_11.4%_34.38%_10.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 10">
            <g id="Group 75">
              <path clipRule="evenodd" d={svgPaths.p1c196ef0} fill="var(--fill-0, #253B80)" fillRule="evenodd" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p3229b480} fill="var(--fill-0, #179BD7)" fillRule="evenodd" id="Vector_2" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (card === "ApplePay") {
    return (
      <div className={className} data-name="Card=ApplePay">
        <div className="absolute bg-white inset-0 rounded-[4px]" data-name="BASE">
          {element}
        </div>
        <div className="absolute inset-[28.13%_16.67%_30.32%_16.67%]" data-name="ApplePay">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 14">
            <path clipRule="evenodd" d={svgPaths.pa69ae00} fill="var(--fill-0, black)" fillRule="evenodd" id="ApplePay" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Card=Visa">
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="BASE">
        {element}
      </div>
      <div className="absolute inset-[28.13%_7.95%_30.7%_6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 14">
          <g id="Group 76">
            <path d={svgPaths.p2ac7400} fill="var(--fill-0, #00579F)" id="polygon9" />
            <path d={svgPaths.p2722fd00} fill="var(--fill-0, #00579F)" id="path11" />
            <path d={svgPaths.p34865700} fill="var(--fill-0, #00579F)" id="path13" />
            <path d={svgPaths.p23fc3e80} fill="var(--fill-0, #00579F)" id="path15" />
            <path d={svgPaths.p3eef9500} fill="var(--fill-0, #FAA61A)" id="path17" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 0fd102c446acabcb256137d0e63e4259fe33cc1f
 */
function SocialOutlineYoutube({ className }: { className?: string }) {
  return (
    <div className={className} data-name="social/outline/youtube">
      <div className="absolute inset-[12.5%_8.33%] rounded-[4px]">
        <div aria-hidden="true" className="absolute border-[#141718] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[4.75px]" />
      </div>
      <div className="absolute inset-[33.33%_29.17%_33.33%_37.5%]">
        <div className="absolute inset-[-1.68%_6.08%_-1.68%_-9.38%]">
          <img alt="" className="block max-w-none size-full" src={imgVector2900} />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 37df719d40c6634452235a3cb4832503067d6927
 */
function SocialOutlineFacebook({ className }: { className?: string }) {
  return (
    <div className={className} data-name="social/outline/facebook">
      <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]">
        <div className="absolute inset-[-4.17%_-6.25%]">
          <img alt="" className="block max-w-none size-full" src={imgVector2998} />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 1d94b9d3b31b7fff3633dbb9df8e17a998b01004
 */
function SocialOutlineInstagram({ className }: { className?: string }) {
  return (
    <div className={className} data-name="social/outline/instagram">
      <div className="absolute inset-[8.333%] rounded-[4px]" data-name="Vector">
        <div aria-hidden="true" className="absolute border-[#141718] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[4.75px]" />
      </div>
      <div className="absolute inset-[20.83%_20.83%_70.83%_70.83%]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute inset-[29.167%]" data-name="Vector">
        <div className="absolute inset-[-7.5%]">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
    </div>
  );
}
type StarIconProps = {
  className?: string;
  state?: "Disabled" | "Fill";
  size?: "Large" | "Small";
};

/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
function StarIcon({ className, state = "Fill", size = "Small" }: StarIconProps) {
  if (state === "Fill" && size === "Large") {
    return (
      <div className={className} data-name="State=Fill, Size=Large">
        <div className="absolute inset-[5.01%_7.06%_13%_7.06%]">
          <img alt="" className="block max-w-none size-full" src={imgStateFillSizeLarge} />
        </div>
      </div>
    );
  }
  if (state === "Disabled" && size === "Small") {
    return (
      <div className={className} data-name="State=Disabled, Size=Small">
        <div className="absolute inset-[5.01%_7.06%_13%_7.06%]">
          <img alt="" className="block max-w-none size-full" src={imgStateDisabledSizeSmall} />
        </div>
      </div>
    );
  }
  if (state === "Disabled" && size === "Large") {
    return (
      <div className={className} data-name="State=Disabled, Size=Large">
        <div className="absolute inset-[5.01%_7.06%_13%_7.06%]">
          <img alt="" className="block max-w-none size-full" src={imgStateDisabledSizeLarge} />
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="State=Fill, Size=Small">
      <div className="absolute inset-[5.01%_7.06%_13%_7.06%]">
        <img alt="" className="block max-w-none size-full" src={imgStateFillSizeSmall} />
      </div>
    </div>
  );
}
type RatingRatingGroupProps = {
  className?: string;
  property1?: "1 Star" | "2 Star" | "3 Star" | "4 Star" | "5 Star" | "No Rating";
  size?: "Small" | "Large";
};

/**
 * @figmaAssetKey 3917fffc2e87c608a67fa81af26474668b35330c
 */
function RatingRatingGroup({ className, property1 = "No Rating", size = "Small" }: RatingRatingGroupProps) {
  if (property1 === "No Rating" && size === "Large") {
    return (
      <div className={className} data-name="Property 1=No Rating, Size=Large">
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[81.48%] right-0 top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[61.11%] right-[20.37%] top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[40.74%] right-[40.74%] top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[20.37%] right-[61.11%] top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-0 right-[81.48%] top-0" />
      </div>
    );
  }
  if (property1 === "1 Star" && size === "Small") {
    return (
      <div className={className} data-name="Property 1=1 Star, Size=Small">
        <StarIcon state="Disabled" className="absolute bottom-0 left-[81.82%] right-0 top-0" />
        <StarIcon state="Disabled" className="absolute bottom-0 left-[61.36%] right-[20.45%] top-0" />
        <StarIcon state="Disabled" className="absolute bottom-0 left-[40.91%] right-[40.91%] top-0" />
        <StarIcon state="Disabled" className="absolute bottom-0 left-[20.45%] right-[61.36%] top-0" />
        <StarIcon1 />
      </div>
    );
  }
  if (property1 === "1 Star" && size === "Large") {
    return (
      <div className={className} data-name="Property 1=1 Star, Size=Large">
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[81.48%] right-0 top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[61.11%] right-[20.37%] top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[40.74%] right-[40.74%] top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[20.37%] right-[61.11%] top-0" />
        <StarIcon2 />
      </div>
    );
  }
  if (property1 === "2 Star" && size === "Small") {
    return (
      <div className={className} data-name="Property 1=2 Star, Size=Small">
        <StarIcon state="Disabled" className="absolute bottom-0 left-[81.82%] right-0 top-0" />
        <StarIcon state="Disabled" className="absolute bottom-0 left-[61.36%] right-[20.45%] top-0" />
        <StarIcon state="Disabled" className="absolute bottom-0 left-[40.91%] right-[40.91%] top-0" />
        <StarIcon3 />
        <StarIcon4 />
      </div>
    );
  }
  if (property1 === "2 Star" && size === "Large") {
    return (
      <div className={className} data-name="Property 1=2 Star, Size=Large">
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[81.48%] right-0 top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[61.11%] right-[20.37%] top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[40.74%] right-[40.74%] top-0" />
        <StarIcon5 />
        <StarIcon6 />
      </div>
    );
  }
  if (property1 === "3 Star" && size === "Small") {
    return (
      <div className={className} data-name="Property 1=3 Star, Size=Small">
        <StarIcon state="Disabled" className="absolute bottom-0 left-[81.82%] right-0 top-0" />
        <StarIcon state="Disabled" className="absolute bottom-0 left-[61.36%] right-[20.45%] top-0" />
        <StarIcon7 />
        <StarIcon8 />
        <StarIcon9 />
      </div>
    );
  }
  if (property1 === "3 Star" && size === "Large") {
    return (
      <div className={className} data-name="Property 1=3 Star, Size=Large">
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[81.48%] right-0 top-0" />
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[61.11%] right-[20.37%] top-0" />
        <StarIcon10 />
        <StarIcon11 />
        <StarIcon12 />
      </div>
    );
  }
  if (property1 === "4 Star" && size === "Small") {
    return (
      <div className={className} data-name="Property 1=4 Star, Size=Small">
        <StarIcon state="Disabled" className="absolute bottom-0 left-[81.82%] right-0 top-0" />
        <StarIcon13 />
        <StarIcon14 />
        <StarIcon15 />
        <StarIcon16 />
      </div>
    );
  }
  if (property1 === "4 Star" && size === "Large") {
    return (
      <div className={className} data-name="Property 1=4 Star, Size=Large">
        <StarIcon state="Disabled" size="Large" className="absolute bottom-0 left-[81.48%] right-0 top-0" />
        <StarIcon17 />
        <StarIcon18 />
        <StarIcon19 />
        <StarIcon20 />
      </div>
    );
  }
  if (property1 === "5 Star" && size === "Small") {
    return (
      <div className={className} data-name="Property 1=5 Star, Size=Small">
        <StarIcon21 />
        <StarIcon22 />
        <StarIcon23 />
        <StarIcon24 />
        <StarIcon25 />
      </div>
    );
  }
  if (property1 === "5 Star" && size === "Large") {
    return (
      <div className={className} data-name="Property 1=5 Star, Size=Large">
        <StarIcon26 />
        <StarIcon27 />
        <StarIcon28 />
        <StarIcon29 />
        <StarIcon30 />
      </div>
    );
  }
  return (
    <div className={className} data-name="Property 1=No Rating, Size=Small">
      <StarIcon state="Disabled" className="absolute bottom-0 left-[81.82%] right-0 top-0" />
      <StarIcon state="Disabled" className="absolute bottom-0 left-[61.36%] right-[20.45%] top-0" />
      <StarIcon state="Disabled" className="absolute bottom-0 left-[40.91%] right-[40.91%] top-0" />
      <StarIcon state="Disabled" className="absolute bottom-0 left-[20.45%] right-[61.36%] top-0" />
      <StarIcon state="Disabled" className="absolute bottom-0 left-0 right-[81.82%] top-0" />
    </div>
  );
}

/**
 * @figmaAssetKey bdae5dccf07cf68261501ad02575daab1b0e1843
 */
function BadgeMedium({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Badge medium">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-center text-nowrap uppercase whitespace-pre">-50%</p>
    </div>
  );
}
type ElementsProps = {
  className?: string;
  status?: boolean;
};

/**
 * @figmaAssetKey a61889f49f39ae4280f18c46df0893da460caf42
 */
function Elements({ className, status = true }: ElementsProps) {
  if (!status) {
    return (
      <div className={className} data-name="Status=Inactive">
        <div className="absolute left-1/2 size-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Shape">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <ellipse cx="3.99999" cy="4" fill="var(--fill-0, #6C7275)" id="Shape" rx="3.99999" ry="4" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Status=Active">
      <div aria-hidden="true" className="absolute border border-[#141718] border-solid inset-[-0.5px] pointer-events-none rounded-[100.5px]" />
      <div className="absolute left-1/2 size-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <ellipse cx="3.99999" cy="4" fill="var(--fill-0, #141718)" id="Shape" rx="3.99999" ry="4" />
        </svg>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 87706fc01971559de042f9c37ca88e7d23f6a82e
 */
function OutlineShoppingBag({ className }: { className?: string }) {
  return (
    <div className={className} data-name="outline/shopping bag">
      <div className="absolute bottom-[58.33%] left-[37.5%] right-[37.5%] top-1/4">
        <div className="absolute inset-[-18.75%_-12.5%]">
          <img alt="" className="block max-w-none size-full" src={imgRectangle773} />
        </div>
      </div>
      <div className="absolute inset-[12.5%_11.34%]">
        <div className="absolute inset-[-4.17%_-4.04%]">
          <img alt="" className="block max-w-none size-full" src={imgRectangle772} />
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey a4d40a4da7fe538af45909530577b04de0cd0d5c
 */
function MenuOutlineMenuLineHorizontal({ className }: { className?: string }) {
  return (
    <div className={className} data-name="menu/outline/menu-line-horizontal">
      <div className="absolute inset-[33.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <img alt="" className="block max-w-none size-full" src={imgVector2} />
        </div>
      </div>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Text+Icon">
      <Ticketpercent />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#141718] text-[12px] text-center text-nowrap whitespace-pre">{`30% off storewide — Limited time! `}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-name="Content">
      <TextIcon />
    </div>
  );
}

function NotificationBar() {
  return (
    <div className="bg-[#38cb89] box-border content-stretch flex gap-[22px] items-center justify-center px-[32px] py-[8px] relative shrink-0 w-[375px]" data-name="Notification Bar">
      <Content />
      <Iconclose />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[70px]" data-name="Logo">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[24px] left-[41.5px] not-italic text-[0px] text-[16px] text-black text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">
        HYGEENIE<span className="text-[#6c7275]">{`. `}</span>
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[102px]" data-name="Left">
      <MenuOutlineMenuLineHorizontal className="relative shrink-0 size-[24px]" />
      <Logo />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[30px] overflow-clip size-[20px] top-[4px]">
      <div className="absolute right-0 size-[20px] top-1/2 translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #141718)" id="Ellipse 1" r="10" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[10px] not-italic right-[10px] text-[#fefefe] text-[12px] text-center text-nowrap top-[calc(50%-5px)] translate-x-[50%] whitespace-pre">2</p>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Right">
      <ElementsNavigationCartButton />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-between px-[32px] py-[16px] relative shrink-0 w-[375px]" data-name="Navigation Bar">
      <Left />
      <Right />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Header">
      <div className="bg-clip-text font-['Poppins:Medium',sans-serif] leading-[44px] not-italic relative shrink-0 text-[40px] text-center tracking-[-0.4px] w-[311px]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="mb-0">{`More than `}</p>
        <p className="mb-0">{`just a game. `}</p>
        <p>It’s a lifestyle.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <Header />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[16px] text-center text-white w-[311px]">{`Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.`}</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] items-center justify-center left-1/2 px-[32px] py-[40px] top-[calc(50%+159px)] translate-x-[-50%] translate-y-[-50%] w-[375px]" data-name="Content">
      <Text />
      <Button8 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[692px] relative shrink-0 w-[375px]" data-name="Hero Section">
      <ImagePlaceholder2 />
      <Content1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[311px]" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[38px] not-italic relative shrink-0 text-[34px] text-black text-nowrap tracking-[-0.6px] whitespace-pre">Featured</p>
      <NavigationDots />
    </div>
  );
}

function ButtonHover() {
  return (
    <div className="absolute bg-[#141718] box-border content-stretch flex gap-[4px] inset-[82.23%_6.11%_4.58%_6.11%] items-center justify-center px-[24px] py-[8px] rounded-[8px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.04)]" data-name="Button hover">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-center text-nowrap tracking-[-0.4px] whitespace-pre">Add to cart</p>
    </div>
  );
}

function Badges() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[16px]" data-name="Badges">
      <Badgemedium />
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Price">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#121212] text-[14px] text-nowrap whitespace-pre">$19.00</p>
    </div>
  );
}

function TextPrice() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup property1="5 Star" className="h-[16px] relative shrink-0 w-[88px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">{`Shark - Men's cabretta white golf glove `}</p>
      <Price />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <TextPrice />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 w-[231px]" data-name="Content">
      <Content2 />
    </div>
  );
}

function Badges1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[16px]" data-name="Badges">
      <Badgemedium1 />
      <Badgemedium2 />
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre" data-name="Price">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#121212]">$24.99</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal line-through relative shrink-0 text-[#6c7275]">$40.00</p>
    </div>
  );
}

function TextPrice1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup property1="5 Star" className="h-[16px] relative shrink-0 w-[88px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">{`Greg Norman - Men's Shark Logo Golf Polo Shirt`}</p>
      <Price1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <TextPrice1 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 w-[231px]" data-name="Content">
      <Content4 />
    </div>
  );
}

function Badges2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[16px]" data-name="Badges">
      <Badgemedium3 />
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Price">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#121212] text-[14px] text-nowrap whitespace-pre">$30.00</p>
    </div>
  );
}

function TextPrice2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup property1="5 Star" className="h-[16px] relative shrink-0 w-[88px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">G/FORE - Mens Left Glove Snow 2023</p>
      <Price2 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <TextPrice2 />
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 w-[231px]" data-name="Content">
      <Content6 />
    </div>
  );
}

function Badges3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[16px]" data-name="Badges">
      <Badgemedium4 />
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Price">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[#121212] text-[14px] text-nowrap whitespace-pre">$209.99</p>
    </div>
  );
}

function TextPrice3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup property1="5 Star" className="h-[16px] relative shrink-0 w-[88px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">Utility Rover-R Double Strap Bag All Black - 2023</p>
      <Price3 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <TextPrice3 />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 w-[231px]" data-name="Content">
      <Content8 />
    </div>
  );
}

function Badges4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[16px]" data-name="Badges">
      <Badgemedium5 />
      <BadgeMedium className="bg-[#38cb89] box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[4px] relative rounded-[4px] shrink-0" />
    </div>
  );
}

function Price4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre" data-name="Price">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#121212]">$111.99</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal line-through relative shrink-0 text-[#6c7275]">$200.00</p>
    </div>
  );
}

function TextPrice4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup property1="5 Star" className="h-[16px] relative shrink-0 w-[88px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">Air Jordan 1 Low G Black/Black/Iron Grey - SS23</p>
      <Price4 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <TextPrice4 />
    </div>
  );
}

function Content11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 w-[231px]" data-name="Content">
      <Content10 />
    </div>
  );
}

/**
 * @figmaAssetKey e62be8d8521a96a900d339441ecbfb4036ab3b89
 */
/**
 * @figmaAssetKey e62be8d8521a96a900d339441ecbfb4036ab3b89
 */
/**
 * @figmaAssetKey e62be8d8521a96a900d339441ecbfb4036ab3b89
 */
/**
 * @figmaAssetKey e62be8d8521a96a900d339441ecbfb4036ab3b89
 */
/**
 * @figmaAssetKey e62be8d8521a96a900d339441ecbfb4036ab3b89
 */
function ProductCard() {
  return (
    <div className="content-stretch flex gap-[16px] h-[412px] items-start relative shrink-0 w-[1280px]" data-name="product card">
      <ProductCard1 />
      <ProductCard2 />
      <ProductCard3 />
      <ProductCard4 />
      <ProductCard5 />
    </div>
  );
}

function ProductCarousel() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[40px] items-start pl-[32px] pr-0 py-[32px] relative shrink-0 w-[375px]" data-name="Product Carousel">
      <Title />
      <ProductCard />
    </div>
  );
}

function Img() {
  return (
    <div className="h-[131px] relative shrink-0 w-[152px]" data-name="img">
      <div className="absolute h-[132px] left-0 top-0 w-[152px]" data-name="img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#f3f5f7] inset-0" />
          <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
            <img alt="" className="absolute h-[74.68%] left-[16.46%] max-w-none top-[25.47%] w-[64.64%]" src={imgImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[152px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Golf Clubs</p>
    </div>
  );
}

function Project() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="project">
      <Img />
      <Info />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[131px] relative shrink-0 w-[152px]" data-name="img">
      <div className="absolute h-[132px] left-0 top-0 w-[152px]" data-name="img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#f3f5f7] inset-0" />
          <img alt="" className="absolute max-w-none mix-blend-multiply object-50%-50% object-cover size-full" src={imgImg1} />
        </div>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[152px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Golf Balls</p>
    </div>
  );
}

function Project1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="project">
      <Img1 />
      <Info1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Row1">
      <Project />
      <Project1 />
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[131px] relative shrink-0 w-[152px]" data-name="img">
      <div className="absolute h-[132px] left-0 top-0 w-[152px]" data-name="img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#f3f5f7] inset-0" />
          <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
            <img alt="" className="absolute h-[89.32%] left-[11.34%] max-w-none top-[5.34%] w-[77.31%]" src={imgImg2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[152px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Golf Bags</p>
    </div>
  );
}

function Project2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="project">
      <Img2 />
      <Info2 />
    </div>
  );
}

function Img3() {
  return (
    <div className="h-[131px] relative shrink-0 w-[152px]" data-name="img">
      <div className="absolute h-[132px] left-0 top-0 w-[152px]" data-name="img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#f3f5f7] inset-0" />
          <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
            <img alt="" className="absolute h-[91.91%] left-[10.22%] max-w-none top-[4.05%] w-[79.55%]" src={imgImg3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[152px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">{`Clothing & Rainwear`}</p>
    </div>
  );
}

function Project3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="project">
      <Img3 />
      <Info3 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Row1">
      <Project2 />
      <Project3 />
    </div>
  );
}

function Img4() {
  return (
    <div className="h-[131px] relative shrink-0 w-[152px]" data-name="img">
      <div className="absolute h-[132px] left-0 top-0 w-[152px]" data-name="img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#f3f5f7] inset-0" />
          <img alt="" className="absolute max-w-none mix-blend-multiply object-50%-50% object-contain size-full" src={imgImg4} />
        </div>
      </div>
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[152px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Footwear</p>
    </div>
  );
}

function Project4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="project">
      <Img4 />
      <Info4 />
    </div>
  );
}

function Img5() {
  return (
    <div className="h-[131px] relative shrink-0 w-[152px]" data-name="img">
      <div className="absolute h-[132px] left-0 top-0 w-[152px]" data-name="img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#f3f5f7] inset-0" />
          <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
            <img alt="" className="absolute h-[82.2%] left-[14.43%] max-w-none top-[8.9%] w-[71.15%]" src={img2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[152px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Accessories</p>
    </div>
  );
}

function Project5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="project">
      <Img5 />
      <Info5 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Row1">
      <Project4 />
      <Project5 />
    </div>
  );
}

function ProductList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Product list">
      <Row />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] items-center px-[32px] py-[40px] relative shrink-0">
      <div className="font-['Poppins:Medium',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#23262f] text-[34px] text-center text-nowrap tracking-[-0.6px] whitespace-pre">
        <p className="mb-0">{`Shop by `}</p>
        <p>Categories</p>
      </div>
      <ProductList />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[311px]" data-name="Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] min-w-full relative shrink-0 text-[#38cb89] text-[16px] uppercase w-[min-content]">Limited edition</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[38px] min-w-full relative shrink-0 text-[#fefefe] text-[34px] tracking-[-0.6px] w-[min-content]">Hurry up! 30% OFF</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#fefefe] text-[14px] w-[311px]">Find clubs that are right for your game</p>
    </div>
  );
}

function TimerNumberCell() {
  return (
    <div className="absolute bg-[#fefefe] left-0 size-[60px] top-0" data-name="Timer/Number/Cell">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[38px] left-[calc(50%+0.5px)] not-italic text-[#141718] text-[34px] text-center text-nowrap top-[calc(50%-19px)] tracking-[-0.6px] translate-x-[-50%] whitespace-pre">02</p>
    </div>
  );
}

function TimerNumberCell1() {
  return (
    <div className="absolute bg-[#fefefe] left-0 size-[60px] top-0" data-name="Timer/Number/Cell">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[38px] left-[calc(50%+0.5px)] not-italic text-[#141718] text-[34px] text-center text-nowrap top-[calc(50%-19px)] tracking-[-0.6px] translate-x-[-50%] whitespace-pre">12</p>
    </div>
  );
}

function TimerNumberCell2() {
  return (
    <div className="absolute bg-[#fefefe] left-0 size-[60px] top-0" data-name="Timer/Number/Cell">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[38px] left-[calc(50%+0.5px)] not-italic text-[#141718] text-[34px] text-center text-nowrap top-[calc(50%-19px)] tracking-[-0.6px] translate-x-[-50%] whitespace-pre">45</p>
    </div>
  );
}

function TimerNumberCell3() {
  return (
    <div className="absolute bg-[#fefefe] left-0 size-[60px] top-0" data-name="Timer/Number/Cell">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[38px] left-[calc(50%+0.5px)] not-italic text-[#141718] text-[34px] text-center text-nowrap top-[calc(50%-19px)] tracking-[-0.6px] translate-x-[-50%] whitespace-pre">05</p>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Cards">
      <TimerBlocks />
      <TimerBlocks1 />
      <TimerBlocks2 />
      <TimerBlocks3 />
    </div>
  );
}

function Content12() {
  return (
    <div className="bg-[#141718] box-border content-stretch flex flex-col gap-[24px] h-[367px] items-start justify-center px-[32px] py-0 relative shrink-0 w-[375px]" data-name="Content">
      <Title1 />
      <Timer />
      <Button9 />
    </div>
  );
}

function Banner() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Banner">
      <Content12 />
      <ImagePlaceholder8 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[311px]" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[38px] not-italic relative shrink-0 text-[34px] text-black text-nowrap tracking-[-0.6px] whitespace-pre">Shop Collection</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[247px]" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[34px] min-w-full not-italic relative shrink-0 text-[#121212] text-[28px] tracking-[-0.6px] w-[min-content]">Juniors Set</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#121212] text-[14px] text-nowrap whitespace-pre">Collection</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#121212] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content13 />
      <Iconarrowright />
    </div>
  );
}

function Content14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32px] top-[279px] w-[247px]" data-name="Content">
      <Title3 />
      <Button />
    </div>
  );
}

function ElementsCard() {
  return (
    <div className="h-[377px] relative shrink-0 w-[311px]" data-name="Elements/Card">
      <ImagePlaceholder9 />
      <Content14 />
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Image Placeholder">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f3f5f7] inset-0" />
        <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
          <img alt="" className="absolute h-[99.12%] left-[50.73%] max-w-none top-[0.31%] w-[57.7%]" src={img5} />
        </div>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Collection</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#141718] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content15 />
      <Iconarrowright1 />
    </div>
  );
}

function Content16() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[8px] items-start left-[32px] w-[247px]" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#141718] text-[28px] tracking-[-0.6px] w-[247px]">Men’s Set</p>
      <Button1 />
    </div>
  );
}

function ImagePlaceholder1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Image Placeholder">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f3f5f7] inset-0" />
        <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
          <img alt="" className="absolute h-[102.86%] left-[52.11%] max-w-none top-[-1.56%] w-[59.88%]" src={img6} />
        </div>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Collection</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#141718] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content17 />
      <Iconarrowright2 />
    </div>
  );
}

function Content18() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[8px] items-start left-[32px] w-[247px]" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#141718] text-[28px] tracking-[-0.6px] w-[247px]">Women’s Set</p>
      <Button2 />
    </div>
  );
}

/**
 * @figmaAssetKey cdb7f9c95029aff9934f7a1cd1f117442faecd24
 */
/**
 * @figmaAssetKey f2abee9e6434de96975c47f1ea0e88b946d522f1
 */
function BannerGrid() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start px-[32px] py-[40px] relative shrink-0" data-name="Banner Grid">
      <Title2 />
      <ElementsCard />
      <SmallCards />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#121212] text-[14px] text-nowrap whitespace-pre">{`View More `}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#121212] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content19 />
      <Iconarrowright3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[311px]">
      <div className="font-['Poppins:Medium',sans-serif] leading-[38px] not-italic relative shrink-0 text-[34px] text-black text-nowrap tracking-[-0.6px] whitespace-pre">
        <p className="mb-0">Latest</p>
        <p>Articles</p>
      </div>
      <Button3 />
    </div>
  );
}

function ImgContainer() {
  return (
    <div className="h-[283px] relative shrink-0 w-[311px]" data-name="img container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgContainer} />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Read More</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#141718] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content20 />
      <Iconarrowright4 />
    </div>
  );
}

function Info6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[311px]" data-name="info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] not-italic relative shrink-0 text-[#23262f] text-[16px] w-[311px]">Air Jordan x Travis Scott Event</p>
      <Button4 />
    </div>
  );
}

function Article() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Article">
      <ImgContainer />
      <Info6 />
    </div>
  );
}

function ImgContainer1() {
  return (
    <div className="h-[283px] relative shrink-0 w-[311px]" data-name="img container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgContainer1} />
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Read More</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#141718] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content21 />
      <Iconarrowright5 />
    </div>
  );
}

function Info7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[311px]" data-name="info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] not-italic relative shrink-0 text-[#23262f] text-[16px] w-[311px]">The timeless classics on the green</p>
      <Button5 />
    </div>
  );
}

function Article1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Article">
      <ImgContainer1 />
      <Info7 />
    </div>
  );
}

function ImgContainer2() {
  return (
    <div className="h-[283px] relative shrink-0 w-[311px]" data-name="img container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImgContainer2} />
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Read More</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#141718] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content22 />
      <Iconarrowright6 />
    </div>
  );
}

function Info8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[311px]" data-name="info">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] not-italic relative shrink-0 text-[#23262f] text-[16px] w-[311px]">The 2023 Ryder Cup</p>
      <Button6 />
    </div>
  );
}

function Article2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Article">
      <ImgContainer2 />
      <Info8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Article />
      <Article1 />
      <Article2 />
    </div>
  );
}

function BlogSection() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[40px] items-start px-[32px] py-[40px] relative shrink-0 w-[375px]" data-name="Blog Section">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-[#fefefe] text-center w-[311px]" data-name="Header">
      <p className="font-['Poppins:Medium',sans-serif] leading-[34px] relative shrink-0 text-[28px] tracking-[-0.6px] w-[312px]">Join Our Newsletter</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] w-[311px]">Sign up for deals, new products and promotions</p>
    </div>
  );
}

function IconInput() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon+Input">
      <Iconemail />
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[#fefefe] text-[16px] tracking-[-0.4px]">Email address</p>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-nowrap tracking-[-0.4px] whitespace-pre">Signup</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-[#fefefe] border-solid inset-0 pointer-events-none" />
      <Content23 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#fefefe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <IconInput />
      <Button7 />
    </div>
  );
}

function FormInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-start justify-center relative shrink-0 w-[311px]" data-name="Form Input">
      <Input />
    </div>
  );
}

function Content24() {
  return (
    <div className="bg-[#141718] box-border content-stretch flex flex-col gap-[32px] items-center justify-center px-[32px] py-[95px] relative shrink-0 w-[375px]" data-name="Content">
      <Header1 />
      <FormInput />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-[311px]" data-name="Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] min-w-full relative shrink-0 text-[#6c7275] text-[16px] uppercase w-[min-content]">newsfeed</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[38px] min-w-full relative shrink-0 text-[#121212] text-[34px] tracking-[-0.6px] w-[min-content]">Instagram</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#121212] text-[14px] w-[309px]">{`Follow us on social media for more discount & promotions`}</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#6c7275] text-[20px] text-nowrap whitespace-pre">@3legant_official</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 1">
      <InstagramElementsImage />
      <InstagramElementsImage1 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 2">
      <InstagramElementsImage2 />
      <InstagramElementsImage3 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row 3">
      <InstagramElementsImage4 />
      <InstagramElementsImage5 />
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Cards">
      <Row5 />
      <Row1 />
      <Row2 />
    </div>
  );
}

function InstagramNewsfeed() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[40px] items-center pb-0 pt-[40px] px-0 relative shrink-0 w-[375px]" data-name="Instagram newsfeed">
      <Title4 />
      <Cards1 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[105px]" data-name="Logo">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[24px] left-[52.5px] not-italic text-[0px] text-[24px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">
        3legant<span className="text-[#6c7275]">{`. `}</span>
      </p>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="social icon">
      <SocialOutlineInstagram className="relative shrink-0 size-[24px]" />
      <SocialOutlineFacebook className="overflow-clip relative shrink-0 size-[24px]" />
      <SocialOutlineYoutube className="overflow-clip relative shrink-0 size-[24px]" />
    </div>
  );
}

function Links() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[32px] pt-0 px-0 relative shrink-0 w-[311px]" data-name="links">
      <div aria-hidden="true" className="absolute border-[#6c7275] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Logo1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] min-w-full not-italic relative shrink-0 text-[#fefefe] text-[16px] w-[min-content]">More than just a game. It’s a lifestyle.</p>
      <SocialIcon />
    </div>
  );
}

function IconsArrowDownSimpleLine() {
  return (
    <div className="relative size-[24px]" data-name="icons/Arrow Down Simple/Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icons/Arrow Down Simple/Line">
          <path clipRule="evenodd" d={svgPaths.p24c50de0} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="toggle">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-nowrap whitespace-pre">Page</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <IconsArrowDownSimpleLine />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] text-white">
      <p className="relative shrink-0 text-nowrap whitespace-pre">Home</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">Shop</p>
      <p className="relative shrink-0 w-[84px]">Product</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">Articles</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">Contact Us</p>
    </div>
  );
}

function Links1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[32px] relative shrink-0 w-[311px]" data-name="links">
      <div aria-hidden="true" className="absolute border-[#6c7275] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Toggle />
      <Frame5 />
    </div>
  );
}

function IconsArrowDownSimpleLine1() {
  return (
    <div className="relative size-[24px]" data-name="icons/Arrow Down Simple/Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icons/Arrow Down Simple/Line">
          <path clipRule="evenodd" d={svgPaths.p24c50de0} fill="var(--fill-0, #FEFEFE)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="toggle">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-nowrap whitespace-pre">Info</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <IconsArrowDownSimpleLine1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
      <p className="relative shrink-0">Shipping Policy</p>
      <p className="relative shrink-0">{`Return & Refund`}</p>
      <p className="relative shrink-0">Support</p>
      <p className="relative shrink-0">FAQs</p>
    </div>
  );
}

function Links2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[32px] relative shrink-0 w-[311px]" data-name="links">
      <div aria-hidden="true" className="absolute border-[#6c7275] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Toggle1 />
      <Frame4 />
    </div>
  );
}

function Toggle2() {
  return (
    <div className="content-stretch flex gap-[26px] items-center relative shrink-0 w-full" data-name="toggle">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-nowrap whitespace-pre">Office</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="relative shrink-0 w-[161px]">43111 Hai Trieu street,</p>
      <p className="relative shrink-0 w-[161px]">District 1, HCMC</p>
      <p className="relative shrink-0 w-[161px]">Vietnam</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[18px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] text-white">
      <Frame6 />
      <p className="relative shrink-0 w-[161px]">84-756-3237</p>
    </div>
  );
}

function Links3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-start px-0 py-[32px] relative shrink-0 w-[311px]" data-name="links">
      <Toggle2 />
      <Frame7 />
    </div>
  );
}

function Content25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="content">
      <Links />
      <Links1 />
      <Links2 />
      <Links3 />
    </div>
  );
}

function PaymentMethods1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[311px]" data-name="payment methods">
      <PaymentMethods className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="Amex" className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="Mastercard" className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="Stripe" className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="PayPal" className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="ApplePay" className="h-[32px] relative shrink-0 w-[48px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[28px] items-start relative shrink-0 text-[#fefefe]">
      <p className="relative shrink-0">Privacy Policy</p>
      <p className="relative shrink-0">Terms of Use</p>
    </div>
  );
}

function Copyright() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-center leading-[20px] not-italic relative shrink-0 text-[12px] text-nowrap w-[311px] whitespace-pre" data-name="copyright">
      <Frame3 />
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#e8ecef]">Copyright © 2023 3legant. All rights reserved</p>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] items-center px-0 py-[24px] relative shrink-0 w-[311px]" data-name="bottom bar">
      <div aria-hidden="true" className="absolute border-[#6c7275] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <PaymentMethods1 />
      <Copyright />
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[311px]" data-name="content">
      <Content25 />
      <BottomBar />
    </div>
  );
}

export default function Homepage03Mobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Homepage 03 (mobile)">
      <NotificationBar />
      <NavigationBar />
      <HeroSection />
      <ProductCarousel />
      <Frame8 />
      <Banner />
      <BannerGrid />
      <BlogSection />
      <Content24 />
      <InstagramNewsfeed />
      <FooterMobile />
    </div>
  );
}