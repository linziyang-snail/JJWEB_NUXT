<template>
    <div>
      <client-only>
        <NavBar />
      </client-only>
      <main>
       <slot />
       <LineIcon />
      </main>
      <Footer />
    </div>
  </template>
