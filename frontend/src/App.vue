<template>
  <header>
    <img src="/assets/Logga.png" alt="Sidans logga" />
    <nav>
      <ul>
        <li>
          <RouterLink to="/">HEM</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">KATEGORIER</RouterLink>
        </li>
        <li>
          <RouterLink to="/recipes">RECEPT</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <p>AJETI - DREAM TEAM test</p>
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
    width: 100px;
    padding-left: 20px;
    padding-top: 20px;
  }
  header {
    border-bottom: rgba(0, 0, 0, 0.5) solid 2px;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  li,
  a {
    list-style-type: none;
    text-decoration: none;
    font-size: 1.2rem;
    padding-bottom: 5px;
    color: #000;
  }
  footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
</style>
