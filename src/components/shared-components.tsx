import { imgBase, imgStripe, imgRectangle773, imgRectangle772, imgVector, imgVector1 } from "../imports/svg-d8ai8";
import svgPaths from "../imports/svg-tt2xgrbx7d";

type PaymentMethodsProps = {
  className?: string;
  card?: "Amex" | "ApplePay" | "Mastercard" | "PayPal" | "Stripe" | "Visa";
};

export function PaymentMethods({ className, card = "Visa" }: PaymentMethodsProps) {
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
              <path d="M22.2949 0C27.6548 0 32 4.39495 32 9.81641C32 15.2379 27.6548 19.6328 22.2949 19.6328C19.892 19.6328 17.6949 18.7473 16 17.2842C14.3051 18.7474 12.108 19.6328 9.70508 19.6328C4.34522 19.6328 0 15.2379 0 9.81641C2.54775e-06 4.39495 4.34522 0 9.70508 0C12.1077 4.7674e-05 14.3052 0.884736 16 2.34766C17.6948 0.884745 19.8922 2.36041e-05 22.2949 0Z" fill="var(--fill-0, #ED0006)" />
              <path d="M22.2949 0C27.6547 0 31.9999 4.39495 31.9999 9.81641C31.9999 15.2379 27.6547 19.6328 22.2949 19.6328C19.892 19.6328 17.6948 18.7473 15.9999 17.2842C18.0856 15.4837 19.4101 12.8073 19.4101 9.81641C19.4101 6.82531 18.0858 4.14816 15.9999 2.34766C17.6948 0.884745 19.8922 2.36041e-05 22.2949 0Z" fill="var(--fill-0, #F9A000)" />
              <path d="M15.9993 2.34795C18.0853 4.14846 19.4095 6.82554 19.4095 9.8167C19.4094 12.8074 18.0848 15.4831 15.9993 17.2835C13.9141 15.4831 12.5902 12.8072 12.5901 9.8167C12.5901 6.82579 13.9136 4.14845 15.9993 2.34795Z" fill="var(--fill-0, #FF5E00)" />
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

export function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
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

export function UserCircleIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute inset-[8.333%]">
        <div className="absolute inset-[-3.75%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </div>
  );
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute inset-[8.333%]">
        <div className="absolute inset-[-3.75%]">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
    </div>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic text-[24px] text-black text-center">
        HYGEENIE
      </p>
    </div>
  );
}

export function StarRating({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="size-4" fill={i < rating ? "#FD7E14" : "#A7A7A7"} viewBox="0 0 14 14">
          <path d="M6.40924 0.307985C6.58004 -0.102661 7.16177 -0.102662 7.33256 0.307984L8.86965 4.00358C8.94165 4.1767 9.10446 4.29498 9.29135 4.30996L13.2811 4.62982C13.7244 4.66536 13.9041 5.21861 13.5664 5.50795L10.5266 8.1118C10.3842 8.23378 10.3221 8.42517 10.3656 8.60754L11.2943 12.5008C11.3974 12.9334 10.9268 13.2754 10.5473 13.0435L7.13153 10.9572C6.97152 10.8595 6.77028 10.8595 6.61028 10.9572L3.19453 13.0435C2.81498 13.2754 2.34436 12.9334 2.44755 12.5008L3.37624 8.60754C3.41974 8.42517 3.35756 8.23378 3.21516 8.1118L0.17543 5.50795C-0.162339 5.21861 0.0174233 4.66536 0.46075 4.62982L4.45045 4.30996C4.63735 4.29498 4.80015 4.1767 4.87216 4.00358L6.40924 0.307985Z" />
        </svg>
      ))}
    </div>
  );
}
