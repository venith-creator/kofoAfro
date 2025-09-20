<script setup lang="ts">
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 text-center px-6 overflow-hidden"
  >
    <!-- Logo / Brand -->
    <h1 class="logo text-4xl md:text-5xl font-bold text-emerald-700">Kofo</h1>

    <!-- Vision -->
    <p class="tagline mt-2 text-gray-600 max-w-xl">
      Building the <span class="font-semibold">business growth engine</span> for Afro-Caribbean
      and UK SMEs — smarter selling, loyal customers, and a stronger community.
    </p>

    <!-- Status Message Card -->
    <div class="status-card mt-8 bg-white shadow-lg rounded-xl px-6 py-8 max-w-md">
      <h2 class="text-2xl font-semibold text-emerald-600">🚀 We’re getting ready</h2>
      <p class="mt-3 text-gray-600">
        Our platform is under construction, but soon you’ll discover tools for:
      </p>
      <ul class="mt-4 text-left list-disc list-inside text-gray-700 space-y-1">
        <li>📦 Digital storefronts & product bundles</li>
        <li>💬 Customer loyalty & engagement</li>
        <li>📊 Insights that help your business grow</li>
      </ul>
      <p class="mt-6 text-emerald-700 font-medium">
        Stay tuned — we’ll be live soon!
      </p>
    </div>

    <!-- Footer -->
    <footer class="footer mt-12 text-sm text-gray-500">
      &copy; 2025 Kofo. All rights reserved.
    </footer>
  </div>
</template>

<style scoped>
/* Brand animation */
.logo {
  animation: fadeInDown 1s ease forwards;
}

/* Paragraph fade */
.tagline {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.5s;
}

/* Card slide-up */
.status-card {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 1s ease forwards;
  animation-delay: 1s;
}

/* Footer fade */
.footer {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 1.8s;
}

/* Keyframes */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
