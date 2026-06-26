import { Product, Review, BlogPost } from './types';

export const productsList: Product[] = [
  // Coffees
  {
    id: 'c1',
    name: 'Espresso',
    category: 'coffee',
    description: 'Strong black coffee shot crafted from dark roasted premium Arabica beans, offering an intense flavor profile with a fine golden crema.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1510705315444-837e6da4e65d?auto=format&fit=crop&q=80&w=600',
    tags: ['Intense', 'Hot', 'Arabica']
  },
  {
    id: 'c2',
    name: 'Americano',
    category: 'coffee',
    description: 'Espresso shot diluted with premium hot water, offering the depth of clean rich espresso but smoother and milder.',
    price: 140,
    image: 'https://images.unsplash.com/photo-1551030173-122aabd3e778?auto=format&fit=crop&q=80&w=600',
    tags: ['Smooth', 'Hot', 'Classic']
  },
  {
    id: 'c3',
    name: 'Cappuccino',
    category: 'coffee',
    description: 'Perfect harmony of robust espresso, steamed milk, and a thick, luxurious layer of creamy velvety milk foam, dusted with cocoa powder.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53f?auto=format&fit=crop&q=80&w=600',
    tags: ['Creamy', 'Hot', 'Foamy']
  },
  {
    id: 'c4',
    name: 'Latte',
    category: 'coffee',
    description: 'Smooth and silky milk coffee containing a single shot of rich espresso topped up with steamed micro-foam milk for a delicate flavor.',
    price: 190,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    tags: ['Mild', 'Hot', 'Silky']
  },
  {
    id: 'c5',
    name: 'Mocha',
    category: 'coffee',
    description: 'Espresso combined with premium chocolate syrup and smooth steamed milk, finished with chocolate shavings.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=600',
    tags: ['Sweet', 'Hot', 'Chocolaty']
  },
  {
    id: 'c6',
    name: 'Cold Coffee',
    category: 'coffee',
    description: 'Chilled creamy milk blended perfectly with robust espresso shot and fine sugar cubes, served icy cold with chocolate ice-cream scoop option.',
    price: 210,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600',
    tags: ['Cold', 'Frappe', 'Bestseller']
  },

  // Milkshakes
  {
    id: 'm1',
    name: 'Chocolate Shake',
    category: 'milkshakes',
    description: 'Rich dark Belgian chocolate flavor blended with pure fresh milk and gourmet chocolate ice cream, garnished with chocolate shavings.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600',
    tags: ['Classic', 'Sweet', 'Belgian Chocolate']
  },
  {
    id: 'm2',
    name: 'Oreo Shake',
    category: 'milkshakes',
    description: 'Crispy chocolate Oreo cookies blended with fresh ice-cold milk, rich vanilla syrup, and finished with whipped cream and crushed Oreos.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=600',
    tags: ['Cookie Crumble', 'Crunchy', 'Youth Favorite']
  },
  {
    id: 'm3',
    name: 'Vanilla Shake',
    category: 'milkshakes',
    description: 'Timeless classic vanilla shake crafted with authentic Madagascar vanilla bean paste and rich, premium full-cream milk.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
    tags: ['Classic', 'Creamy', 'Vanilla Bean']
  },
  {
    id: 'm4',
    name: 'Strawberry Shake',
    category: 'milkshakes',
    description: 'Fresh field-picked strawberry puree blended smoothly with rich dairy ice cream and farm-fresh chilled milk.',
    price: 260,
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860242?auto=format&fit=crop&q=80&w=600',
    tags: ['Fruity', 'Fresh', 'Strawberry']
  },
  {
    id: 'm5',
    name: 'Mango Shake',
    category: 'milkshakes',
    description: 'Indulgent seasonal Alphonso mango pulp blended to absolute creamy perfection, evoking the taste of pure tropical summers.',
    price: 270,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=600',
    tags: ['Alphonso', 'Seasonal Special', 'Sweet']
  },

  // Mojitos
  {
    id: 'j1',
    name: 'Classic Mint Mojito',
    category: 'mojitos',
    description: 'Hand-muddled fresh mint leaves, zesty lemon wedges, rich cane sugar, layered over crushed ice and topped with fizzy club soda.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    tags: ['Zesty', 'Icy', 'Super-Refreshing']
  },
  {
    id: 'j2',
    name: 'Blue Lagoon Mojito',
    category: 'mojitos',
    description: 'Vibrant blue curacao flavor mixed expertly with fresh lime halves, sweet syrup, club soda, and beautiful mint bouquet accents.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600',
    tags: ['Citrusy', 'Signature Blue', 'Chill']
  },
  {
    id: 'j3',
    name: 'Watermelon Mojito',
    category: 'mojitos',
    description: 'Fresh crimson watermelon chunks muddled with garden mint, fresh lime, and a splash of cold sparkling water.',
    price: 230,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600',
    tags: ['Hydrating', 'Summer Love', 'Watermelon']
  },
  {
    id: 'j4',
    name: 'Green Apple Mojito',
    category: 'mojitos',
    description: 'Tangy and crisp sour green apple extract balanced perfectly with aromatic mint leaves, lemon slices, and sparkling fizz.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=600',
    tags: ['Sweet & Sour', 'Tangy', 'Apple Fizz']
  },
  {
    id: 'j5',
    name: 'Kiwi Mojito',
    category: 'mojitos',
    description: 'Exotic kiwi puree muddled with citrus limes, premium organic syrup, and cold soda water, serving high Vitamin-C freshness on ice.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1543157148-f79f21226368?auto=format&fit=crop&q=80&w=600',
    tags: ['Fresh Kiwi', 'Tropical', 'Vitamin C']
  },

  // Smoothies
  {
    id: 's1',
    name: 'Berry Smoothie',
    category: 'smoothies',
    description: 'A nutritional powerhouse of strawberries, blueberries, and raspberries blended with thick Greek yogurt and wild honey.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&fit=crop&q=80&w=600',
    tags: ['Antioxidants', 'Healthy', 'Super Berry']
  },
  {
    id: 's2',
    name: 'Mango Smoothie',
    category: 'smoothies',
    description: 'Creamy tropical mango smoothie loaded with juicy mango chunks, dairy-free oat milk, and a pinch of ground cardamom.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600',
    tags: ['Vegan-option', 'Healthy Fat', 'Cardamom zest']
  },
  {
    id: 's3',
    name: 'Banana Smoothie',
    category: 'smoothies',
    description: 'Energenic power blend of sweet ripe bananas, high-protein peanut butter, rolled oats, and cold milk for the perfect morning fuel.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1553530593-9475db345524?auto=format&fit=crop&q=80&w=600',
    tags: ['Protein-Rich', 'Pre-Workout', 'Banana Almond']
  },
  {
    id: 's4',
    name: 'Pineapple Smoothie',
    category: 'smoothies',
    description: 'Thick and tangy pineapple sections blended with real coconut cream, rich in bromelain enzyme, giving instant holiday feel.',
    price: 270,
    image: 'https://images.unsplash.com/photo-1589733901241-5e514c073988?auto=format&fit=crop&q=80&w=600',
    tags: ['Tropical Pineapple', 'Pina-Vibe', 'Refreshing']
  }
];

export const whyChooseList = [
  {
    title: 'Fresh Ingredients',
    description: 'We source farm-fresh fruits and premium organic coffee beans daily to ensure zero chemical additives or powder shortcuts.',
    icon: 'Apple'
  },
  {
    title: 'Skilled Baristas',
    description: 'Our certified mixologists and master baristas turn coffee pouring and fruit muddling into a precise form of drink art.',
    icon: 'Sparkles'
  },
  {
    title: 'Affordable Prices',
    description: 'Luxury beverages shouldn\'t carry astronomical billings. Get authentic premium materials priced beautifully for everyday enjoyment.',
    icon: 'Tag'
  },
  {
    title: 'Fast Service',
    description: 'No endless queues. Our specialized parallel blenders and double espresso groups guarantee your cup is poured under 5 minutes.',
    icon: 'Zap'
  },
  {
    title: 'Hygienic Preparation',
    description: 'Triple-filtered RO water, steel sanitations, and strict daily cleanliness routines support the safety of every single drop.',
    icon: 'ShieldCheck'
  },
  {
    title: '100+ Beverage Options',
    description: 'From steaming espressos and dense dark milkshakes to sparkling soda mocktails and gluten-free fruit blends to satisfy everyone.',
    icon: 'Coffee'
  }
];

export const reviewsList: Review[] = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    comment: 'The best cold coffee in New Delhi, hands down. Perfectly thick, absolutely rich in caffeine kick, and serviced with absolute polite warmth.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Priya Verma',
    rating: 5,
    comment: 'The Blue Lagoon and Watermelon Mojitos are pure perfection for hot afternoons. The mint leaves are so fresh and fragrant, they literally burst with crisp citrus flavor!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Aman Gupta',
    rating: 5,
    comment: 'DrinkYard has become my absolute default workspace. Incredible atmosphere, extremely professional baristas, and capping it with that creamy Cappuccino shot is pure therapy.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const blogArticles: BlogPost[] = [
  {
    id: 'b1',
    title: 'Top 5 Coffee Drinks Every Beginner Should Try',
    date: 'January 15, 2026',
    excerpt: 'Stepping into the world of coffee can be highly intimidating with jargon like Macchiato or Piccolo. Discover the best five starting options to naturally enjoy your coffee journey.',
    category: 'Coffee Wisdom',
    readTime: '4 Mins Read',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    content: `Entering the complex, beautiful universe of specialty coffee is often overwhelming. With terms like double shots, single-origins, micro-foams, and various ratios, it's easy for an absolute beginner to feel lost in the menu. 

To help you skip the stress and land straight on your personal coffee preference, we recommend taking a gentle progression through these five fundamental brews:

1. **Cappuccino**
If you enjoy rich creamy dairy paired with a pleasant coffee punch, start here. It's constructed of a uniform three-way ratio: 1/3 espresso shot, 1/3 steamed sweet milk, and 1/3 pillowy micro-milk foam. The thick layer of foam acts as an insulation blanket, keeping your coffee warm while holding chocolate sprinkles.

2. **Latte**
With less foam and far more warm milk than cappuccino, the caffe latte is the silkiest coffee on Earth. It is highly approachable because the abundant warm milk gently balances the robust, acidic caffeine roast. It's essentially the ultimate comfort drink.

3. **Mocha**
A marvelous marriage of dark Belgian chocolate and espresso. If you have a sweet tooth or love hot cocoa, this cocoa-infused brew serves as the perfect intermediate bridge before tasting bolder coffee profiles.

4. **Americano**
For those who prefer a clean, black, dairy-free hydration. An Americano is a rich espresso shot with hot water poured gently on top. It offers the elegant roast notes of a filter coffee but with the heavy body and rich oil droplets unique to espresso extraction.

5. **Cold Coffee / Frappe**
An icy, blended milkshake-level indulgence. Brewed espresso whipped with frosty fresh milk and sugar cubes provides a deeply satisfying refreshing caffeine rush, ideally topped with direct cocoa drifts.

Find your sweet spot, understand what your taste buds prefer, and remember: there's no correct way to enjoy your coffee as long as you love the sip.`
  },
  {
    id: 'b2',
    title: 'Benefits of Drinking Fresh Fruit Smoothies',
    date: 'February 10, 2026',
    excerpt: 'Are you getting enough direct nutrients? Discover how drinking organic custom fruits in smooth whipped form supports glowing skin, active gut digestion, and clean natural energy.',
    category: 'Nutrition & Wellness',
    readTime: '3 Mins Read',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600',
    content: `In our rapid-paced daily schedule, ensuring a balanced intake of fibers, vitamins, and minerals can be extremely tough. Freshly prepared fruit smoothies are the ultimate wellness hack—condensing a large bowl of wholesome raw nutrition into a tasty, portable luxury drink.

### The Immediate Benefits of Real Fruit Smoothies:

* **Instant Digestion Ease**: The blending process breaks down whole fruit structures, meaning your stomach doesn't have to work overtime to unlock nutrients. The healthy fibers are preserved, promoting smooth digestion and long-lasting fullness.
* **Complex Energy Boost**: Unlike coffee or energy shots that trigger severe afternoon blood sugar crashes, the natural fructose in raw berries, organic bananas, and mangoes is released steadily alongside natural fruit fibers, offering solid endurance.
* **Glowing Hydration & Immunity**: Rich antioxidants like Vitamin C from strawberries and bromelain enzyme from pure pineapples help clear toxins, fighting off cell inflammation and giving your skin a brilliant, youthful dewiness.

At DrinkYard, we combine field-picked fresh fruits with sugar alternatives like wild honey, raw dates, and oat milk to serve pure energy drinks that taste exactly like guilt-free desserts.`
  },
  {
    id: 'b3',
    title: 'Why Mojitos Are the Perfect Summer Drink',
    date: 'March 5, 2026',
    excerpt: 'The beautiful chemistry of fresh mint oils, lime citrus acids, and sparkling carbonation. See why the Cuban mojito is the undeniable king of pure hot-day cooling.',
    category: 'Mixology Diaries',
    readTime: '3 Mins Read',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
    content: `When direct solar temperatures cross 35 degrees, heavy milkshakes or acidic hot beverages lose their charm. Your body craves something electric, chilly, carbonated, and deeply hydrating. Enter the Mojito—a centuries-old mixology masterpiece.

What makes a mint mojito so singularly refreshing is scientific. The essential oil inside garden-fresh mint leaves is **menthol**. Menthol chemically tricks your mouth's sensory receptors, creating a powerful, literal sensation of thermal coldness that lasts for several minutes.

When you pair this cooling herb with citric acid from fresh-slipped lime wedges and sweet cane sugar, a beautiful flavor cycle occurs. The sparkling soda bubbles then lift the aromatic mint vapor straight to your nostrils as you tilt the glass. 

It is a complete, holistic sensory playground. Drink it icy-cold, breathe in the mint, and let summer drift away.`
  },
  {
    id: 'b4',
    title: 'The Journey of Coffee Beans: Seed to Cup',
    date: 'April 20, 2026',
    excerpt: 'Trace the incredible chain of labor, temperature control, and precision roaring behind your single 120 Rupee morning espresso shot.',
    category: 'Coffee Wisdom',
    readTime: '5 Mins Read',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    content: `Have you ever wondered about the complex timeline that occurs before a coffee bean reaches our espresso group head? Every coffee bean starts as a bright crimson seed inside a coffee cherry on high-altitude mountain farms.

### The Critical Phases of Coffee Craft:

1. **The Selective Harvest**: Premium coffees are hand-picked. Harvesters walk steep inclines, selecting only perfectly ripe cherries while leaving immature green ones for later weeks.
2. **The Processing**: The pulp is stripped in water channels or dried entirely in search of the underlying hard green seed. This green bean must dry carefully under the sun on raised African beds.
3. **The Roast Alchemy**: Green coffee tastes like grassy dry peas. It requires extreme heat. Master roasters watch temperature curves, triggering chemical Maillard reactions that release hundreds of aromatic oils. Too long, and it gets burnt; too short, and the espresso becomes unpleasantly sour.
4. **Grinding & Extraction**: Once roasted, the bean is ground precisely to the micrometer to create resistance. Hot water under 9 bars of pressure squeezes through the coffee puck, extracting the rich espresso shot in exactly 26 gorgeous seconds.

At DrinkYard, we honor this beautiful global chain. We work directly with estates in Chikmagalur and Nilgiri, roasting beans locally in small batches to preserve every drop of incredible effort.`
  },
  {
    id: 'b5',
    title: 'How We Create Our Signature Shakes',
    date: 'May 12, 2026',
    excerpt: 'Peek inside our blending kitchen to see how temperature mechanics, emulsifiers, and hand-molded gelato blend together for peak creaminess.',
    category: 'Behind the Bar',
    readTime: '4 Mins Read',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=600',
    content: `A truly premium milkshake must never be a watery glass of flavored milk, nor can it be a solid cement block of dry ice cream that clogs your straw. It must exist in that holy grail state of perfect liquid suspension—creamy, rich, incredibly dense, and smoothly drinkable.

How do we achieve this at DrinkYard? It comes down to strict temperature thermodynamics and ingredient ratios:

* **The Soft-Serve Gelato Base**: Rather than standard factory-pack ice cream that is pumped with up to 50% air, we churn thick gelato bases locally. This keeps the butterfat content high and air bubble volumes low.
* **Super-Chilled Milk**: We keep our dairy storage strictly locked at 1.5 degrees Celsius. This precise temperature prevents the milk fats from splitting when hit by the high friction of our heavy blenders.
* **Zero Ice Dilution**: Many cafes blend cheap ice cubes into milkshakes to build volume, which quickly melts, diluting the flavor. We strictly prohibit ice in shakes, obtaining the icy texture entirely from pre-frozen fruit wedges and chilled gelato.
* **Double-Whipped Texture**: Our dual-spindle mixers spin at 12,000 RPM, folding air gently into the chocolate or Oreo cookie molecules to emulsify the shake into a rich, velvety masterpiece.

Taste our chocolate or Oreo shake side-by-side with a standard commercial shake, and you'll immediately discover the difference that pure craft makes.`
  }
];
