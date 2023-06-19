<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { registerWhithEmail } from "~/composables/useAuth";

const email = ref(null);
const password = ref(null);
const username = ref(null);
const name = ref(null);
const hasError = ref(null);
const errorMessage = ref(null);

const postRegisterForm = async () => {
  registerWhithEmail(username.value, name.value, email.value, password.value);
};
</script>

<template lang="pug">
.h-screen(class='dark:bg-slate-800')
  .flex.items-center.justify-center.px-4(class='sm:px-6 lg:px-8')
    .max-w-md.w-full
      .flex
        img.mx-auto.h-24.w-auto(src='/img/logo_clear_fsj.png' alt='full stack jack logo')
        h1.py-9.text-center.text-5xl.font-extrabold.text-gray-900(class='dark:text-gray-400')
          | Full Stack Jack
      div
        h2.text-center.text-3xl.font-extrabold.mt-5.text-gray-900(class='dark:text-white')
          | Sign Up
      .bg-red-100.border.border-red-400.text-red-700.px-4.py-3.rounded.relative.mt-3(v-if='response.hasErrors && errors' role='alert')
        strong.font-bold Oops, try again! 
        ul.block(class='sm:inline')
          li(v-for='[key, value] in errors')
            | {{ value.check.errorMessage }}
      form.mt-8.space-y-6(v-on:submit.prevent='' action='#' method='POST')
        input(type='hidden' name='remember' value='true')
        .rounded-md.shadow-sm.-space-y-px.mb-1
          div
            label.sr-only(for='name') Name
            input#name.appearance-none.rounded-none.relative.block.w-full.px-3.py-2.border.border-gray-300.placeholder-gray-500.text-gray-900.rounded-t-md(v-model='name' name='name' required='' class='dark:bg-slate-500 dark:text-white dark:placeholder-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' :class="errors.has('name') ? ' border-red-500' : ''" placeholder='Name')
        .rounded-md.shadow-sm.-space-y-px.mb-1
          div
            label.sr-only(for='email-address') Username
            input#username.appearance-none.rounded-none.relative.block.w-full.px-3.py-2.border.border-gray-300.placeholder-gray-500.text-gray-900.rounded-t-md(type='email' v-model='username' name='username' required='' class='dark:bg-slate-500 dark:text-white dark:placeholder-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' :class="errors.has('username') ? ' border-red-500' : ''" placeholder='username')
        .rounded-md.shadow-sm.-space-y-px.mb-1
          div
            label.sr-only(for='email-address') Email address
            input#email-address.appearance-none.rounded-none.relative.block.w-full.px-3.py-2.border.border-gray-300.placeholder-gray-500.text-gray-900.rounded-t-md(v-model='email' name='email' type='email' autocomplete='email' required='' class='dark:bg-slate-500 dark:text-white dark:placeholder-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' :class="errors.has('email') ? ' border-red-500' : ''" placeholder='Email address')
        div
          label.sr-only(for='password') Password
          input#password.appearance-none.rounded-none.relative.block.w-full.px-3.py-2.border.border-gray-300.placeholder-gray-500.text-gray-900.rounded-b-md(v-model='password' name='password' type='password' autocomplete='current-password' required='' class='dark:bg-slate-500 dark:text-white dark:placeholder-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' :class="errors.has('password') ? ' border-red-500' : ''" placeholder='Password')
        .flex.items-center.justify-between
          .text-sm
            a.font-medium.text-indigo-600(href='#' class='hover:text-indigo-500')
              | Forgot your password?
        div
      button.mt-5.group.relative.w-full.flex.justify-center.py-2.px-4.border.border-transparent.text-sm.font-medium.rounded-md.text-white.bg-indigo-600(@click.prevent='postRegisterForm' class='hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500')
        span.absolute.left-0.inset-y-0.flex.items-center.pl-3
          // Heroicon name: solid/lock-closed
          svg.h-5.w-5.text-indigo-500(class='group-hover:text-indigo-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true')
            path(fill-rule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clip-rule='evenodd')
        |           register

</template>
