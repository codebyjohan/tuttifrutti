

<template>
  <header>
    <img src="/assets/Logga.png" alt="Sidans logga" />
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Kategorier</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Recept</RouterLink>
      </li>
    </ul>
  </nav>
</header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>
    AJETI - DREAM TEAM
    </p>
  </footer>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inria Serif', serif;
}
img {
  max-width: 100%;
  width: 50px;
}
header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border-bottom: rgba(0,0,0,0.5) solid 2px;
}

li, a {
  display: inline-block;
  list-style-type: none;
  text-decoration: none;
  padding: 20px;
  font-size: large;
}
footer {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
</style>
