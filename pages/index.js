import Head from 'next/head'

import logo from '../public/logo-disenamela.png';
import appGrilla from '../public/appGrilla.svg';
import appType from '../public/appType.svg';

export default function Home() {
	return (
		<>
			<Head>
				<title>Diseñamela</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header>
					<div className="container-fluid">
						<a href="/" className="logo"><img src={logo} alt="Diseñamela.com" /></a>
					</div>
				</header>

				<div className="container-md py-8">
					<h1 className="mb-4">Hola, diseñadores!</h1>
					<p>Recién empezamos con este proyecto. Somos 2 diseñadores que no se nos ocurrió mejor idea que desarrollar aplicaciones que ayuden a otros diseñadores para facilitar ciertas tareas que a veces pueden resultar un tanto aburridas o complejas. A continuación las funciones hasta ahora disponibles. De nada.</p>
				</div>

				<div className="container">
					<ul className="appList clearfix">
						<li key="grilla">
							<a href="https://grilla.diseñamela.com" target="_blank">
								<img src={appGrilla} alt="Grilla" />
								<h3>Grilla</h3>
							</a>
						</li>

						<li key="grilla" className="comingSoon">
							<a href="#">
								<img src={appType} alt="Grilla" />
								<h3>Type Scale</h3>
							</a>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}
