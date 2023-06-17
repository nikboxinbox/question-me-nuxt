<script setup lang="ts">
import BackButton from "~components/elements/BackButton.vue";
import { useState } from "#app";

const user = useState("user");

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>

<template>
  <div class="navbar relative dark:bg-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between border-b-2 border-gray-100">
        <div class="flex justify-between min-w-full md:min-w-0">
          <div class="md:hidden mt-4 bg-black">
            <button
              @click="
                setColorTheme(
                  $colorMode.preference == 'dark' ? 'light' : 'dark'
                )
              "
              type="button"
              class="bg-white rounded-md p-2 inline-flex text-gray-400 hover:text-gray-500 dark:bg-black dark:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only dark:bg-black">Open menu</span>
              <svg
                class="h-6 w-6 dark:bg-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div class="">
            <nuxt-link to="/">
              <span class="sr-only">Home</span>
              <img
                class="h-16 md:h-24 w-auto transition duration-500 scale-50 md:hover:scale-110"
                src="/img/logo_clear_fsj.png"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
