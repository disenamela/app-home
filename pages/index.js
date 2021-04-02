import Head from 'next/head'

import logo from '../public/logo-disenamela.png';

export default function Home() {
	return (
		<>
			<Head>
				<title>Diseñamela</title>
				<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<main>
				<header>
					<div className="container-fluid">
						<a href="/" className="logo"><img src={logo} alt="Diseñamela.com" /></a>
					</div>
				</header>

				<div className="container-md py-8">
					<h1 className="mb-4">Hola mundo!</h1>
					<p>Somos 2 amigos, diseñadores, con una pasión enorme por nuestra profesión. Allá por 2019 empezamos con este proyecto, cuando no tuvimos mejor idea que ponernos a armar pequeñas aplicaciones que nos ayuden a nosotros y a otros diseñadores. <code>Diseñamela</code> nace para eso: queremos optimizar ciertas tareas que a veces pueden resultar un tanto aburridas o complejas de replicar una y otra vez con cada proyecto.</p>
					<p>A continuación las funciones hasta ahora disponibles:</p>
				</div>

				<div className="container">
					<ul className="appList">
						<li key="grilla">
							<a href="https://grilla.diseñamela.com" target="_blank">
								<img src='/AppGrilla.svg' alt="Grilla" />
								<h3>Grilla</h3>
							</a>
						</li>

						<li key="grilla" className="comingSoon">
							<a href="#">
								<img src='/AppType.svg' alt="Grilla" />
								<h3>Type Scale</h3>
							</a>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}
