<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/oferta">Nasza oferta</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/kontakt">Kontakt</router-link>
    <router-link to="/o-nas">Kim jesteśmy</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  display: flex;
  gap: 15px;
  background: #222;
  padding: 15px;
}
a {
  color: white;
  text-decoration: none;
}
</style>
