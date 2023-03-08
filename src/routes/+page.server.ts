import { WAKA_APP_SECRET } from '$env/static/private'
import type { PageServerLoad } from './$types'

const baseUrl = 'https://wakatime.com/api/v1/'

export const load = (async ({ fetch }) => {
  try {
    const res = await fetch(`${baseUrl}users/cesarnml/all_time_since_today`, {
      headers: {
        Authorization: `Basic ${WAKA_APP_SECRET}`,
        'Content-Type': 'application/json',
      },
    })
    console.log('res:', res)
    if (res.ok) {
      return res.json()
    }
    throw new Error('Network response was not ok')
  } catch (err) {
    console.error({ err })
  }
}) satisfies PageServerLoad
