import { a as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import 'vue/server-renderer';

const redirect = defineNuxtRouteMiddleware((to, from) => {
  return navigateTo("/search");
});

export { redirect as default };
//# sourceMappingURL=redirect-CSwjhMGm.mjs.map
