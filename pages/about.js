import MainLayout from '../components/layouts/MainLayout'

export default function About() {
	return (
		<div className="container-md my-8">
			<h1 className="mb-4">Hola mundo!</h1>
			<p>Somos 2 amigos, diseñadores y programadores, con una pasión enorme por nuestra vocación. <code>Diseñamela</code> es un proyecto Open Source y sin fines de lucro, con el objetivo de hacerle la vida más fácil a colegas diseñadores al rededor del mundo.</p>
			<p>Allá por 2019 empezamos este proyecto como una excusa para crear algo en conjunto y seguir aprendiendo en el proceso. La propuesta se basa en desarrollar pequeñas - pero fabulosas - aplicaciones que resuelvan problemas de diseño.</p>
		</div>
		)
	}
	
	About.Layout = MainLayout
	