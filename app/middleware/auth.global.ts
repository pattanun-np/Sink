export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server)
    return

  // Auth disabled - skip token check
  if (to.path === '/dashboard/login') {
    return navigateTo('/dashboard')
  }
})
