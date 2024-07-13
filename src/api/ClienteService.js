import axios from "axios";

export const Api=axios.create({
    baseURL: "https://aluraflix.azurewebsites.net/",
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
      }
})

