import svgPaths from "./svg-knufpe9i8k";
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
import imgImagePlaceholder3 from "figma:asset/17211fc46c4ccdc3487c5f7515429baaaf1507b4.png";
import img6 from "figma:asset/7b5fe67e42604bcc5d365e977b486682beeb66de.png";
import img7 from "figma:asset/58240a3d128558f36df46b415a06f2ff2df59df6.png";
import img8 from "figma:asset/9d1877db0e69147f1c4c545648901a7bd65a174c.png";
import imgImagePlaceholder4 from "figma:asset/0c745d3dc5547019a4bb88c0b289e92a0ee7a3f4.png";
import imgImagePlaceholder5 from "figma:asset/8557ca8ae98d788cb39e06854973771ce2408beb.png";
import imgInstagramElementsImage from "figma:asset/1d1a309cad23a72d24a85305f00df196b41d4773.png";
import imgInstagramElementsImage1 from "figma:asset/9ab0de662e28fa10e659a1acbbc99ecb89d85e7a.png";
import imgInstagramElementsImage2 from "figma:asset/6083781f02748b31636ad6f6111f0c2c7bac4c21.png";
import imgInstagramElementsImage3 from "figma:asset/fc6aee3082f8080b7bc0c5245a7472d96c9e2490.png";
import imgInstagramElementsImage4 from "figma:asset/2798397e5dab0fa6f912176b7846f5a2fc81d890.png";
import imgInstagramElementsImage5 from "figma:asset/c456d04e4963ce2362c0dd6120739fdb60471759.png";
import { imgBase } from "./svg-t5wd6";
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 15">
            <path d={svgPaths.pff2ef00} fill="var(--fill-0, #6461FC)" id="Stripe" />
          </svg>
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
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
            <path d={svgPaths.p29894e40} id="Rectangle 773" stroke="var(--stroke-0, #141718)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_11.34%]">
        <div className="absolute inset-[-4.17%_-4.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path d={svgPaths.p143ea300} id="Rectangle 772" stroke="var(--stroke-2, #141718)" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey e677be89acbe66cc1e6e53fc353c23245b5daf46
 */
function ElementsNavigationCartButton({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Elements/Navigation/Cart Button">
      <div className="absolute left-[30px] overflow-clip size-[20px] top-[4px]">
        <div className="absolute right-0 size-[20px] top-1/2 translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #141718)" id="Ellipse 1" r="10" />
          </svg>
        </div>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[10px] not-italic right-[10px] text-[12px] text-center text-nowrap text-white top-[calc(50%-5px)] translate-x-[50%] whitespace-pre">2</p>
      </div>
      <OutlineShoppingBag className="absolute left-px overflow-clip size-[24px] top-[2px]" />
    </div>
  );
}

/**
 * @figmaAssetKey 03272f08d27da77c94830730cae2030dff595737
 */
function InterfaceOutlineUserCircle({ className }: { className?: string }) {
  return (
    <div className={className} data-name="interface/outline/user-circle">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p96b0f00} id="Vector" stroke="var(--stroke-0, #141718)" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey a5b139edc43b0683aa497e135d9c04abf3e4231b
 */
function InterfaceOutlineSearch({ className }: { className?: string }) {
  return (
    <div className={className} data-name="interface/outline/search 02">
      <div className="absolute inset-[8.333%]" data-name="Vector">
        <div className="absolute inset-[-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.pa317b60} id="Vector" stroke="var(--stroke-0, #141718)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey c70f64957438f9e9c0c9672c232dfa9ae85b038a
 */
function ElementsNavigationLink({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Elements/Navigation/Link">
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute border-0 border-[#141718] border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
          <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Home</p>
        </div>
      </div>
    </div>
  );
}

function TextIcon() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-name="Text+Icon">
      <Ticketpercent />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap whitespace-pre">{`30% off storewide — Limited time! `}</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Shop Now</p>
      <Iconarrowright />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-black border-solid inset-0 pointer-events-none" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start justify-center left-[calc(50%-10px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Content">
      <TextIcon />
      <Button />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[105px]" data-name="Logo">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[24px] left-[52.5px] not-italic text-[24px] text-black text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">HYGEENIE</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Shop</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-[#141718] border-solid inset-0 pointer-events-none" />
      <Content2 />
      <Iconchevrondown />
    </div>
  );
}

function ElementsNavigationLink1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Elements/Navigation/Link">
      <Button1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Product</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-[#141718] border-solid inset-0 pointer-events-none" />
      <Content3 />
      <Iconchevrondown1 />
    </div>
  );
}

function ElementsNavigationLink2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Elements/Navigation/Link">
      <Button2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#141718] text-[14px] text-nowrap whitespace-pre">Contact Us</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-[#141718] border-solid inset-0 pointer-events-none" />
      <Content4 />
    </div>
  );
}

function ElementsNavigationLinkGroup() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0" data-name="Elements/Navigation/Link Group">
      <ElementsNavigationLink className="content-stretch flex gap-[2px] items-center relative shrink-0" />
      <ElementsNavigationLink1 />
      <ElementsNavigationLink2 />
      <ElementsNavigationLink3 />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Icons">
      <InterfaceOutlineSearch className="overflow-clip relative shrink-0 size-[24px]" />
      <InterfaceOutlineUserCircle className="overflow-clip relative shrink-0 size-[24px]" />
      <ElementsNavigationCartButton className="h-[28px] relative shrink-0 w-[50px]" />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Header">
      <div className="bg-clip-text font-['Poppins:Medium',sans-serif] leading-[80px] not-italic relative shrink-0 text-[72px] tracking-[-2px] w-full" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="mb-0">{`More than `}</p>
        <p className="mb-0">{`just a game. `}</p>
        <p>It’s a lifestyle.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <Header />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[#fefefe] text-[20px] w-[424px]">{`Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.`}</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-start justify-center left-[calc(50%-299.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[497px]" data-name="Content">
      <Text />
      <Button1 />
    </div>
  );
}

function Content6() {
  return (
    <div className="h-[820px] relative shrink-0 w-[1440px]" data-name="Content">
      <ImagePlaceholder2 />
      <Content5 />
    </div>
  );
}

function SliderSection() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Slider Section">
      <Content6 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1120px]" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[44px] not-italic relative shrink-0 text-[40px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Featured</p>
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

/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
function TextPrice() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">{`Shark - Men's cabretta white golf glove `}</p>
      <Price />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]" data-name="Content">
      <TextPrice />
    </div>
  );
}

/**
 * @figmaAssetKey ef4ab04dda8e90eed83adcfde3b847aa3b0a7f5e
 */
function ProductCard() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Product Card">
      <ElementsCard2 />
      <Content7 />
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

/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
function TextPrice1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">{`Greg Norman - Men's Shark Logo Golf Polo Shirt`}</p>
      <Price1 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]" data-name="Content">
      <TextPrice1 />
    </div>
  );
}

/**
 * @figmaAssetKey ef4ab04dda8e90eed83adcfde3b847aa3b0a7f5e
 */
function ProductCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Product Card">
      <ElementsCard3 />
      <Content8 />
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

/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
function TextPrice2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup2 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">G/FORE - Mens Left Glove Snow 2023</p>
      <Price2 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]" data-name="Content">
      <TextPrice2 />
    </div>
  );
}

/**
 * @figmaAssetKey ef4ab04dda8e90eed83adcfde3b847aa3b0a7f5e
 */
function ProductCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Product Card">
      <ElementsCard4 />
      <Content9 />
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

/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
function TextPrice3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup3 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">Utility Rover-R Double Strap Bag All Black - 2023</p>
      <Price3 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]" data-name="Content">
      <TextPrice3 />
    </div>
  );
}

/**
 * @figmaAssetKey ef4ab04dda8e90eed83adcfde3b847aa3b0a7f5e
 */
function ProductCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Product Card">
      <ElementsCard5 />
      <Content10 />
    </div>
  );
}

function Badges4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[16px]" data-name="Badges">
      <Badgemedium5 />
      <Badgemedium6 />
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

/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
/**
 * @figmaAssetKey d3fb6c0c2ac397819ca13f2d078fa3c2e8c56c83
 */
function TextPrice4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Text+Price">
      <RatingRatingGroup4 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[26px] min-w-full not-italic relative shrink-0 text-[#141718] text-[16px] w-[min-content]">Air Jordan 1 Low G Black/Black/Iron Grey - SS23</p>
      <Price4 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[262px]" data-name="Content">
      <TextPrice4 />
    </div>
  );
}

/**
 * @figmaAssetKey ef4ab04dda8e90eed83adcfde3b847aa3b0a7f5e
 */
function ProductCard4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Product Card">
      <ElementsCard6 />
      <Content11 />
    </div>
  );
}

function ProductCard5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1280px]" data-name="product card">
      <ProductCard />
      <ProductCard1 />
      <ProductCard2 />
      <ProductCard3 />
      <ProductCard4 />
    </div>
  );
}

function ProductCarousel() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-start pl-[160px] pr-0 py-[48px] relative shrink-0 w-[1440px]" data-name="Product Carousel">
      <Title />
      <ProductCard5 />
    </div>
  );
}

function Img() {
  return (
    <div className="h-[309px] relative shrink-0 w-[357px]" data-name="img">
      <div className="absolute h-[309px] left-0 top-0 w-[357px]" data-name="img">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[256px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Golf Clubs</p>
    </div>
  );
}

function Project() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="project">
      <Img />
      <Info />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[309px] relative shrink-0 w-[357px]" data-name="img">
      <div className="absolute h-[309px] left-0 top-0 w-[357px]" data-name="img">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[256px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Golf Balls</p>
    </div>
  );
}

function Project1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="project">
      <Img1 />
      <Info1 />
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[309px] relative shrink-0 w-[357px]" data-name="img">
      <div className="absolute h-[309px] left-0 top-0 w-[357px]" data-name="img">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[256px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Golf Bags</p>
    </div>
  );
}

function Project2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="project">
      <Img2 />
      <Info2 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Row1">
      <Project />
      <Project1 />
      <Project2 />
    </div>
  );
}

function Img3() {
  return (
    <div className="h-[309px] relative shrink-0 w-[357px]" data-name="img">
      <div className="absolute h-[309px] left-0 top-0 w-[357px]" data-name="img">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[256px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">{`Clothing & Rainwear`}</p>
    </div>
  );
}

function Project3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="project">
      <Img3 />
      <Info3 />
    </div>
  );
}

function Img4() {
  return (
    <div className="h-[309px] relative shrink-0 w-[357px]" data-name="img">
      <div className="absolute h-[309px] left-0 top-0 w-[357px]" data-name="img">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[256px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Footwear</p>
    </div>
  );
}

function Project4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="project">
      <Img4 />
      <Info4 />
    </div>
  );
}

function Img5() {
  return (
    <div className="h-[309px] relative shrink-0 w-[357px]" data-name="img">
      <div className="absolute h-[309px] left-0 top-0 w-[357px]" data-name="img">
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
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[256px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] text-center w-full">Accessories</p>
    </div>
  );
}

function Project5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="project">
      <Img5 />
      <Info5 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Row2">
      <Project3 />
      <Project4 />
      <Project5 />
    </div>
  );
}

function Categories() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[48px] items-center px-[160px] py-[80px] relative shrink-0 w-[1440px]" data-name="Categories">
      <p className="font-['Poppins:Medium',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#23262f] text-[40px] text-nowrap tracking-[-0.4px] whitespace-pre">Shop by Categories</p>
      <Row />
      <Row1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0" data-name="Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] min-w-full relative shrink-0 text-[#38cb89] text-[16px] uppercase w-[min-content]">Limited Edition</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[44px] min-w-full relative shrink-0 text-[#fefefe] text-[40px] tracking-[-0.4px] w-[min-content]">Hurry up! 30% OFF</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#fefefe] text-[20px] w-[452px]">Find clubs that are right for your game</p>
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
    <div className="absolute bg-[#141718] box-border content-stretch flex flex-col gap-[24px] h-[532px] items-start justify-center left-[720px] pl-[72px] pr-[160px] py-0 top-1/2 translate-y-[-50%] w-[720px]" data-name="Content">
      <Title1 />
      <Timer />
      <Button13 />
    </div>
  );
}

function Content13() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Content">
      <ImagePlaceholder3 />
      <Content12 />
    </div>
  );
}

function Banner() {
  return (
    <div className="h-[532px] relative shrink-0 w-[1440px]" data-name="Banner">
      <Content13 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[1120px]" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[44px] not-italic relative shrink-0 text-[40px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Shop Collection</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[360px]" data-name="Title">
      <p className="font-['Poppins:Medium',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#121212] text-[34px] tracking-[-0.6px] w-full">Juniors Set</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap tracking-[-0.4px] whitespace-pre">Collections</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#121212] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content14 />
      <Iconarrowright1 />
    </div>
  );
}

function Content15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[48px] top-[538px]" data-name="Content">
      <Title3 />
      <Button4 />
    </div>
  );
}

function ElementsCard() {
  return (
    <div className="h-[664px] relative shrink-0 w-[548px]" data-name="Elements/Card">
      <ImagePlaceholder4 />
      <Content15 />
    </div>
  );
}

function ImagePlaceholder() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Image Placeholder">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f3f5f7] inset-0" />
        <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
          <img alt="" className="absolute h-[99.12%] left-[41.94%] max-w-none top-[0.31%] w-[57.7%]" src={img5} />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap tracking-[-0.4px] whitespace-pre">Collections</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#121212] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content16 />
      <Iconarrowright2 />
    </div>
  );
}

function Content17() {
  return (
    <div className="absolute bottom-[40px] content-stretch flex flex-col gap-[12px] items-start left-[32px] w-[420px]" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#121212] text-[34px] tracking-[-0.6px] w-[516px]">Men’s Set</p>
      <Button5 />
    </div>
  );
}

function ImagePlaceholder1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Image Placeholder">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f3f5f7] inset-0" />
        <div className="absolute inset-0 mix-blend-multiply overflow-hidden">
          <img alt="" className="absolute h-[102.86%] left-[40.85%] max-w-none top-[-1.56%] w-[59.88%]" src={imgImagePlaceholder3} />
        </div>
      </div>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#121212] text-[16px] text-nowrap tracking-[-0.4px] whitespace-pre">Collections</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#121212] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content18 />
      <Iconarrowright3 />
    </div>
  );
}

function Content19() {
  return (
    <div className="absolute bottom-[40px] content-stretch flex flex-col gap-[12px] items-start left-[32px] w-[420px]" data-name="Content">
      <p className="font-['Poppins:Medium',sans-serif] leading-[38px] not-italic relative shrink-0 text-[#121212] text-[34px] tracking-[-0.6px] w-[516px]">Women’s Set</p>
      <Button6 />
    </div>
  );
}

function ElementsCard1() {
  return (
    <div className="h-[319px] relative shrink-0 w-[548px]" data-name="Elements/Card">
      <ImagePlaceholder1 />
      <Content19 />
    </div>
  );
}

function SmallCards() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[662px] items-start relative shrink-0 w-[548px]" data-name="Small Cards">
      <ElementsCard7 />
      <ElementsCard1 />
    </div>
  );
}

function BannerGrid() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[24px] items-start justify-center px-[160px] py-0 relative shrink-0 w-[1440px]" data-name="Banner Grid">
      <ElementsCard />
      <SmallCards />
    </div>
  );
}

function BannerGrid1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[48px] items-center px-0 py-[48px] relative shrink-0" data-name="Banner Grid">
      <Title2 />
      <BannerGrid />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#141718] text-[16px] text-nowrap tracking-[-0.4px] whitespace-pre">View More</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#141718] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content20 />
      <Iconarrowright4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1121px]">
      <p className="font-['Poppins:Medium',sans-serif] leading-[44px] not-italic relative shrink-0 text-[40px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Latest Articles</p>
      <Button7 />
    </div>
  );
}

function ImgContainer() {
  return (
    <div className="h-[325px] relative shrink-0 w-[357px]" data-name="img container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img6} />
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#141718] text-[16px] text-nowrap tracking-[-0.4px] whitespace-pre">Read More</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#141718] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content21 />
      <Iconarrowright5 />
    </div>
  );
}

function Info6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[352px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] w-[352px]">Air Jordan x Travis Scott Event</p>
      <Button8 />
    </div>
  );
}

function Article() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Article">
      <ImgContainer />
      <Info6 />
    </div>
  );
}

function ImgContainer1() {
  return (
    <div className="h-[325px] relative shrink-0 w-[357px]" data-name="img container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img7} />
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#141718] text-[16px] text-nowrap tracking-[-0.4px] whitespace-pre">Read More</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#141718] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content22 />
      <Iconarrowright6 />
    </div>
  );
}

function Info7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[352px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] w-[352px]">The timeless classics on the green</p>
      <Button9 />
    </div>
  );
}

function Article1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Article">
      <ImgContainer1 />
      <Info7 />
    </div>
  );
}

function ImgContainer2() {
  return (
    <div className="h-[325px] relative shrink-0 w-[357px]" data-name="img container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img8} />
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#141718] text-[16px] text-nowrap tracking-[-0.4px] whitespace-pre">Read More</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#141718] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Content23 />
      <Iconarrowright7 />
    </div>
  );
}

function Info8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[352px]" data-name="info">
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#23262f] text-[20px] w-[352px]">The 2023 Ryder Cup</p>
      <Button10 />
    </div>
  );
}

function Article2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Article">
      <ImgContainer2 />
      <Info8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[25px] items-start relative shrink-0">
      <Article />
      <Article1 />
      <Article2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-[#fefefe] text-center" data-name="Header">
      <p className="font-['Poppins:Medium',sans-serif] leading-[44px] relative shrink-0 text-[40px] tracking-[-0.4px] w-[456px]">Join Our Newsletter</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[18px] w-[540px]">Sign up for deals, new products and promotions</p>
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

function Content24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-nowrap tracking-[-0.4px] whitespace-pre">Signup</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-[#fefefe] border-solid inset-0 pointer-events-none" />
      <Content24 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex gap-[8px] h-[52px] items-center relative shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#fefefe] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <IconInput />
      <Button11 />
    </div>
  );
}

function FormInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[52px] items-center justify-center relative shrink-0 w-[488px]" data-name="Form Input">
      <Input />
    </div>
  );
}

function Content25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[450px] top-[101px]" data-name="Content">
      <Header1 />
      <FormInput />
    </div>
  );
}

function Banner1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="banner">
      <ImagePlaceholder5 />
      <Content25 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="h-[360px] relative shrink-0 w-[1440px]" data-name="Newsletter">
      <Banner1 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center" data-name="Title">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] min-w-full relative shrink-0 text-[#6c7275] text-[16px] uppercase w-[min-content]">newsfeed</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[44px] min-w-full relative shrink-0 text-[#141718] text-[40px] tracking-[-0.4px] w-[min-content]">Instagram</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#141718] text-[20px] text-nowrap whitespace-pre">{`Follow us on social media for more discount & promotions`}</p>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] relative shrink-0 text-[#6c7275] text-[20px] text-nowrap whitespace-pre">@3legant_official</p>
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Cards">
      <InstagramElementsImage />
      <InstagramElementsImage1 />
      <InstagramElementsImage2 />
      <InstagramElementsImage3 />
      <InstagramElementsImage4 />
      <InstagramElementsImage5 />
    </div>
  );
}

function InstagramNewsfeed() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[40px] items-center pb-0 pt-[40px] px-[160px] relative shrink-0 w-[1440px]" data-name="Instagram newsfeed">
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
      <Socialoutlineinstagram />
      <Socialoutlinefacebook />
      <Socialoutlineyoutube />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[544px]">
      <Logo1 />
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#fefefe] text-[20px] w-[260px]">More than just a game. It’s a lifestyle.</p>
      <SocialIcon />
    </div>
  );
}

function Frame2() {
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[160px]">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-nowrap whitespace-pre">Page</p>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
      <p className="relative shrink-0">Shipping Policy</p>
      <p className="relative shrink-0">{`Return & Refund`}</p>
      <p className="relative shrink-0">Support</p>
      <p className="relative shrink-0">FAQs</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[160px]">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-nowrap whitespace-pre">Info</p>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <p className="relative shrink-0 w-[161px]">43111 Hai Trieu street,</p>
      <p className="relative shrink-0 w-[161px]">District 1, HCMC</p>
      <p className="relative shrink-0 w-[161px]">Vietnam</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[18px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] text-white">
      <Frame4 />
      <p className="relative shrink-0 w-[161px]">84-756-3237</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[160px]">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-nowrap whitespace-pre">Office</p>
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
      <Frame5 />
      <Frame7 />
      <Frame8 />
      <Frame10 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-center pl-[16px] pr-0 py-0 relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#6c7275] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6c7275] text-[12px] text-nowrap text-right whitespace-pre">Privacy Policy</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6c7275] text-[12px] text-nowrap text-right whitespace-pre">{`Terms & Conditions`}</p>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[1120px]" data-name="content">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#e8ecef] text-[12px] text-nowrap whitespace-pre">Copyright © 2023 3legant. All rights reserved</p>
      <Frame6 />
    </div>
  );
}

function PaymentMethods1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[328px]" data-name="payment methods">
      <PaymentMethods className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="Amex" className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="Mastercard" className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="Stripe" className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="PayPal" className="h-[32px] relative shrink-0 w-[48px]" />
      <PaymentMethods card="ApplePay" className="h-[32px] relative shrink-0 w-[48px]" />
    </div>
  );
}

function BottomBarContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1120px]" data-name="bottom bar content">
      <Content26 />
      <PaymentMethods1 />
    </div>
  );
}

function BottomBar() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[32px] h-[96px] items-start justify-center px-0 py-[32px] relative shrink-0" data-name="bottom bar">
      <div aria-hidden="true" className="absolute border-[#6c7275] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <BottomBarContent />
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0" data-name="content">
      <Frame11 />
      <BottomBar />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black box-border content-stretch flex flex-col gap-[49px] items-start pb-[32px] pt-[80px] px-[160px] relative shrink-0" data-name="Footer">
      <Content27 />
    </div>
  );
}

/**
 * @figmaAssetKey 41ebb186e2889863cbe019aec7811e3c9cb1da97
 */
export default function Homepage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Homepage 03">
      <NotificationBar />
      <NavigationBar />
      <SliderSection />
      <ProductCarousel />
      <Categories />
      <Banner />
      <BannerGrid1 />
      <BlogSection />
      <Newsletter />
      <InstagramNewsfeed />
      <Footer />
    </div>
  );
}