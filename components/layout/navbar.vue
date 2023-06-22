<script setup lang="ts">
import BackButton from "~/components/elements/BackButton.vue";
import { useState } from "#app";
const user = useState("user");
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
//- TODO:logo file in template
</script>

<template lang="pug">
.navbar.relative(class='dark:bg-slate-800')
  .max-w-7xl.mx-auto.px-4(class='sm:px-6')
    .flex.justify-between.items-center.border-b-2.border-gray-100.py-6(class='md:justify-start md:space-x-10')
      .-mr-2.-my-2(class='md:hidden')
        button.bg-white.rounded-md.p-2.inline-flex.items-center.justify-center.text-gray-400(type='button' class='hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500' aria-expanded='false')
          span.sr-only Open menu
          svg.h-6.w-6(xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true')
            path(stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16')
      nuxt-link(to='/')
        span.sr-only Workflow
        img.h-24.w-auto.transition.duration-500.scale-50(class='hover:scale-110' src='/img/logo_clear_fsj.png')
      nav.hidden.space-x-10(class='md:flex')
        nuxt-link(to='/subscribe')
          span.text-base.font-medium.text-gray-500(class='hover:text-gray-900')
            | Premium Membership
        nuxt-link(to='/categories')
          span.text-base.font-medium.text-gray-500(class='hover:text-gray-900')
            | Videos
        nuxt-link(to='/state-examples')
          span.text-base.font-medium.text-gray-500(class='hover:text-gray-900')
            | State in Nuxt
        nuxt-link(to='/ask-me/search')
          span.text-base.font-medium.text-gray-500(class='hover:text-gray-900')
            | Ask me
        nuxt-link(to='/dashboard')
          span.text-base.font-medium.text-gray-500(class='hover:text-gray-900')
            | Dashboard
      .hidden.items-center.justify-end(class='md:flex md:flex-1 lg:w-0')
        nuxt-link.whitespace-nowrap.text-base.font-medium.text-gray-500(
          v-if='!user' to='/login' class='hover:text-gray-900'
          ) Sign in
        //- User(v-if='user' :user='user')
        nuxt-link.transition.duration-500.ml-8.whitespace-nowrap.inline-flex.items-center.justify-center.px-4.py-2.border.border-transparent.rounded-md.shadow-sm.text-base.font-medium.text-white.bg-indigo-600(
          v-if='!user' 
          to='/register' 
          class='hover:scale-110 hover:bg-indigo-700'
          ) Sign up
          
      button.hidden(class='md:block' @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')")
        svg.h-6.w-6.text-gray-50(v-if="$colorMode.value == 'dark'" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor')
          path(d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z')
        svg.h-6.w-6(v-if="$colorMode.value == 'light'" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor')
          path(fill-rule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clip-rule='evenodd')
    ElementsBackButton

</template>
