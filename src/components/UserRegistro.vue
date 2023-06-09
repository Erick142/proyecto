<template>
  <div class="container-fluid py-5">
        <div class="container-md p-5 rounded-4" id="login_container">
        <form action="" method="post">
            <div class="row-cols-1 row">
                <div class="col mb-4 d-flex justify-content-center">
                    <div class="fs-2 fw-semibold">Registrarce</div>
                </div>
                <div class="col mb-4 d-flex justify-content-center">
                    <img src="..\img\in.png" alt="" id="login_icon">
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatinguUser" placeholder="Nombre de usuario">
                        <label for="floatinguUser">Nombre de usuario</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingEmail" placeholder="Email">
                        <label for="floatingEmail">Email</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña">
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPasswordConfirm" placeholder="Contraseña">
                        <label for="floatingPasswordConfirm">Confirmar contraseña</label>
                    </div>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary px-4 fw-bold"> Registrarce</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    name: "UserRegistro"
}
</script>

<style>

</style>