<template>
    <div class="container-fluid py-5">
        <div class="container-md p-5 rounded-4" id="login_container">
        <form action="" method="post">
            <div class="row-cols-1 row">
                <div class="col mb-4 d-flex justify-content-center">
                    <div class="fs-2 fw-semibold">Iniciar sesion</div>
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
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña">
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="row row-cols-1">
                        <div class="col d-flex justify-content-center">
                            <div class="form-text">No tienes una cuenta? haz click <router-link class="text-danger fw-semibold" :to="'/registro'">aquí!</router-link></div>
                        </div>
                        <div class="col d-flex justify-content-center text-center">
                            <div class="form-text">Olvidate tu contraseña o nombre de usuario? haz click <a class="text-danger fw-semibold" href="#">aquí!</a></div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary px-4 fw-bold"> Ingresar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    name: "UserLogin"

}
</script>

<style>
#login_container{
    background: #DEDEDE;
}
#login_icon{
    width: 100px;
}
</style>