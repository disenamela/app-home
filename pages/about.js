import MainLayout from '../components/layouts/MainLayout'

export default function About() {
	return (
		<div className="container-md my-8">
			<h1 className="mb-4">Hola mundo!</h1>
			<p>Somos 2 amigos, diseñadores, con una pasión enorme por nuestra profesión. Allá por 2019 empezamos con este proyecto, cuando no tuvimos mejor idea que ponernos a armar pequeñas aplicaciones que nos ayuden a nosotros y a otros diseñadores. <code>Diseñamela</code> nace para eso: queremos hacerle la vida más fácil a nuestros colegas diseñadores.</p>
		</div>
	)
}

About.Layout = MainLayout
