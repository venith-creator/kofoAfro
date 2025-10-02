<template>
  <div class="bg-white">

    <!-- Hero Section -->
    <section class="relative w-full h-[90vh] flex items-center justify-center">
      <video
        autoplay
        loop
        muted
        playsinline
        class="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src="/kofovideo.mp4" type="video/mp4" />
      </video>
      <div class="relative text-center text-white max-w-3xl px-4">
        <h1 class="text-3xl sm:text-5xl font-bold leading-snug">
          Fresh African & Caribbean Groceries<br />
          Delivered to Your Doorstep
        </h1>
        <p class="mt-4 text-sm sm:text-lg">
          Fresh produce, pantry essentials, and beauty products from the heart
          <br />
          of Africa and the Caribbean
        </p>
        <button
          class="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md inline-flex items-center gap-2"
        >
          Show more
          <ArrowRightIcon class="w-5 h-5" />
        </button>
      </div>
    </section>

    <!-- Shop by Category -->
    <section class="py-16 px-4 sm:px-10 bg-white">
      <h2 class="text-green-600 text-2xl font-bold text-center">
        Shop by Category
      </h2>
      <p class="text-center text-gray-700 mt-2">
        From fresh produce to beauty essentials, explore our carefully curated
        categories
      </p>

      <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <!-- Row 1 -->
        <div class="relative col-span-2 h-96 bg-black rounded-lg overflow-hidden">
          <img
            src="/freshProduce.png"
            class="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div class="absolute bottom-4 left-4 text-white">
            <h3 class="text-xl font-semibold">Fresh Produce</h3>
            <p class="text-sm">Straight from the farm to your door</p>
            <span class="text-yellow-400">Shop Now →</span>
          </div>
        </div>
        <div class="relative h-96 bg-black rounded-lg overflow-hidden">
          <img
            src="/froxen.png"
            class="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div class="absolute bottom-4 left-4 text-white">
            <h3 class="text-xl font-semibold">Frozen Food</h3>
            <p class="text-sm">Premium quality, perfectly preserved</p>
            <span class="text-yellow-400">Shop Now →</span>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="relative h-96 bg-black rounded-lg overflow-hidden">
          <img
            src="/hairbeauty.png"
            class="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div class="absolute bottom-4 left-4 text-white">
            <h3 class="text-xl font-semibold">Beauty & Hair</h3>
            <p class="text-sm">Authentic African Beauty Essentials</p>
            <span class="text-yellow-400">Shop Now →</span>
          </div>
        </div>
        <div class="relative h-96 bg-black rounded-lg overflow-hidden">
          <img
            src="/pantryStaples.png"
            class="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div class="absolute bottom-4 left-4 text-white">
            <h3 class="text-xl font-semibold">Pantry Staples</h3>
            <p class="text-sm">Stock your kitchen with the staples</p>
            <span class="text-yellow-400">Shop Now →</span>
          </div>
        </div>
        <div class="relative h-96 bg-black rounded-lg overflow-hidden">
          <img
            src="/beverage.png"
            class="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div class="absolute bottom-4 left-4 text-white">
            <h3 class="text-xl font-semibold">Beverages</h3>
            <p class="text-sm">Refresh with authentic flavors</p>
            <span class="text-yellow-400">Shop Now →</span>
          </div>
        </div>

        <!-- Row 3 -->
        <div class="relative col-span-3 h-96 bg-black rounded-lg overflow-hidden">
          <img
            src="/carribean.png"
            class="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div class="absolute bottom-4 left-4 text-white">
            <h3 class="text-xl font-semibold">Caribbean Specialities</h3>
            <p class="text-sm">Straight from the farm to your door</p>
            <span class="text-yellow-400">Shop Now →</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 px-4 sm:px-10 bg-green-50">
      <h2 class="text-green-600 text-2xl font-bold text-center">
        Featured Products
      </h2>
      <p class="text-center text-gray-700 mt-2">Handpicked favorites for you</p>

      <!-- Section Template -->
      <div v-for="section in productSections" :key="section.title" class="mt-12">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h3 class="text-xl font-bold text-green-600">{{ section.title }}</h3>
            <p v-if="section.subtitle" class="text-gray-700">
              {{ section.subtitle }}
            </p>
          </div>
          <button
            class="border border-green-600 text-green-600 px-4 py-1 rounded-md"
          >
            View all →
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(item, i) in section.items"
            :key="i"
            class="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              :src="item.image || '/images/placeholder.png'"
              class="w-full h-58 object-cover"
            />
            <div class="p-4">
              <h4 class="font-semibold text-gray-900">{{ item.name }}</h4>
              <p class="text-sm text-gray-500">{{ item.weight }}</p>
              <!-- Stars -->
              <div class="flex items-center my-2">
                <span
                  v-for="n in 4"
                  :key="n"
                  class="text-yellow-400 text-lg"
                  >★</span
                >
                <span class="text-gray-300 text-lg">★</span>
              </div>
              <p class="text-green-600 font-bold">{{ item.price }}</p>
              <button
                class="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md flex justify-center items-center gap-2"
              >
                <ShoppingCartIcon class="w-5 h-5 text-white-500" />
                Add to cart
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Shop With Kofo -->
    <section
      class="py-16 px-4 sm:px-10 bg-white grid md:grid-cols-2 gap-8 items-center"
    >
      <div class="grid grid-cols-2 gap-4">
        <img src="/top1.png" class="rounded-lg shadow-md" />
        <img src="/shopbag.png" class="rounded-lg shadow-md mt-8" />
      </div>
      <div>
        <h2 class="text-green-600 text-2xl font-bold mb-6">
          Why Shop With Kofo?
        </h2>
        <ul class="space-y-4">
          <li v-for="(reason, i) in reasons" :key="i" class="flex items-center gap-3">
            <CheckCircleIcon class="w-6 h-6 text-green-600" />
            {{ reason }}
          </li>
        </ul>
      </div>
    </section>

    <!-- FAQs -->
      <section class="py-16 px-4 sm:px-10 bg-green-50">
        <h2 class="text-green-600 text-2xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div class="mt-8 space-y-4 max-w-2xl mx-auto">
          <details
            v-for="(faq, i) in faqs"
            :key="i"
            class="border border-green-200 p-4 rounded-md bg-green-50"
          >
            <summary class="flex justify-between items-center cursor-pointer">
              {{ faq.q }}
              <ChevronDownIcon class="w-5 h-5 text-gray-500" />
            </summary>
            <p class="mt-2 text-gray-600">{{ faq.a }}</p>
          </details>
        </div>
        <div class="text-center mt-8">
          <p class="text-gray-700">
            Still have questions? Our support team is here to help.
          </p>
          <button
            class="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
          >
            Contact Support →
          </button>
        </div>
      </section>

  </div>
</template>

<script setup>
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ShoppingCartIcon
} from "@heroicons/vue/24/solid";

const productSections = [
  {
    title: "New Arrivals",
    items: [
      { name: "Fresh Plantain (Green)", weight: "1kg", price: "£2.99", image: "/banana.jpg" },
      { name: "Premium Basmati Rice", weight: "5kg", price: "£12.99", image: "/basmatiRice.jpg" },
      { name: "Jollof Rice Spice Mix", weight: "200g", price: "£4.99", image: "/jollof rice mix.jpg" },
      { name: "Organic Palm Oil 1L", weight: "1L", price: "£4.99", image: "/organicpalmoil.jpg" },
    ],
  },
  {
    title: "African Essentials",
    subtitle: "Authentic ingredients from across Africa",
    items: [
      { name: "Yam (White)", weight: "1.5kg", price: "£4.99", image: "/yam.jpg" },
      { name: "Plantain Chips - Salted", weight: "150g", price: "£1.99", image: "/plantainchips.jpg" },
      { name: "Shea Butter - Raw", weight: "500g", price: "£9.99", image: "/premiumshearbutter.jpg" },
      { name: "Jollof Rice Spice Mix", weight: "200g", price: "£4.99" , image: "/jollof rice mix.jpg" },
    ],
  },
  {
    title: "Caribbean Favorites",
    subtitle: "Island flavors delivered to your door",
    items: [
      { name: "Fresh Okra", weight: "150g", price: "£2.49", image: "/okro.jpg" },
      { name: "Jollof Rice Spice Mix", weight: "200g", price: "£4.99", image: "/jollof rice mix.jpg" },
      { name: "Fresh Plantain Green", weight: "1kg", price: "£2.99" , image: "/banana.jpg" },
      { name: "Scotch Bonnet Peppers", weight: "500g", price: "£3.99", image: "/pepper.jpg" },
    ],
  },
  {
    title: "Beauty & Hair Care",
    subtitle: "Curated collection for natural beauty",
    items: [
      { name: "Shea Butter - Raw", weight: "500g", price: "£9.99", image: "/premiumshearbutter.jpg" },
      { name: "Luxury Xachan Human Hair", weight: "150g", price: "£50.00", image: "/human hair.jpg" },
      {image: "/etherealcream.jpg", name: "Etheral Complete Beauty Set", weight: "2kg", price: "£50.99" },
      { name: "Coconut Milk", weight: "400ml", price: "£2.99", image: "/African black soap.jpg" },
    ],
  },
];

const reasons = [
  "Large selection of African and Caribbean products in the UK",
  "Direct sourcing from trusted suppliers worldwide",
  "Same-day delivery across London and major cities",
  "Competitive prices with weekly special offers",
  "Dedicated customer support team ready to help",
];

const faqs = [
  {
    q: "How do I create an account?",
    a: "Creating an account with Kofo is quick and easy! Simply click the 'Sign Up' button in the top right corner of our website. You can register using your email, phone number, Google, or Apple ID.",
  },
  {
    q: "Do I need an account to place an order?",
    a: "No, but an account makes checkout faster and helps track your orders.",
  },
  {
    q: "How do I search for specific products?",
    a: "Use the search bar at the top to quickly find products.",
  },
  {
    q: "What are your delivery options and costs?",
    a: "We offer same-day and next-day delivery across major UK cities.",
  },
  {
    q: "How do I track my order?",
    a: "You can track your order from your account dashboard once it has been shipped.",
  },
];
</script>
