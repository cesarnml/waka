import type { PageServerLoad } from './$types'

export const load = (async (event) => {
  console.log('event:', event)
  return {}
}) satisfies PageServerLoad
