import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Ticketpercent, 
  Iconarrowright, 
  Iconclose, 
  Iconchevrondown, 
  Iconchevrondown1,
  Iconemail,
  Iconarrowright1,
  Iconarrowright2,
  Iconarrowright3,
  Iconarrowright4,
  Iconarrowright5,
  Iconarrowright6,
  Iconarrowright7,
  Socialoutlineinstagram,
  Socialoutlinefacebook,
  Socialoutlineyoutube
} from './components/figma-icons';
import { 
  NavigationDots,
  Badgemedium,
  Badgemedium1,
  Badgemedium2,
  Badgemedium3,
  Badgemedium4,
  Badgemedium5,
  Badgemedium6,
  RatingRatingGroup,
  RatingRatingGroup1,
  RatingRatingGroup2,
  RatingRatingGroup3,
  RatingRatingGroup4,
  ElementsCard2,
  ElementsCard3,
  ElementsCard4,
  ElementsCard5,
  ElementsCard6,
  ImagePlaceholder2,
  ImagePlaceholder3,
  ImagePlaceholder4,
  ImagePlaceholder5,
  InstagramElementsImage,
  InstagramElementsImage1,
  InstagramElementsImage2,
  InstagramElementsImage3,
  InstagramElementsImage4,
  InstagramElementsImage5
} from './components/figma-elements';
import { Timer } from './components/timer-components';
import { Button1, Button12, Button13 } from './components/button-components';
import { PaymentMethods, ShoppingBagIcon, UserCircleIcon, SearchIcon, Logo } from './components/shared-components';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';
import { Input } from './components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './components/ui/sheet';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel 
} from './components/ui/dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
import { X, Menu, ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

// Unsplash Images for Categories
const imgImg = "https://images.unsplash.com/photo-1717667745852-a5bd6876c1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWJsZXMlMjBnYWRnZXRzJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzYyNzkzMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgImg1 = "https://images.unsplash.com/photo-1611818830725-bf98122340d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBsaXZpbmd8ZW58MXx8fHwxNzYyNzgzNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const imgImg2 = "https://images.unsplash.com/photo-1673505705687-dffbfd02b613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBiYWclMjBiYWNrcGFja3xlbnwxfHx8fDE3NjI3ODM5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgImg3 = "https://images.unsplash.com/photo-1739773375441-e8ded0ce3605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXBwYXJlbCUyMGNsb3RoaW5nfGVufDF8fHx8MTc2Mjc3ODU1N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const imgImg4 = "https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI3ODM5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const img2 = "https://images.unsplash.com/photo-1658910452978-eb91cfee1609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5fGVufDF8fHx8MTc2Mjc3NTM2OXww&ixlib=rb-4.1.0&q=80&w=1080";
const img5 = "https://images.unsplash.com/photo-1507654365241-45475e55f30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFzaGlvbiUyMGNhc3VhbHxlbnwxfHx8fDE3NjI3MzA5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgImagePlaceholder3 = "https://images.unsplash.com/photo-1708363390847-b4af54f45273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBmYXNoaW9uJTIwc3R5bGV8ZW58MXx8fHwxNzYyNzQ2NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080";

// Blog Post Images
const img6 = "https://images.unsplash.com/photo-1762343292182-b0cb71a19111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjB0cmVuZHN8ZW58MXx8fHwxNzYyNzgzNjA0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const img7 = "https://images.unsplash.com/photo-1730196343250-15a0049492c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lbGVzcyUyMGNsYXNzaWMlMjBmYXNoaW9ufGVufDF8fHx8MTc2Mjc4Mzk2N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const img8 = "https://images.unsplash.com/photo-1649694902788-9ccda3aa1d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHNob3BwaW5nJTIwZWNvfGVufDF8fHx8MTc2Mjc4Mjg2OXww&ixlib=rb-4.1.0&q=80&w=1080";

// Categories Data
const shopCategories = [
  { id: 1, name: "Electronics", description: "Gadgets & Tech", items: "500+ products", subcategories: ["Smartphones", "Laptops", "Audio", "Cameras"] },
  { id: 2, name: "Home & Living", description: "Furniture & Decor", items: "350+ products", subcategories: ["Furniture", "Bedding", "Kitchen", "Lighting"] },
  { id: 3, name: "Travel & Bags", description: "Luggage & Backpacks", items: "200+ products", subcategories: ["Backpacks", "Suitcases", "Travel Gear", "Wallets"] },
  { id: 4, name: "Fashion & Apparel", description: "Clothing & Style", items: "800+ products", subcategories: ["Men's Wear", "Women's Wear", "Kids", "Activewear"] },
  { id: 5, name: "Shoes & Sneakers", description: "Footwear Collection", items: "450+ products", subcategories: ["Running Shoes", "Casual", "Formal", "Sports"] },
  { id: 6, name: "Accessories", description: "Jewelry & More", items: "300+ products", subcategories: ["Watches", "Jewelry", "Sunglasses", "Belts"] },
  { id: 7, name: "Sports & Fitness", description: "Active Lifestyle", items: "280+ products", subcategories: ["Gym Equipment", "Yoga", "Outdoor", "Nutrition"] },
  { id: 8, name: "Beauty & Care", description: "Cosmetics & Wellness", items: "320+ products", subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances"] },
];

// Products Data
const featuredProducts = [
  { id: 1, name: "Premium Leather Crossbody Bag", price: 1590, category: "Fashion", badge: "New", rating: 4.5 },
  { id: 2, name: "Classic Cotton T-Shirt", price: 2090, category: "Apparel", badge: "Hot", rating: 4.8 },
  { id: 3, name: "Wireless Noise-Canceling Headphones", price: 2505, category: "Electronics", badge: "Sale", rating: 4.7 },
  { id: 4, name: "Minimalist Watch - Silver", price: 3340, category: "Accessories", badge: "New", rating: 4.6 },
  { id: 5, name: "Running Sneakers Pro", price: 4175, category: "Footwear", badge: "Hot", rating: 4.9 },
  { id: 6, name: "Smart Fitness Tracker", price: 2920, category: "Electronics", badge: "New", rating: 4.4 },
  { id: 7, name: "Designer Sunglasses", price: 1675, category: "Accessories", badge: "Sale", rating: 4.5 },
  { id: 8, name: "Yoga Mat Premium", price: 835, category: "Sports", badge: "New", rating: 4.7 },
  { id: 9, name: "Portable Bluetooth Speaker", price: 2090, category: "Electronics", badge: "Hot", rating: 4.6 },
  { id: 10, name: "Leather Wallet", price: 1255, category: "Accessories", badge: "Sale", rating: 4.8 },
  { id: 11, name: "Organic Skincare Set", price: 3340, category: "Beauty", badge: "New", rating: 4.9 },
  { id: 12, name: "Professional Camera Lens", price: 8350, category: "Electronics", badge: "Hot", rating: 4.7 },
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function ElementsNavigationCartButton({ 
  className, 
  cartCount, 
  onClick 
}: { 
  className?: string; 
  cartCount: number;
  onClick: () => void;
}) {
  return (
    <motion.div 
      className={`${className} cursor-pointer`} 
      data-name="Elements/Navigation/Cart Button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div 
            className="absolute left-[30px] overflow-clip size-[20px] top-[4px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div className="absolute right-0 size-[20px] top-1/2 translate-y-[-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" fill="var(--fill-0, #141718)" id="Ellipse 1" r="10" />
              </svg>
            </div>
            <p className="absolute font-['Inter:Bold',sans-serif] leading-[10px] not-italic right-[10px] text-[12px] text-center text-nowrap text-white top-[calc(50%-5px)] translate-x-[50%] whitespace-pre">
              {cartCount}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <ShoppingBagIcon className="absolute left-px overflow-clip size-[24px] top-[2px]" />
    </motion.div>
  );
}

function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="bg-[#38cb89] relative w-full overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center py-2 px-4 md:px-8 mx-auto max-w-[1440px]">
            <div className="hidden md:flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
              >
                <Ticketpercent className="size-5" />
              </motion.div>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] leading-[22px] text-black">
                Free shipping on orders over ₹4000 — Limited time!
              </p>
              <motion.button 
                className="flex items-center gap-1 border-b border-black pb-0.5 ml-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-['Inter:Medium',sans-serif] text-[14px] leading-[24px] text-black">Shop Now</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Iconarrowright className="text-black" />
                </motion.div>
              </motion.button>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <Ticketpercent className="size-4" />
              <p className="font-['Inter:Semi_Bold',sans-serif] text-xs text-black">
                Free shipping on orders over ₹4000!
              </p>
            </div>
            <motion.button 
              onClick={() => setIsVisible(false)} 
              className="absolute right-4"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Iconclose className="text-black" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CartSheet({ 
  open, 
  onOpenChange, 
  cartItems, 
  onRemoveItem 
}: { 
  open: boolean; 
  onOpenChange: (open: boolean) => void;
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void;
}) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart ({cartItems.length})</SheetTitle>
          <SheetDescription>
            Review your items and proceed to checkout
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex gap-4 items-start border-b pb-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="w-20 h-20 bg-gray-100 rounded"></div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    <p className="font-semibold mt-1">₹{item.price.toFixed(0)}</p>
                  </div>
                  <motion.button
                    onClick={() => onRemoveItem(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              ))}
              <div className="pt-4 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold">₹{total.toFixed(0)}</span>
                </div>
                <motion.button
                  className="w-full bg-black text-white py-3 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    toast.success('Proceeding to checkout...');
                    onOpenChange(false);
                  }}
                >
                  Checkout
                </motion.button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NavigationBar({ 
  onSearchClick, 
  onCartClick, 
  cartCount 
}: { 
  onSearchClick: () => void;
  onCartClick: () => void;
  cartCount: number;
}) {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.success(`Searching for "${searchQuery}"...`);
      setSearchQuery('');
      setSearchExpanded(false);
    }
  };

  const handleSearchClick = () => {
    setSearchExpanded(true);
    setTimeout(() => searchInputRef.current?.focus(), 100);
  };

  const handleSearchBlur = () => {
    if (!searchQuery) {
      setSearchExpanded(false);
    }
  };

  return (
    <>
      <div className="bg-white border-b border-gray-100 w-full sticky top-0 z-50">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[160px] mx-auto max-w-[1440px]">
          <div className="flex items-center gap-4">
            <motion.button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="size-6" />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
            >
              <Logo className="h-[20px] md:h-[24px] w-[88px] md:w-[105px]" />
            </motion.div>
          </div>

        <div className="hidden md:flex items-center gap-10">
          <motion.button 
            className="flex items-center gap-[2px]"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => toast.info('Navigating to Home...')}
          >
            <p className="font-['Space_Grotesk:Medium',sans-serif] leading-[24px] text-[#141718] text-[14px]">Home</p>
          </motion.button>
          
          {/* Shop Menu Trigger */}
          <div 
            onMouseEnter={() => setShopDropdownOpen(true)}
            onMouseLeave={() => setShopDropdownOpen(false)}
          >
            <motion.button 
              className="flex items-center gap-[2px] group outline-none"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-['Space_Grotesk:Medium',sans-serif] leading-[24px] text-[#141718] text-[14px]">Shop</p>
              <motion.div
                animate={{ rotate: shopDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Iconchevrondown />
              </motion.div>
            </motion.button>
          </div>
          
          {/* Product Menu Trigger */}
          <div 
            onMouseEnter={() => setProductDropdownOpen(true)}
            onMouseLeave={() => setProductDropdownOpen(false)}
          >
            <motion.button 
              className="flex items-center gap-[2px] group outline-none"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-['Space_Grotesk:Medium',sans-serif] leading-[24px] text-[#141718] text-[14px]">Product</p>
              <motion.div
                animate={{ rotate: productDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Iconchevrondown1 />
              </motion.div>
            </motion.button>
          </div>
          
          <motion.button 
            className="flex items-center gap-[2px]"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            onClick={() => toast.info('Opening Contact Us...')}
          >
            <p className="font-['Space_Grotesk:Medium',sans-serif] leading-[24px] text-[#141718] text-[14px]">Contact Us</p>
          </motion.button>
        </div>

        <div className="flex items-center gap-4">
          <AnimatePresence mode="wait">
            {searchExpanded ? (
              <motion.form
                key="search-bar"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 240, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onSubmit={handleSearchSubmit}
                className="hidden md:flex items-center overflow-hidden"
              >
                <div className="relative w-full">
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={handleSearchBlur}
                    className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery('');
                        searchInputRef.current?.focus();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="size-4" />
                    </button>
                  )}
                </div>
              </motion.form>
            ) : (
              <motion.button
                key="search-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSearchClick}
              >
                <SearchIcon className="overflow-clip size-[24px] relative" />
              </motion.button>
            )}
          </AnimatePresence>
          <motion.button
            className="hidden md:block cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toast.info('Sign in coming soon!')}
          >
            <UserCircleIcon className="overflow-clip size-[24px] relative" />
          </motion.button>
          <ElementsNavigationCartButton 
            className="h-[28px] w-[50px] relative" 
            cartCount={cartCount}
            onClick={onCartClick}
          />
        </div>
      </div>
        {/* Shop Mega Menu Dropdown */}
        <AnimatePresence>
          {shopDropdownOpen && (
            <div
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200"
                style={{ width: '100%' }}
              >
                <div className="max-w-7xl mx-auto px-8 py-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-['Poppins:Semi_Bold',sans-serif] text-[20px] text-[#141718]">
                      Shop by Category
                    </h3>
                    <motion.button
                      className="text-purple-600 font-['Inter:Semi_Bold',sans-serif] text-[14px] flex items-center gap-2 hover:gap-3 transition-all"
                      onClick={() => {
                        toast.info('View all categories...');
                        setShopDropdownOpen(false);
                      }}
                    >
                      View All Categories <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  {/* 4-Column Grid for Categories */}
                  <div className="grid grid-cols-4 gap-6 mb-6">
                    {shopCategories.map((category) => (
                      <motion.div
                        key={category.id}
                        className="group cursor-pointer"
                        whileHover={{ x: 4 }}
                        onClick={() => {
                          toast.success(`Browsing ${category.name}...`);
                          setShopDropdownOpen(false);
                        }}
                      >
                        <div className="border-l-4 border-transparent group-hover:border-purple-600 pl-4 py-2 transition-all">
                          <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#141718] mb-1 group-hover:text-purple-600 transition-colors">
                            {category.name}
                          </h4>
                          <p className="text-[13px] text-gray-500 font-['Inter:Regular',sans-serif] mb-2">
                            {category.description}
                          </p>
                          <p className="text-[11px] text-gray-400 font-['Inter:Medium',sans-serif] mb-3">
                            {category.items}
                          </p>
                          
                          {/* Subcategories */}
                          <ul className="space-y-1">
                            {category.subcategories.map((sub, idx) => (
                              <li 
                                key={idx}
                                className="text-[12px] text-gray-600 font-['Inter:Regular',sans-serif] hover:text-purple-600 transition-colors"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Featured Promotions */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    <motion.div 
                      className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5 cursor-pointer border border-purple-200"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        toast.success('Viewing Winter Sale...');
                        setShopDropdownOpen(false);
                      }}
                    >
                      <p className="font-['Poppins:Semi_Bold',sans-serif] text-[16px] text-purple-900 mb-1">
                        🔥 Winter Sale 2024
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-[13px] text-purple-700">
                        Up to 50% off on selected items
                      </p>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-5 cursor-pointer border border-pink-200"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        toast.info('Viewing New Arrivals...');
                        setShopDropdownOpen(false);
                      }}
                    >
                      <p className="font-['Poppins:Semi_Bold',sans-serif] text-[16px] text-pink-900 mb-1">
                        ✨ New Arrivals
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-[13px] text-pink-700">
                        Fresh styles just landed
                      </p>
                    </motion.div>

                    <motion.div 
                      className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-5 cursor-pointer border border-amber-200"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        toast.info('Viewing Trending...');
                        setShopDropdownOpen(false);
                      }}
                    >
                      <p className="font-['Poppins:Semi_Bold',sans-serif] text-[16px] text-amber-900 mb-1">
                        ⭐ Trending Now
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-[13px] text-amber-700">
                        Most popular this week
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Product Mega Menu Dropdown */}
        <AnimatePresence>
          {productDropdownOpen && (
            <div
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200"
                style={{ width: '100%' }}
              >
                <div className="max-w-7xl mx-auto px-8 py-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-['Poppins:Semi_Bold',sans-serif] text-[20px] text-[#141718]">
                      Featured Products
                    </h3>
                    <motion.button
                      className="text-purple-600 font-['Inter:Semi_Bold',sans-serif] text-[14px] flex items-center gap-2 hover:gap-3 transition-all"
                      onClick={() => {
                        toast.info('View all products...');
                        setProductDropdownOpen(false);
                      }}
                    >
                      View All Products <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Product List - 4 Columns */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {featuredProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        className="group cursor-pointer border border-gray-200 rounded-lg p-4 hover:border-purple-600 hover:shadow-md transition-all"
                        whileHover={{ y: -2 }}
                        onClick={() => {
                          toast.success(`Viewing ${product.name}...`);
                          setProductDropdownOpen(false);
                        }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#141718] mb-1 group-hover:text-purple-600 transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-[12px] text-gray-500 font-['Inter:Regular',sans-serif]">
                              {product.category}
                            </p>
                          </div>
                          {product.badge && (
                            <span className={`px-2 py-1 rounded-full text-[10px] font-['Inter:Semi_Bold',sans-serif] text-white ${
                              product.badge === 'New' ? 'bg-green-500' :
                              product.badge === 'Hot' ? 'bg-red-500' :
                              'bg-purple-600'
                            }`}>
                              {product.badge}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <span className="font-['Inter:Bold',sans-serif] text-[15px] text-purple-600">
                            ₹{product.price}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-[11px] text-gray-600 font-['Inter:Medium',sans-serif]">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Collections & Quick Links */}
                  <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                    <motion.div
                      className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 cursor-pointer border border-purple-200"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        toast.info('Viewing trending products...');
                        setProductDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-purple-900">
                          Trending Now
                        </p>
                      </div>
                      <p className="text-[11px] text-purple-700 font-['Inter:Regular',sans-serif]">
                        Most popular items
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4 cursor-pointer border border-pink-200"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        toast.info('Viewing new arrivals...');
                        setProductDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-pink-600" />
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-pink-900">
                          New Arrivals
                        </p>
                      </div>
                      <p className="text-[11px] text-pink-700 font-['Inter:Regular',sans-serif]">
                        Fresh collection
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4 cursor-pointer border border-amber-200"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        toast.info('Viewing best sellers...');
                        setProductDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-amber-600" />
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-amber-900">
                          Best Sellers
                        </p>
                      </div>
                      <p className="text-[11px] text-amber-700 font-['Inter:Regular',sans-serif]">
                        Top rated items
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 cursor-pointer border border-emerald-200"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        toast.info('Viewing sale items...');
                        setProductDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-emerald-600" />
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-emerald-900">
                          On Sale
                        </p>
                      </div>
                      <p className="text-[11px] text-emerald-700 font-['Inter:Regular',sans-serif]">
                        Limited time offers
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-8 flex flex-col gap-6">
            <motion.button 
              className="text-left font-['Space_Grotesk:Medium',sans-serif] text-[16px] text-[#141718]"
              onClick={() => {
                setMobileMenuOpen(false);
                toast.info('Navigating to Home...');
              }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
            <motion.button 
              className="text-left font-['Space_Grotesk:Medium',sans-serif] text-[16px] text-[#141718]"
              onClick={() => {
                setMobileMenuOpen(false);
                toast.info('Opening Shop...');
              }}
              whileTap={{ scale: 0.95 }}
            >
              Shop
            </motion.button>
            <motion.button 
              className="text-left font-['Space_Grotesk:Medium',sans-serif] text-[16px] text-[#141718]"
              onClick={() => {
                setMobileMenuOpen(false);
                toast.info('Viewing Products...');
              }}
              whileTap={{ scale: 0.95 }}
            >
              Product
            </motion.button>
            <motion.button 
              className="text-left font-['Space_Grotesk:Medium',sans-serif] text-[16px] text-[#141718]"
              onClick={() => {
                setMobileMenuOpen(false);
                toast.info('Opening Contact...');
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            <div className="border-t border-gray-200 pt-6 mt-2">
              <motion.button 
                className="text-left font-['Space_Grotesk:Medium',sans-serif] text-[16px] text-[#141718]"
                onClick={() => {
                  setMobileMenuOpen(false);
                  toast.info('Sign in coming soon!');
                }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

function HeroSection() {
  return (
    <div className="relative w-full bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              New Arrivals 2024
            </motion.span>
            
            <h1 className="font-['Poppins:Bold',sans-serif] text-gray-900 leading-tight">
              <span className="block text-4xl md:text-6xl lg:text-7xl mb-2">
                Discover Your
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h1>
            
            <p className="font-['Inter:Regular',sans-serif] text-lg text-gray-600 max-w-md">
              Explore our curated collection of premium products designed for the modern lifestyle. Quality meets elegance.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                onClick={() => toast.success('Browsing collection...')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-['Inter:Semi_Bold',sans-serif] shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Now
              </motion.button>
              <motion.button
                onClick={() => toast.info('Viewing collections...')}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-['Inter:Semi_Bold',sans-serif] hover:border-gray-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Collections
              </motion.button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-gray-200 mt-8">
              <div>
                <p className="text-2xl font-['Poppins:Semi_Bold',sans-serif] text-gray-900">500+</p>
                <p className="text-sm text-gray-600 font-['Inter:Regular',sans-serif]">Products</p>
              </div>
              <div>
                <p className="text-2xl font-['Poppins:Semi_Bold',sans-serif] text-gray-900">25K+</p>
                <p className="text-sm text-gray-600 font-['Inter:Regular',sans-serif]">Customers</p>
              </div>
              <div>
                <p className="text-2xl font-['Poppins:Semi_Bold',sans-serif] text-gray-900">4.8★</p>
                <p className="text-sm text-gray-600 font-['Inter:Regular',sans-serif]">Rating</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Product Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mb-4" />
                <p className="font-['Inter:Semi_Bold',sans-serif] text-gray-900">Premium Watch</p>
                <p className="text-sm text-gray-500">₹24,999</p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg mt-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4" />
                <p className="font-['Inter:Semi_Bold',sans-serif] text-gray-900">Designer Bag</p>
                <p className="text-sm text-gray-500">₹16,599</p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl mb-4" />
                <p className="font-['Inter:Semi_Bold',sans-serif] text-gray-900">Sunglasses</p>
                <p className="text-sm text-gray-500">₹12,399</p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg mt-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-xl mb-4" />
                <p className="font-['Inter:Semi_Bold',sans-serif] text-gray-900">Headphones</p>
                <p className="text-sm text-gray-500">₹20,799</p>
              </motion.div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <p className="font-['Inter:Bold',sans-serif]">50% OFF</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ 
  card, 
  badge, 
  badge2, 
  rating, 
  title, 
  price, 
  oldPrice,
  onAddToCart 
}: { 
  card: React.ReactNode;
  badge?: React.ReactNode;
  badge2?: React.ReactNode;
  rating: React.ReactNode;
  title: string;
  price: string;
  oldPrice?: string;
  onAddToCart: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="flex flex-col gap-3"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[262px] h-[262px] overflow-hidden rounded-lg">
        {card}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {badge}
          {badge2}
        </div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                className="bg-white text-black px-6 py-3 rounded-lg font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onAddToCart}
              >
                Add to Cart
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-1 w-[262px]">
        {rating}
        <p className="font-['Inter:Semi_Bold',sans-serif] leading-[26px] text-[#141718] text-[16px]">
          {title}
        </p>
        <div className="flex gap-3">
          <span className="font-['Inter:Semi_Bold',sans-serif] leading-[22px] text-[#121212] text-[14px]">{price}</span>
          {oldPrice && (
            <span className="font-['Inter:Regular',sans-serif] leading-[22px] text-[#6c7275] text-[14px] line-through">{oldPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProductCarousel({ onAddToCart }: { onAddToCart: (product: { id: number; name: string; price: number }) => void }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 262 + 24; // card width + gap
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 262 + 24; // card width + gap
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white w-full px-4 sm:px-6 md:px-12 lg:pl-24 xl:pl-[160px] lg:pr-0 py-12">
      <motion.div 
        className="flex items-center justify-between mb-12 w-full max-w-[1120px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-['Poppins:Medium',sans-serif] leading-[32px] md:leading-[44px] text-[28px] md:text-[40px] text-black tracking-[-0.4px]">Featured</p>
        <div className="hidden md:flex gap-2">
          <motion.button 
            className="size-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            onClick={scrollPrev}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button 
            className="size-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            onClick={scrollNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </motion.div>

      <div className="w-full max-w-[1120px] overflow-hidden">
        <motion.div 
          ref={scrollContainerRef}
          className="flex gap-6 items-start overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
        <ProductCard
          card={<ElementsCard2 className="w-full h-full" />}
          badge={<Badgemedium />}
          rating={<RatingRatingGroup />}
          title="Premium Leather Crossbody Bag"
          price="₹1,590"
          onAddToCart={() => {
            onAddToCart({ id: 1, name: "Premium Leather Crossbody Bag", price: 1590 });
            toast.success('Added to cart!');
          }}
        />

        <ProductCard
          card={<ElementsCard3 className="w-full h-full" />}
          badge={<Badgemedium1 />}
          badge2={<Badgemedium2 />}
          rating={<RatingRatingGroup1 />}
          title="Classic Cotton T-Shirt - Multiple Colors"
          price="₹2,090"
          oldPrice="₹3,340"
          onAddToCart={() => {
            onAddToCart({ id: 2, name: "Classic Cotton T-Shirt - Multiple Colors", price: 2090 });
            toast.success('Added to cart!');
          }}
        />

        <ProductCard
          card={<ElementsCard4 className="w-full h-full" />}
          badge={<Badgemedium3 />}
          rating={<RatingRatingGroup2 />}
          title="Wireless Noise-Canceling Headphones"
          price="₹2,505"
          onAddToCart={() => {
            onAddToCart({ id: 3, name: "Wireless Noise-Canceling Headphones", price: 2505 });
            toast.success('Added to cart!');
          }}
        />

        <ProductCard
          card={<ElementsCard5 className="w-full h-full" />}
          badge={<Badgemedium4 />}
          rating={<RatingRatingGroup3 />}
          title="Modern Minimalist Backpack - All Black"
          price="₹17,549"
          onAddToCart={() => {
            onAddToCart({ id: 4, name: "Modern Minimalist Backpack - All Black", price: 17549 });
            toast.success('Added to cart!');
          }}
        />

        <ProductCard
          card={<ElementsCard6 className="w-full h-full" />}
          badge={<Badgemedium5 />}
          badge2={<Badgemedium6 />}
          rating={<RatingRatingGroup4 />}
          title="Premium Sneakers - Limited Edition"
          price="₹9,355"
          oldPrice="₹16,710"
          onAddToCart={() => {
            onAddToCart({ id: 5, name: "Premium Sneakers - Limited Edition", price: 9355 });
            toast.success('Added to cart!');
          }}
        />
        </motion.div>
      </div>
    </div>
  );
}

function CategoryCard({ 
  image, 
  title, 
  imageClass 
}: { 
  image: string; 
  title: string; 
  imageClass?: string;
}) {
  return (
    <motion.div 
      className="flex flex-col gap-6 items-center cursor-pointer w-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => toast.info(`Browsing ${title}...`)}
    >
      <motion.div 
        className="w-full aspect-[357/309] relative overflow-hidden rounded-lg bg-[#f3f5f7]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img alt={title} className="size-full object-cover" src={image} />
      </motion.div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[28px] text-[#23262f] text-[18px] md:text-[20px] text-center">{title}</p>
    </motion.div>
  );
}

function Categories() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[160px] py-20">
      <motion.p 
        className="font-['Poppins:Medium',sans-serif] leading-[32px] md:leading-[44px] text-[#23262f] text-[28px] md:text-[40px] tracking-[-0.4px] text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Shop by Categories
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
      >
        <CategoryCard
          image={imgImg}
          title="Electronics"
        />
        <CategoryCard
          image={imgImg1}
          title="Home & Living"
        />
        <CategoryCard
          image={imgImg2}
          title="Travel & Bags"
        />
        <CategoryCard
          image={imgImg3}
          title="Fashion & Apparel"
        />
        <CategoryCard
          image={imgImg4}
          title="Shoes & Sneakers"
        />
        <CategoryCard
          image={img2}
          title="Accessories"
        />
      </motion.div>
    </div>
  );
}

function Banner() {
  return (
    <div className="relative h-auto md:h-[532px] w-full overflow-hidden">
      <div className="hidden md:block">
        <ImagePlaceholder3 />
      </div>
      <motion.div 
        className="relative md:absolute md:left-1/2 lg:left-[720px] md:top-1/2 md:-translate-y-1/2 bg-[#141718] min-h-[400px] md:h-[532px] w-full md:w-[50%] lg:w-[720px] px-6 sm:px-8 md:px-[72px] md:pr-[160px] py-12 md:py-0 flex flex-col gap-6 items-start justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col gap-4">
          <motion.p 
            className="font-['Inter:Bold',sans-serif] leading-[16px] text-[#38cb89] text-[16px] uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Flash Sale
          </motion.p>
          <motion.p 
            className="font-['Poppins:Medium',sans-serif] leading-[44px] text-[#fefefe] text-[40px] tracking-[-0.4px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Hurry up! 30% OFF
          </motion.p>
          <motion.p 
            className="font-['Inter:Regular',sans-serif] leading-[26px] md:leading-[32px] text-[#fefefe] text-[16px] md:text-[20px] w-full max-w-[452px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Limited time offer on select premium products
          </motion.p>
        </div>
        <Timer />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button13 />
        </motion.div>
      </motion.div>
    </div>
  );
}

function CollectionCard({
  image,
  title,
  imageClass,
  containerClass
}: {
  image: string | React.ReactNode;
  title: string;
  imageClass?: string;
  containerClass?: string;
}) {
  return (
    <motion.div 
      className={`relative ${containerClass}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {typeof image === 'string' ? (
        <div className="absolute inset-0 bg-[#f3f5f7] rounded-lg overflow-hidden">
          <img alt="" className={imageClass} src={image} />
        </div>
      ) : (
        image
      )}
      <motion.div 
        className="absolute left-6 md:left-12 bottom-6 md:top-[538px] flex flex-col gap-3 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p className="font-['Poppins:Medium',sans-serif] leading-[32px] md:leading-[38px] text-[#121212] text-[24px] md:text-[34px] tracking-[-0.6px] w-full max-w-[360px]">
          {title}
        </p>
        <motion.button 
          className="flex items-center gap-1 border-b border-[#121212] pb-0.5 w-fit"
          whileHover={{ x: 5 }}
          onClick={() => toast.info(`Exploring ${title}...`)}
        >
          <span className="font-['Inter:Medium',sans-serif] leading-[28px] text-[#121212] text-[16px] tracking-[-0.4px]">Collections</span>
          <Iconarrowright1 className="text-[#121212]" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function BannerGrid1() {
  return (
    <div className="w-full py-12 flex flex-col gap-12 items-center px-4 sm:px-6 md:px-8">
      <motion.div 
        className="flex gap-2 items-center w-full max-w-[1120px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-['Poppins:Medium',sans-serif] leading-[32px] md:leading-[44px] text-[28px] md:text-[40px] text-black tracking-[-0.4px]">
          Shop Collection
        </p>
      </motion.div>

      <motion.div 
        className="bg-white flex flex-col lg:flex-row gap-6 items-start justify-center w-full max-w-[1440px] lg:px-[160px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <CollectionCard
          image={<ImagePlaceholder4 />}
          title="Tech & Gadgets"
          containerClass="h-[500px] md:h-[664px] w-full lg:w-[548px]"
        />

        <div className="flex flex-col gap-6 h-auto lg:h-[662px] w-full lg:w-[548px]">
          <motion.div 
            className="relative h-[280px] md:h-[319px] w-full lg:w-[548px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-[#f3f5f7] rounded-lg overflow-hidden">
              <img alt="" className="absolute max-w-none mix-blend-multiply h-[99.12%] left-[41.94%] top-[0.31%] w-[57.7%]" src={img5} />
            </div>
            <motion.div 
              className="absolute bottom-6 md:bottom-10 left-6 md:left-8 flex flex-col gap-3 w-full max-w-[420px] pr-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-['Poppins:Medium',sans-serif] leading-[38px] text-[#121212] text-[34px] tracking-[-0.6px]">
                Men's Collection
              </p>
              <motion.button 
                className="flex items-center gap-1 border-b border-[#121212] pb-0.5 w-fit"
                whileHover={{ x: 5 }}
                onClick={() => toast.info("Exploring Men's Collection...")}
              >
                <span className="font-['Inter:Medium',sans-serif] leading-[28px] text-[#121212] text-[16px] tracking-[-0.4px]">Collections</span>
                <Iconarrowright2 className="text-[#121212]" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative h-[280px] md:h-[319px] w-full lg:w-[548px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-[#f3f5f7] rounded-lg overflow-hidden">
              <img alt="" className="absolute max-w-none mix-blend-multiply h-[102.86%] left-[40.85%] top-[-1.56%] w-[59.88%]" src={imgImagePlaceholder3} />
            </div>
            <motion.div 
              className="absolute bottom-6 md:bottom-10 left-6 md:left-8 flex flex-col gap-3 w-full max-w-[420px] pr-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-['Poppins:Medium',sans-serif] leading-[38px] text-[#121212] text-[34px] tracking-[-0.6px]">
                Women's Collection
              </p>
              <motion.button 
                className="flex items-center gap-1 border-b border-[#121212] pb-0.5 w-fit"
                whileHover={{ x: 5 }}
                onClick={() => toast.info("Exploring Women's Collection...")}
              >
                <span className="font-['Inter:Medium',sans-serif] leading-[28px] text-[#121212] text-[16px] tracking-[-0.4px]">Collections</span>
                <Iconarrowright3 className="text-[#121212]" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function BlogCard({
  image,
  title,
  link
}: {
  image: string;
  title: string;
  link: string;
}) {
  return (
    <motion.div 
      className="flex flex-col gap-6 w-[357px] cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => toast.info(`Reading: ${title}`)}
    >
      <motion.div 
        className="relative h-[320px] w-[357px] rounded-lg overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        <img alt="" className="size-full object-cover" src={image} />
      </motion.div>
      <div className="flex flex-col gap-2">
        <p className="font-['Poppins:Medium',sans-serif] leading-[28px] text-[#141718] text-[20px]">
          {title}
        </p>
        <motion.button 
          className="flex items-center gap-1 border-b border-[#141718] pb-0.5 w-fit"
          whileHover={{ x: 5 }}
        >
          <span className="font-['Inter:Medium',sans-serif] leading-[28px] text-[#141718] text-[16px] tracking-[-0.4px]">{link}</span>
          <Iconarrowright4 className="text-[#141718]" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function Blog() {
  return (
    <div className="bg-white w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[160px] py-20">
      <motion.div 
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-['Poppins:Medium',sans-serif] leading-[32px] md:leading-[44px] text-[28px] md:text-[40px] text-black tracking-[-0.4px]">
          Articles
        </p>
        <motion.button 
          className="flex items-center gap-1 border-b border-black pb-0.5"
          whileHover={{ x: 5 }}
        >
          <span className="font-['Inter:Medium',sans-serif] leading-[28px] text-black text-[16px] tracking-[-0.4px]">More Articles</span>
          <Iconarrowright5 className="text-black" />
        </motion.button>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
      >
        <BlogCard
          image={img6}
          title="Top Trends in Modern Design"
          link="Read More"
        />
        <BlogCard
          image={img7}
          title="The timeless classics you need"
          link="Read More"
        />
        <BlogCard
          image={img8}
          title="Sustainable Shopping Guide 2025"
          link="Read More"
        />
      </motion.div>
    </div>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    }
  };

  return (
    <motion.div 
      className="bg-[#f2f4f6] w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[160px] py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <motion.p 
            className="font-['Poppins:Medium',sans-serif] leading-[32px] md:leading-[44px] text-[28px] md:text-[40px] text-black tracking-[-0.4px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join Our Newsletter
          </motion.p>
          <motion.p 
            className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#6c7275] text-[18px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Sign up for deals, new products and promotions
          </motion.p>
        </div>
        <motion.form 
          className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 w-full md:w-[488px]"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Iconemail className="size-5 text-[#6c7275]" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 outline-none font-['Inter:Regular',sans-serif] text-[16px] text-[#6c7275]"
            required
          />
          <motion.button 
            type="submit"
            className="font-['Inter:Medium',sans-serif] text-[16px] text-[#6c7275] hover:text-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Signup
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}

function Instagram() {
  const images = [
    InstagramElementsImage,
    InstagramElementsImage1,
    InstagramElementsImage2,
    InstagramElementsImage3,
    InstagramElementsImage4,
    InstagramElementsImage5
  ];

  return (
    <div className="bg-white w-full py-12 px-4">
      <motion.p 
        className="font-['Poppins:Medium',sans-serif] leading-[32px] md:leading-[44px] text-[28px] md:text-[40px] text-black tracking-[-0.4px] text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Follow us on Instagram
      </motion.p>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center justify-center max-w-[1440px] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
      >
        {images.map((Image, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            whileHover={{ scale: 1.05, zIndex: 10 }}
            transition={{ duration: 0.3 }}
            onClick={() => toast.info('Opening Instagram...')}
          >
            <Image />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#141718] w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[160px] py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[84px] mb-8 md:mb-12">
        <div className="flex flex-col gap-8 w-full md:w-[350px]">
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <Logo className="h-[24px] w-[105px] [&_path]:fill-white" />
          </motion.div>
          <p className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#e8ecef] text-[14px]">
            Simply Unique Simply Better.
          </p>
          <div className="flex gap-6">
            <motion.button
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toast.info('Opening Instagram...')}
            >
              <Socialoutlineinstagram className="size-6 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toast.info('Opening Facebook...')}
            >
              <Socialoutlinefacebook className="size-6 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => toast.info('Opening YouTube...')}
            >
              <Socialoutlineyoutube className="size-6 text-white" />
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-[84px] flex-1">
          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Medium',sans-serif] leading-[16px] text-[#fefefe] text-[14px] mb-2 uppercase">Menu</p>
            {['New arrivals', 'Best sellers', 'Recently viewed', 'Popular this week', 'All products'].map((item) => (
              <motion.button
                key={item}
                className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#e8ecef] text-[14px] text-left"
                whileHover={{ x: 5, color: '#fff' }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Medium',sans-serif] leading-[16px] text-[#fefefe] text-[14px] mb-2 uppercase">Categories</p>
            {['Electronics', 'Home & Living', 'Travel & Bags', 'Fashion & Apparel', 'Accessories'].map((item) => (
              <motion.button
                key={item}
                className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#e8ecef] text-[14px] text-left"
                whileHover={{ x: 5, color: '#fff' }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-['Inter:Medium',sans-serif] leading-[16px] text-[#fefefe] text-[14px] mb-2 uppercase">Help</p>
            {['About', 'Contact Us', 'Shipping & Returns', 'Privacy Policy', 'FAQ'].map((item) => (
              <motion.button
                key={item}
                className="font-['Inter:Regular',sans-serif] leading-[26px] text-[#e8ecef] text-[14px] text-left"
                whileHover={{ x: 5, color: '#fff' }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#6c7275] pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-7 items-center text-center sm:text-left">
          <p className="font-['Poppins:Regular',sans-serif] leading-[20px] text-[#e8ecef] text-[12px]">
            Copyright © 2025 Hygeenie. All rights reserved
          </p>
          <div className="flex gap-4">
            <motion.button 
              className="font-['Poppins:Semi_Bold',sans-serif] leading-[20px] text-white text-[13px]"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.button>
            <motion.button 
              className="font-['Poppins:Semi_Bold',sans-serif] leading-[20px] text-white text-[13px]"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Use
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <p className="text-[#e8ecef] text-xs font-['Inter:Regular',sans-serif]">We accept:</p>
          <p className="text-white text-sm font-['Inter:Medium',sans-serif] text-center">Visa • Mastercard • PayPal • Stripe</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: { id: number; name: string; price: number }) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, image: '' }];
    });
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster />
      <NotificationBar />
      <NavigationBar 
        onSearchClick={() => {}}
        onCartClick={() => setCartOpen(true)}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />
      <HeroSection />
      <ProductCarousel onAddToCart={handleAddToCart} />
      <Categories />
      <Banner />
      <BannerGrid1 />
      <Blog />
      <Newsletter />
      <Instagram />
      <Footer />
      
      <CartSheet 
        open={cartOpen} 
        onOpenChange={setCartOpen}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
