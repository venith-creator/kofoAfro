<template>
  <div class="sticky top-0 z-50">
    <!-- TOP BAR -->
    <div class="bg-green-700 text-white text-sm py-2 px-4 hidden md:flex justify-between items-center">
      <div class="flex space-x-6 items-center">
        <div class="flex items-center space-x-1">
          <TruckIcon class="w-4 h-4 text-white" />
          <span>Free delivery on orders over <span class="text-yellow-400 font-semibold">£50</span></span>
        </div>
        <div class="flex items-center space-x-1">
          <ClockIcon class="w-4 h-4 text-white" />
          <span>Same-day deliverable available</span>
        </div>
      </div>
      <div class="flex space-x-4">
        <a href="#" class="hover:underline">Help center</a>
        <a href="#" class="hover:underline">Track order</a>
        <a href="#" class="hover:underline">Store locator</a>
      </div>
    </div>

    <!-- MAIN NAVBAR -->
    <div class="bg-white border-b">
      <div class="container mx-auto px-4 h-16 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img src="/kofo.png" class="w-8 h-8" />
          <span>
            <span class="text-green-600 font-bold">Kofo</span>
            <span class="text-yellow-500 font-bold">Stores</span>
          </span>
        </div>

        <!-- Links -->
        <nav class="hidden md:flex space-x-6 font-medium">
          <a href="#">Home</a>
          <a href="#" class="flex items-center space-x-1">
            <span>Shop</span>
            <ChevronDownIcon class="w-4 h-4" />
          </a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>

        <!-- Right Icons -->
        <div class="hidden md:flex space-x-6 items-center">
          <!-- Search -->
          <div class="flex items-center space-x-1 cursor-pointer">
            <MagnifyingGlassIcon class="w-5 h-5" />
            <span>Search</span>
          </div>
          <!-- Wishlist -->
          <div class="relative">
            <HeartIcon class="w-6 h-6 border border-black rounded-full p-1" />
            <span class="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full px-1.5">3</span>
          </div>
          <!-- Cart -->
          <div class="relative">
            <ShoppingCartIcon class="w-6 h-6 border border-black rounded-full p-1" />
            <span class="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full px-1.5">0</span>
          </div>
          <!-- Profile -->
          <UserIcon class="w-6 h-6" />
        </div>

        <!-- Mobile Hamburger -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <Bars3Icon v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- CATEGORY BAR -->
    <div class="bg-green-50 hidden md:flex justify-center space-x-10 py-2 font-medium">
      <a href="#">New Arrivals</a>
      <a href="#">Hot Deals</a>
      <a href="#">African Foods</a>
      <a href="#">Caribbean Islands</a>
      <a href="#">Beauty Products</a>
    </div>

    <!-- MOBILE DRAWER -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-40 z-40"
      @click="closeMobileMenu"
    />
    <div
      :class="[
        'fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out',
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="p-6 space-y-6 overflow-y-auto h-full">
        <!-- Top bar condensed -->
        <div class="space-y-2 text-sm text-gray-700">
          <div class="flex items-center space-x-2">
            <TruckIcon class="w-4 h-4" />
            <span>Free delivery on orders over <span class="text-yellow-500 font-semibold">£50</span></span>
          </div>
          <div class="flex items-center space-x-2">
            <ClockIcon class="w-4 h-4" />
            <span>Same-day deliverable available</span>
          </div>
          <div class="flex space-x-4 text-green-600 font-medium">
            <a href="#">Help center</a>
            <a href="#">Track order</a>
            <a href="#">Store locator</a>
          </div>
        </div>

        <!-- Main links -->
        <nav class="space-y-4">
          <a href="#" class="block">Home</a>
          <a href="#" class="block">Shop</a>
          <a href="#" class="block">About Us</a>
          <a href="#" class="block">Contact</a>
        </nav>

        <!-- Categories -->
        <div class="pt-4 border-t">
          <h3 class="font-semibold mb-2">Categories</h3>
          <div class="space-y-2">
            <a href="#" class="block">New Arrivals</a>
            <a href="#" class="block">Hot Deals</a>
            <a href="#" class="block">African Foods</a>
            <a href="#" class="block">Caribbean Islands</a>
            <a href="#" class="block">Beauty Products</a>
          </div>
        </div>

        <!-- Right icons replicated -->
        <div class="flex space-x-4 pt-4 border-t">
          <MagnifyingGlassIcon class="w-6 h-6" />
          <HeartIcon class="w-6 h-6" />
          <ShoppingCartIcon class="w-6 h-6" />
          <UserIcon class="w-6 h-6" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  Bars3Icon, XMarkIcon,
  TruckIcon, ClockIcon,
  ChevronDownIcon, MagnifyingGlassIcon,
  HeartIcon, ShoppingCartIcon, UserIcon
} from "@heroicons/vue/24/outline";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
