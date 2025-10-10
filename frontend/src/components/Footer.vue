<template>
  <footer class="bg-white text-gray-900 py-16">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-10 mb-12">
        <!-- Branding / Company Intro -->
        <div class="space-y-5">
          <!-- Logo + Name -->
          <div class="flex items-center space-x-3">
            <img
              src="/kofs.png"
              alt="Kofo Stores Logo"
              class="w-8 h-8"
            />
            <span class="font-semibold text-xl text-black">
              Kofo <span class="text-yellow-500">Stores</span>
            </span>
          </div>

          <!-- Tagline -->
          <p class="text-gray-800 leading-relaxed">
            Your trusted source for authentic <br />
            African and Caribbean groceries, fresh <br />
            produce, and beauty products. <br />
            Delivered fresh to your door.
          </p>

          <!-- Social Icons (green) -->
          <div class="flex space-x-3">
            <!-- Facebook -->
            <a target="_blank" href="https://www.facebook.com/kofoafroshopuk?mibextid=wwXIfr" class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
              <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0
                  4.991 3.657 9.128 8.438 9.878v-6.987H8.077v-2.89h2.361V9.845c0-2.335
                  1.393-3.62 3.52-3.62.999 0 2.042.178
                  2.042.178v2.25h-1.151c-1.136
                  0-1.49.705-1.49 1.428v1.714h2.539l-.406
                  2.89h-2.133v6.987C18.343 21.128 22
                  16.991 22 12z"
                />
              </svg>
            </a>

            <!-- Instagram -->
            <a target="_blank" href="https://www.instagram.com/kofo.supermarket?igsh=MTY2MXpvNjAzZmp3dQ==" class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
              <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7.5 2h9A5.5 5.5 0 0122
                  7.5v9A5.5 5.5 0 0116.5 22h-9A5.5
                  5.5 0 012 16.5v-9A5.5 5.5 0
                  017.5 2zm0 2A3.5 3.5 0 004
                  7.5v9A3.5 3.5 0 007.5
                  20h9a3.5 3.5 0 003.5-3.5v-9A3.5
                  3.5 0 0016.5 4h-9zm4.5
                  3a5.5 5.5 0 110 11 5.5
                  5.5 0 010-11zm0 2a3.5 3.5
                  0 100 7 3.5 3.5 0 000-7zm5.25-.75a1.25
                  1.25 0 110 2.5 1.25 1.25 0
                  010-2.5z"
                />
              </svg>
            </a>

            <!-- YouTube -->
            <a target="_blank" href="https://youtube.com/@kofostores?si=dBYcw5Q9M1tm8dO6" class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
              <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505
                  3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017
                  3.017 0 00.502 6.186C0 8.07 0 12 0
                  12s0 3.93.502 5.814a3.016 3.016 0 002.122
                  2.136c1.871.505 9.376.505 9.376.505s7.505
                  0 9.377-.505a3.015 3.015 0 002.122-2.136C24
                  15.93 24 12 24 12s0-3.93-.502-5.814zM9.545
                  15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Shop -->
        <div>
          <h3 class="font-semibold text-black mb-4">Shop</h3>
          <ul class="space-y-3 text-gray-700">
            <li>African Foods</li>
            <li>Caribbean Foods</li>
            <li>Fresh Produce</li>
            <li>Beauty & Hair</li>
          </ul>
        </div>

        <!-- Customer Service -->
        <div>
          <h3 class="font-bold text-black mb-4">Customer Service</h3>
          <ul class="space-y-3 text-gray-700">
            <li>Help Center</li>
            <li>Track Order</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <!-- Contact Us -->
        <div>
          <h3 class="font-semibold text-black mb-4">Contact Us</h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0
                  01-2.827 0l-4.244-4.243a8 8 0
                  1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3
                  0 016 0z" />
              </svg>
              <span>
                22-24 Alcester Rd S, King's Heath,<br />
                Birmingham B14 7PU, United Kingdom
              </span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22
                  0L21 8M5 19h14a2 2 0 002-2V7a2
                  2 0 00-2-2H5a2 2 0 00-2 2v10a2
                  2 0 002 2z" />
              </svg>
              <a href="mailto:Info@kofostores.uk">Info@kofo.uk</a>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1
                  0 01.948.684l1.498 4.493a1 1 0
                  01-.502 1.21l-2.257 1.13a11.042
                  11.042 0 005.516 5.516l1.13-2.257a1
                  1 0 011.21-.502l4.493 1.498a1
                  1 0 01.684.949V19a2 2 0
                  01-2 2h-1C9.716 21 3 14.284 3
                  6V5z" />
              </svg>
              <a href="tel:+447853995834">+44 7853 995834</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 pt-8 text-center">
        <p class="text-gray-600">© 2025 Kofo Stores. All rights reserved.</p>
        <p class="text-gray-500 text-sm mt-2">
          Built by
          <a
            href="https://www.timglobal.uk"
            target="_blank"
            class="text-blue-500 hover:underline"
          >
            Timglobal
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
