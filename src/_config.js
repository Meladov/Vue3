export const process = {
    dev: true
}
export const site = {
home: process.dev ? 'http://localhost:8080/' : 'https://knewit.kz'
}
export const app = {
    title: 'template'
}
export const links = [
    {
        title: 'Home',
        alias: 'home',
        url: '/'
    },
    {
        title: 'About',
        alias: 'about',
        url: '/about'
    }
]
  
