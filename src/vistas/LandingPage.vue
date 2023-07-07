<template>
<!-- inicio carrusel-->
<div id="carouselExample" class="carousel slide shadow carousel-fade" data-bs-ride="carousel">
	<div class="carousel-indicators">
		<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">
		</button>
		<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
		</button>
		<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
		</button>
	</div>
	<div class="carousel-inner">
		<div class="carousel-item active carrusel-text">
			<img src="..\img\mascotas.jpeg" class="d-block w-100 h-100 img-carrusel" alt="..." />
			<div class="position-absolute top-0 start-0 d-flex h-100 w-100">
				<div class="container text-white">
					<div class="row row-cols-1 align-items-end h-100 pb-5">
						<div class="col mb-5">
							<div class="row ">
								<div class="col-12 d-flex justify-content-center">
									<h2 class="fs-1">
										Perritos y gatitos
									</h2>
								</div>
								<div class="col-12 d-flex justify-content-center">
									<h5>
										estos son unos Perritos y gatitos
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="carousel-item carrusel-text">
			<img src="..\img\gatos.jpg" class="d-block w-100 h-100 img-carrusel" alt="..." />
			<div class="position-absolute top-0 start-0 d-flex h-100 w-100">
				<div class="container text-white">
					<div class="row row-cols-1 align-items-end h-100 pb-5">
						<div class="col mb-5">
							<div class="row ">
								<div class="col-12 d-flex justify-content-center">
									<h2 class="fs-1">
										Perritos y gatitos
									</h2>
								</div>
								<div class="col-12 d-flex justify-content-center">
									<h5>
										estos son unos Perritos y gatitos
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="carousel-item carrusel-text">
			<img src="..\img\mascotas2.jpeg" class="d-block w-100 h-100 img-carrusel" alt="..." />
			<div class="position-absolute top-0 start-0 d-flex h-100 w-100">
				<div class="container text-white">
					<div class="row row-cols-1 align-items-end h-100 pb-5">
						<div class="col mb-5">
							<div class="row ">
								<div class="col-12 d-flex justify-content-center">
									<h2 class="fs-1">
										Perritos y gatitos
									</h2>
								</div>
								<div class="col-12 d-flex justify-content-center">
									<h5>
										estos son unos Perritos y gatitos
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true">
		</span>
		<span class="visually-hidden">
			Previous
		</span>
	</button>
	<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true">
		</span>
		<span class="visually-hidden">
			Next
		</span>
	</button>
</div>
<!-- inicio info-->
<div class="container-fluid my-5">
	<div class="row">
		<div class="col-12 col-md-8">
			<div class="row row-cols-1">
				<div class="col">
					<h1>
						Informacion
					</h1>
				</div>
				<div class="col">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iure nisi adipisci distinctio asperiores neque accusamus totam quod officia rem porro maiores quasi perspiciatis reprehenderit vero impedit, blanditiis cupiditate? Sunt! Ad vitae exercitationem quas temporibus autem ea aut natus? Praesentium, suscipit. Maiores a ipsa rem magnam ducimus, similique delectus animi illo, ea explicabo, impedit itaque minima. Unde ea repellendus a. Hic eligendi id inventore dignissimos. Facere esse eum corrupti rerum incidunt, ab velit fuga quae provident sunt atque adipisci itaque, quaerat in! Voluptatibus, animi ipsa! Voluptate eos quam excepturi esse. Illo cumque est molestiae libero praesentium consequatur, voluptatibus debitis cum ipsam laborum repellendus quo porro iure delectus. Voluptatibus assumenda odio placeat quae reprehenderit neque voluptatum recusandae laboriosam. Delectus, nemo animi. Recusandae ipsa velit voluptatum quia ullam sequi minus. Ad provident voluptas modi dolore culpa dignissimos minus explicabo reprehenderit repudiandae totam velit reiciendis aliquam asperiores quam at, ipsa quidem similique eligendi. Magni error nihil, at aliquid mollitia suscipit illum quaerat, laboriosam consequuntur ab, facilis quisquam rerum iste quas fuga hic repudiandae! Ratione quod in recusandae natus id nisi laborum consectetur optio?
					</p>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-4 p-5">
			<img src="../img/narices.jpg" class="w-100 h-100 object-fit-cover" alt="narices" />
		</div>
	</div>
</div>
</template>

<script>
export default {
    name: "LandingPage"
}
</script>

<style scoped>
.carousel-item{
    width: 100%;
    height: 93vh;
}
.img-carrusel{
    object-fit: cover;
}
.carrusel-text{
    text-shadow: 0 0 5px #555555 ;
    text-shadow: 0 0 7.5px #555555 ;
    text-shadow: 0 0 10px #555555 ;
}
</style>