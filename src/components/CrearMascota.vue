<template>
<div class="container-fluid px-0">
	<div class="container-lg my-5 mascota-container rounded-4">
		<form action="" method="post">
			<div class="row">
				<div class="col-12 d-flex justify-content-center mt-3 mb-4">
					<div class="row row-cols-1">
						<div class="col text-center">
							<h2>
								Crear mascota
							</h2>
						</div>
						<div class="col text-center">
							<div>
								Cuentanos acerca de tu mascota.
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="row row-cols-1 px-5">
						<div class="col mb-3">
							<div class="form-floating">
								<input type="text" class="form-control" id="floatingName" placeholder="nombre de tu mascota" />
								<label for="floatingName">
									nombre de tu mascota
								</label>
							</div>
						</div>
						<div class="col mb-3">
							<div class="row">
								<div class="col-8">
									<div class="form-floating">
										<input type="number" min="0" class="form-control" id="floatingAge" placeholder="edad de tu mascota en meses" />
										<label for="floatingAge">
											edad de tu mascota en meses
										</label>
									</div>
								</div>
								<div class="col-4">
									<select class="form-select h-100">
										<option selected>Sexo</option>
										<option value="1">Macho</option>
										<option value="2">Hembra</option>
									</select>
								</div>
							</div>
						</div>
						<div class="col mb-3">
							<div class="form-floating">
								<input type="text" class="form-control" id="floatingespecie" placeholder="especie" />
								<label for="floatingespecie">
									especie
								</label>
							</div>
						</div>
						<div class="col mb-3">
							<div class="form-floating">
								<textarea name="descripcion" id="floatingDescripcion" class="form-control" cols="30" rows="10" placeholder="Descripcion" ></textarea>
								<label for="floatingDescripcion">
									Descripcion
								</label>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="row row-cols-1 px-5">
						<div class="col mb-3">
							<div class="form-floating">
								<input type="text" class="form-control" id="floatingchip" placeholder="numero de chip" />
								<label for="floatingchip">
									Numero de chip
								</label>
							</div>
						</div>
						<div class="col mb-3">
							<div class="input-group mb-3">
								<label class="input-group-text" for="inputImagen">
									imagen de tu mascota
								</label>
								<input type="file" class="form-control" id="inputImagen" />
							</div>
						</div>
						<div class="col mb-3">
							<img src="../img/narices.jpg" alt="narices" class="w-100 rounded-3" />
						</div>
					</div>
				</div>
				<div class="col-12 d-flex justify-content-center mb-3">
					<button type="submit" class="btn btn-primary px-4 fw-semibold">
						agregar mascota
					</button>
				</div>
			</div>
		</form>
	</div>
</div>
</template>

<script>
export default {
    name: "CrearMascota"
}
</script>

<style>
.mascota-container{
    background: #DEDEDE;
}
#floatingDescripcion{
 height: 200px;
}
</style>