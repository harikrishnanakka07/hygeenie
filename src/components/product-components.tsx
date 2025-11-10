import { StarRating } from "./shared-components";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  badge?: string;
  badgeColor?: string;
  className?: string;
};

export function ProductCard({ 
  image, 
  title, 
  price, 
  originalPrice, 
  rating = 5, 
  badge, 
  badgeColor = "bg-[#141718]",
  className 
}: ProductCardProps) {
  return (
    <div className={`flex flex-col gap-3 group cursor-pointer ${className}`}>
      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#f3f5f7]">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        {badge && (
          <div className={`absolute top-4 left-4 ${badgeColor} text-white px-3.5 py-1 rounded text-sm uppercase`}>
            {badge}
          </div>
        )}
        <button className="absolute bottom-4 left-4 right-4 bg-[#141718] text-white py-2 px-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          Add to cart
        </button>
      </div>
      <div className="flex flex-col gap-1">
        <StarRating rating={rating} />
        <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[#141718] line-clamp-2">{title}</h3>
        <div className="flex gap-3 items-center">
          <span className="font-['Inter:Semi_Bold',sans-serif] text-[#121212]">{price}</span>
          {originalPrice && (
            <span className="font-['Inter:Regular',sans-serif] text-[#6c7275] line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

type CategoryCardProps = {
  image: string;
  title: string;
  className?: string;
};

export function CategoryCard({ image, title, className }: CategoryCardProps) {
  return (
    <div className={`flex flex-col gap-6 items-center cursor-pointer group ${className}`}>
      <div className="w-full aspect-square bg-[#f3f5f7] rounded-lg overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-contain transition-transform group-hover:scale-105 p-8"
        />
      </div>
      <h3 className="font-['Poppins:Medium',sans-serif] text-[#23262f] text-xl text-center">{title}</h3>
    </div>
  );
}

type CollectionCardProps = {
  image: string;
  title: string;
  linkText?: string;
  className?: string;
  imageClassName?: string;
};

export function CollectionCard({ image, title, linkText = "Collection", className, imageClassName }: CollectionCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg group cursor-pointer ${className}`}>
      <ImageWithFallback 
        src={image} 
        alt={title}
        className={`w-full h-full object-cover ${imageClassName}`}
      />
      <div className="absolute bottom-8 left-8 right-8">
        <h3 className="font-['Poppins:Medium',sans-serif] text-[#121212] text-3xl mb-3">{title}</h3>
        <button className="flex items-center gap-1 border-b border-[#121212] pb-0.5 group-hover:gap-2 transition-all">
          <span className="font-['Inter:Medium',sans-serif] text-[#121212]">{linkText}</span>
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

type ArticleCardProps = {
  image: string;
  title: string;
  className?: string;
};

export function ArticleCard({ image, title, className }: ArticleCardProps) {
  return (
    <div className={`flex flex-col gap-6 cursor-pointer group ${className}`}>
      <div className="w-full aspect-[357/325] overflow-hidden rounded-lg">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-['Poppins:Medium',sans-serif] text-[#23262f] text-xl">{title}</h3>
        <button className="flex items-center gap-1 border-b border-[#141718] pb-0.5 w-fit group-hover:gap-2 transition-all">
          <span className="font-['Inter:Medium',sans-serif] text-[#141718]">Read More</span>
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
