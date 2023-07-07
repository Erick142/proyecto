<template>
  <div class="container-fluid bg-dark text-white">
  <footer class="footer py-3">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item "><a href="#" class="nav-link px-2 text-white">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li>
    </ul>
    <p class="text-center">© 2023 Erick & Jorge</p>
  </footer>
</div>
</template>

<script>
export default {
    name: "FooTer"
}
</script>

<style>
a{
    text-decoration: none;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(54, 54, 54);
  color: white;
  text-align: center;
}

</style>