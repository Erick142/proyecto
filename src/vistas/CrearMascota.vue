<template>
<div class="container-fluid px-0">
	<div class="container-lg my-5 mascota-container rounded-4">
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
							<input type="text" class="form-control" id="floatingName" placeholder="nombre de tu mascota" v-model="mascota.nombre"/>
							<label for="floatingName">
								nombre de tu mascota
							</label>
						</div>
					</div>
					<div class="col mb-3">
						<div class="row">
							<div class="col-8">
								<div class="form-floating">
									<input type="number" min="0" class="form-control" id="floatingAge" placeholder="edad de tu mascota en meses" v-model="mascota.edad"/>
									<label for="floatingAge">
										edad de tu mascota en meses
									</label>
								</div>
							</div>
							<div class="col-4">
								<select class="form-select h-100" v-model="mascota.sexo">
									<option selected>Sexo</option>
									<option value="Macho">Macho</option>
									<option value="Hembra">Hembra</option>
								</select>
							</div>
						</div>
					</div>
					<div class="col mb-3">
						<div class="form-floating">
							<input type="text" class="form-control" id="floatingespecie" placeholder="especie" v-model="mascota.especie"/>
							<label for="floatingespecie">
								especie
							</label>
						</div>
					</div>
					<div class="col mb-3">
						<div class="form-floating">
							<textarea name="descripcion" id="floatingDescripcion" class="form-control" cols="30" rows="10" placeholder="Descripcion" v-model="mascota.descripcion"></textarea>
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
							<input type="text" class="form-control" id="floatingchip" placeholder="numero de chip" v-model="mascota.nChip"/>
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
							<input multiple type="file" class="form-control" id="inputImagen" @change="procesarImagenes"/>
						</div>
					</div>
					<div class="col mb-3">
						<div id="carouselExample" class="carousel slide">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<div class="imagen-container-crear">
										<img src="..\img\narices.jpg" class="foto-mascota-crear" alt="...">
									</div>
								</div>
								<div class="carousel-item">
									<div class="imagen-container-crear">
										<img src="..\img\narices.jpg" class="foto-mascota-crear" alt="...">
									</div>
								</div>
								<div class="carousel-item">
									<div class="imagen-container-crear">
										<img src="..\img\narices.jpg" class="foto-mascota-crear" alt="...">
									</div>
								</div>
							</div>
							<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 d-flex justify-content-center mb-3">
				<button class="btn btn-primary px-4 fw-semibold" @click="enviarFormulario">
					agregar mascota
				</button>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap'
import router from "@/router.js";
import axios from "axios";
export default {
    name: "CrearMascota",
	data(){
		return{
			mascota:{
				token:null,
				nombre:null,
				descripcion:null,
				edad:null,
				especie:null,
				sexo:null,
				nChip:null,
				fotos:[],
				extraviada:'no'
			}
		}
	},
	methods:{
		async enviarFormulario(){
			try{
				await axios.post("http://localhost:3001/mascota/agregar",this.mascota);
				router.push("/home")
			}catch(e){
				console.log(e)
			}	
		},
		procesarImagenes(event) {
			this.mascota.fotos=[]
			const files = event.target.files;
			if (files && files.length > 0) {
				for (let i = 0; i < files.length; i++) {
				const file = files[i];
				const reader = new FileReader();

				reader.onload = () => {
					const base64String = reader.result.split(",")[1]; // Obtenemos la cadena Base64 sin el encabezado

					// Agregamos la cadena Base64 al array de fotos
					this.mascota.fotos.push(base64String);
					this.actualizarCarrusel();
				};

				reader.readAsDataURL(file);
				}
			}
		},
		actualizarCarrusel(){
			const carrusel = new bootstrap.Carousel(document.getElementById("carouselExample"));
			const carouselInner = document.querySelector(".carousel-inner");
			carouselInner.innerHTML="";
			for(let i=0;i<this.mascota.fotos.length;i++){
				if(i==0){
					carouselInner.innerHTML+=`<div class="carousel-item active"><div class="imagen-container-crear"><img src="${'data:image/png;base64,'+this.mascota.fotos[i]}" class="foto-mascota-crear" alt="..."></div></div>`;
				}else{
				carouselInner.innerHTML+=`<div class="carousel-item"><div class="imagen-container-crear"><img src="${'data:image/png;base64,'+this.mascota.fotos[i]}" class="foto-mascota-crear" alt="..."></div></div>`;
				}
			}
			carrusel.dispose();
		}
	},
	mounted(){
		this.mascota.token=localStorage.getItem("token")
	}
}
</script>

<style>
.mascota-container{
    background: #DEDEDE;
}
#floatingDescripcion{
 height: 200px;
}
.imagen-container-crear{
	width: 100%;
	height: 0;
	padding-top: 100%;
	position: relative;
}
.foto-mascota-crear{
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
}
</style>