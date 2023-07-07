<template>
	<div class="container-fluid px-0">
		<div class="container-lg my-5 mascota-container rounded-4">
			<div class="row">
				<div class="col-12 d-flex justify-content-center mt-3 mb-4">
					<div class="row row-cols-1">
						<div class="col text-center">
							<h2>Dar en adopción</h2>
						</div>
						<div class="col text-center">
							<div>Proporcionanos detalles sobre la mascota a la que deseas buscar un hogar</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="row row-cols-1 px-5">
						<div class="col mb-3">
							<div class="row">
								<div class="col-8">
									<div class="form-floating">
										<input type="number" min="0" class="form-control" id="floatingAge"
											placeholder="edad de tu mascota en meses" v-model="anuncio.edad" />
										<label for="floatingAge">Edad de la mascota en meses</label>
									</div>
								</div>
								<div class="col-4">
									<select class="form-select h-100" v-model="anuncio.sexo">
										<option disabled value="">Sexo</option>
										<option value="Macho">Macho</option>
										<option value="Hembra">Hembra</option>
									</select>
								</div>
							</div>
						</div>
						<div class="col mb-3">
							<div class="form-floating">
								<input type="text" class="form-control" id="floatingespecie" placeholder="especie"
									v-model="anuncio.especie" />
								<label for="floatingespecie">Especie</label>
							</div>
						</div>
						<div class="col mb-3">
							<div class="form-floating">
								<textarea name="descripcion" id="floatingDescripcion" class="form-control" cols="30"
									rows="10" placeholder="Descripcion" v-model="anuncio.descripcion"></textarea>
								<label for="floatingDescripcion">Descripcion</label>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="row row-cols-1 px-5">
						<div class="col mb-3">
							<div class="input-group mb-3">
								<label class="input-group-text" for="inputImagen">Agrega imágenes para que la gente conozca
									a su próxima mascota</label>
							</div>
							<div class="input-group mb-3">
								<input multiple type="file" style="background-color:skyblue;" class="form-control"
									id="inputImagen" @change="procesarImagenes" />
							</div>
						</div>
						<div class="col mb-3">
							<div id="carouselExample" class="carousel slide">
								<div class="carousel-inner">
									<div v-for="(foto, index) in anuncio.fotos" :key="index"
										:class="['carousel-item', { active: index === 0 }]">
										<div class="imagen-container-crear">
											<img :src="'data:image/png;base64,' + foto" class="foto-mascota-crear"
												alt="..." />
										</div>
									</div>
								</div>
								<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
									data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
									data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 d-flex justify-content-center mb-3">
					<button class="btn btn-primary px-4 fw-semibold" @click="enviarFormulario">Publicar anuncio</button>
				</div>
			</div>
		</div>
	</div>
</template>
  
<script>
import axios from "axios";
import jwtDecode from "jwt-decode";

export default {
	name: "CrearAnuncio",
	data() {
		return {
			idUsuario: null,
			anuncio: {
				idUsuario: null,
				especie: null,
				descripcion: null,
				edad: null,
				sexo: null,
				fotos: [],
				estadoAdoptado: false,
			},
		};
	},
	methods: {
		async enviarFormulario() {
			try {
				console.log(this.anuncio)
				await axios.post("http://localhost:3001/adopcion/agregar", this.anuncio);
				this.$router.push("/adopcion/listado");
			} catch (e) {
				console.log(e);
			}
		},
		procesarImagenes(event) {
			this.anuncio.fotos = [];
			const files = event.target.files;
			if (files && files.length > 0) {
				for (let i = 0; i < files.length; i++) {
					const file = files[i];
					const reader = new FileReader();

					reader.onload = () => {
						const base64String = reader.result.split(",")[1]; // Obtenemos la cadena Base64 sin el encabezado

						// Agregamos la cadena Base64 al array de fotos
						this.anuncio.fotos.push(base64String);
					};

					reader.readAsDataURL(file);
				}
			}
		},
	},
	mounted() {
		const token = localStorage.getItem("token");
		const tokenData = jwtDecode(token);
		this.idUsuario = tokenData.id;
		this.anuncio.idUsuario = this.idUsuario;
	},
};
</script>

<style>
.mascota-container {
	background: #DEDEDE;
}

#floatingDescripcion {
	height: 200px;
}

.imagen-container-crear {
	width: 100%;
	height: 0;
	padding-top: 100%;
	position: relative;
}

.foto-mascota-crear {
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
}</style>