/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API_URL: "https://api.brahmikalp.com/api/",

    //main env
    NEXT_APP_URL: "https://bullrider.shop",
    NEXT_APP_API_KEY: "PWKywAXvsCjpAIVmNqWRiazWpulTmgnTCAMFrLbvOQPdfJAkCz",

    NEXT_APP_URL_BRA: "https://bullrider.shop/bra",
    NEXT_APP_API_KEY_BRA: "UruHcepWyXLEYEivWGHdatJYcdIibqhGoapTTTdHgZetScTjaL",

    NEXT_APP_URL_BRB: "https://bullrider.shop/brb",
    NEXT_APP_API_KEY_BRB: "iqScxJUWLOdLGGPECkRFMUywmSmYUyhlvSOHHemVDrXdcMXdAN",

    NEXT_APP_URL_BRX: "https://bullrider.shop/brx",
    NEXT_APP_API_KEY_BRX: "KHUplbnkfRedjLVTHAwyOJHewLqaYbtwibTFXjeRcZKEpjAlmP",

    NEXT_APP_URL_BRT: "https://bullrider.shop/brt",
    NEXT_APP_API_KEY_BRT: "ZZiVOxkZswAIilHgzeXQGKDCNdOOwGZlKKGPqdQnNjPfxKOoFM",

    NEXT_APP_URL_BRCART: "https://bullrider.shop/brcart",
    NEXT_APP_API_KEY_BRCART: "BBqXIsTbZtIOXnQfysMDeZBZyOWAzoTvWJxIlVNzTYJUeEetwh",

    NEXT_APP_URL_BRF: "https://bullrider.shop/brf",
    NEXT_APP_API_KEY_BRF: "NCoRzWnYIrKMNtSejOjbBDBgdmJKBPetxvKekwGATSTMdJvoJe",

    NEXT_APP_URL_BRCT: "https://bullrider.shop/brct",
    NEXT_APP_API_KEY_BRCT: "wueugIVwgejrZJRIgdXwwWwMMQynNRQwgIANYVOvVUeDFyDtrq",

    NEXT_APP_URL_BRCF: "https://bullrider.shop/brcf",
    NEXT_APP_API_KEY_BRCF: "BsFacTFLqBQsJOedskvldcdxBTCbmEAKExpLiecBijwqCISUcD",

    NEXT_APP_API_URL_SHOPIFY: "https://shopifyapi.plantifygarden.in",
    // NEXT_APP_API_URL_SHOPIFY: "http://192.168.1.71:3111",
    SHOPIFY_URL: "https://arayurveda.shop",

    SHOPIFY_GENERATE_TOKEN:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9waWZ5YWNjZXNzdG9rZW4iOiJzaHBhdF8wMDg2MGQ3ZDg5YjlhM2NhOTExMmI3MGQ3MGJmNWZmZiIsInNob3BpZnl1cmwiOiJodHRwczovLzZlMTJmNy04ZS5teXNob3BpZnkuY29tIiwiaWF0IjoxNzI1NTI5Mjc3fQ.F098pecX4aU-4jqgrszxR5gU7ac2eCAbxVoBX_xZCB_6qW5G0tHGhOgJPLzYu8J757DJtFEsA6iP90XJ4zMHnSAAJ8Uww2PUqBs3TgruHLHQNORkw78aEjAHN9EEDPg5A9tQlJXcyv7N7ws0u1A5rgNyeJZ8jmi_3t4raPVQi_GjkXW1UVu9WFpc131OWMr0N75fU4yFo5OH6N_vWHzO657tDFzo18lLiLa82_4ZUBaIEWk6JO4KhniIbSaNeTM1XJoYHz6CEyAV9gxnTHKqw2SBHsyTWwgK-gTqDQ895pVWaJQ55E0zJfAI5yeI3WPG0gOijHi1exUFEpSHwA_Sow",
  },

  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  trailingSlash: true,
  reactStrictMode: true,
  output: "export",
};

export default nextConfig;
