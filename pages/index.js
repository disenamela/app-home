import Head from 'next/head'
import { useState } from 'react';
import classnames from 'classnames'
import { PillSwitcher } from 'react-pill-switcher'

import logo from '../public/logo-disenamela.png';
import Heading from '../adapters/Headings';

export default function Home() {
	const [theme, setTheme] = useState();

	return (
		<div className={classnames({ 'dark': theme && theme.toLowerCase() === 'dark' })}>
			<Head>
				{Heading()}
			</Head>

			<main>
				<header>
					<div className="container-fluid">
						<div className="row">
							<div className="col-auto">
								<a href="/" className="logo"><img src={logo} alt="Diseñamela.com" /></a>
							</div>
							<div className="col flex justify-end gap-2 center-v">
								<div>
									<PillSwitcher name={'theme'} onChange={(e) => setTheme(e)} 
										options={[
											{
												icon: <i class="uil uil-sun" style={{fontSize: '1.2em'}}></i>,
												label: 'Light'
											},
											{
												icon: <i class="uil uil-moon" style={{fontSize: '1.2em'}}></i>,
												label: 'Dark'
											},
										]} />
								</div>
							</div>
						</div>
					</div>
				</header>

				<div className="container-md py-8">
					<h1 className="mb-4">Hola mundo!</h1>
					<p>Somos 2 amigos, diseñadores, con una pasión enorme por nuestra profesión. Allá por 2019 empezamos con este proyecto, cuando no tuvimos mejor idea que ponernos a armar pequeñas aplicaciones que nos ayuden a nosotros y a otros diseñadores. <code>Diseñamela</code> nace para eso: queremos hacerle la vida más fácil a nuestros colegas diseñadores.</p>
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

						<li key="typeScale">
							<a href="https://typescale.diseñamela.com" target="_blank">
								<img src='/AppType.svg' alt="Type Scale" />
								<h3>Type Scale</h3>
							</a>
						</li>

						<li key="social" className="comingSoon">
							<a href="#">
								<img src='/AppSocial.svg' alt="Grilla" />
								<h3>Social</h3>
							</a>
						</li>
					</ul>
				</div>
			</main>
		</div>
	)
}
