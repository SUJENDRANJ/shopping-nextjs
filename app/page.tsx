import { CartDrawer } from "./components/CartDrawer";
import { ProductCard } from "./components/ProductCard";
import { AuthDialog } from "./components/AuthDialog";

// Mock products data (replace with API call later)
const products = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality.",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with health tracking and notifications.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "3",
    name: "Professional Camera Kit",
    description:
      "Complete camera kit for professional photography enthusiasts.",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "4",
    name: "Designer Backpack",
    description: "Stylish and functional backpack for everyday use.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    category: "Accessories",
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    description:
      "Premium mechanical keyboard with RGB lighting and customizable switches.",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1626958390943-a70309376444?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    category: "Electronics",
  },
  {
    id: "6",
    name: "Ultra-Wide Monitor",
    description:
      "34-inch curved ultra-wide monitor for immersive gaming and productivity.",
    price: 699.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "7",
    name: "Wireless Gaming Mouse",
    description:
      "High-precision wireless gaming mouse with customizable buttons.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "8",
    name: "Premium Coffee Maker",
    description:
      "Smart coffee maker with programmable settings and thermal carafe.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    category: "Appliances",
  },
  {
    id: "9",
    name: "Leather Wallet",
    description: "Handcrafted genuine leather wallet with RFID protection.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    category: "Accessories",
  },
  {
    id: "10",
    name: "Wireless Earbuds",
    description: "True wireless earbuds with active noise cancellation.",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "11",
    name: "Smart Home Hub",
    description: "Central control unit for your smart home devices.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "12",
    name: "Portable SSD",
    description: "1TB portable SSD with USB-C connectivity.",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "13",
    name: "Travel Duffel Bag",
    description: "Spacious water-resistant duffel bag for weekend getaways.",
    price: 89.99,
    image:
      "https://plus.unsplash.com/premium_photo-1679423807965-cf55a492e282?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRyYXZlbCUyMER1ZmZlbCUyMEJhZ3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Accessories",
  },
  {
    id: "14",
    name: "Fitness Tracker",
    description: "Advanced fitness tracker with heart rate monitoring.",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1557858310-9052820906f7?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "15",
    name: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with all Qi devices.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1636297461709-0812290a9dcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2lyZWxlc3MlMjBDaGFyZ2luZyUyMFBhZHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
  },
  {
    id: "16",
    name: "Smart Door Lock",
    description: "Keyless entry smart lock with fingerprint recognition.",
    price: 199.99,
    image:
      "https://plus.unsplash.com/premium_photo-1729574858839-5a145c914bac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBEb29yJTIwTG9jayUyQiUyQnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "17",
    name: "Portable Projector",
    description: "Mini HD projector for home entertainment.",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1626379961798-54f819ee896a?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "18",
    name: "Air Purifier",
    description: "Smart air purifier with HEPA filter and air quality monitor.",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    category: "Appliances",
  },
  {
    id: "19",
    name: "Gaming Controller",
    description: "Professional gaming controller with customizable buttons.",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&q=80",
    category: "Gaming",
  },
  {
    id: "20",
    name: "Smart Scale",
    description:
      "Bluetooth-enabled smart scale with body composition analysis.",
    price: 79.99,
    image:
      "https://media.istockphoto.com/id/1253371599/photo/kid-girl-or-boy-stands-and-weighs-himself-on-white-modern-electronic-smart-scale-scales-stand.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z9xdJU7-OxHpkhC1bjyhrlkYYP7gK-6MlZhgp9jj3Ok=",
    category: "Health",
  },
  {
    id: "21",
    name: "Robot Vacuum",
    description: "Smart robot vacuum with mapping and scheduling features.",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1647940990395-967898eb0d65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ib3J0JTIwdmFjdXVtfGVufDB8fDB8fHww",
    category: "Appliances",
  },
  {
    id: "22",
    name: "Desk Lamp",
    description: "LED desk lamp with wireless charging base.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1601642964568-1917224f4e4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
    category: "Home Office",
  },
  {
    id: "23",
    name: "Bluetooth Speaker",
    description:
      "Waterproof portable Bluetooth speaker with 24-hour battery life.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    category: "Electronics",
  },
  {
    id: "24",
    name: "Electric Toothbrush",
    description: "Smart electric toothbrush with pressure sensor and timer.",
    price: 89.99,
    image:
      "https://plus.unsplash.com/premium_photo-1664544673336-62801425aab6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBicnVzaHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Health",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background m-auto">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Modern Shop</h1>
          <div className="flex items-center gap-4">
            <AuthDialog />
            <CartDrawer />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product as any} />
          ))}
        </div>
      </main>
    </div>
  );
}
