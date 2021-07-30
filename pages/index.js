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
												icon: <i class="uil uil-sun" style={{ fontSize: '1.2em' }}></i>,
												label: 'Light'
											},
											{
												icon: <i class="uil uil-moon" style={{ fontSize: '1.2em' }}></i>,
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
						<AppCard
							key='grilla'
							title='Grilla'
							link='https://grilla.diseñamela.com'
							icon='/AppGrilla.svg'
						/>
						<AppCard
							key='TypeScale'
							title='Type Scale'
							link='https://typescale.diseñamela.com'
							icon='/AppType.svg'
						/>
						<AppCard
							key='Social'
							title='Social'
							link={null}
							icon='/AppSocial.svg'
							comingSoon
						/>
					</ul>
				</div>

				<div className="container-md py-6">
					<h3 className="text-3xl">Otras apps</h3>

					<ul className="appList --seccondary">
						<AppCardSeccondary
							key='Pixabay'
							title='Pixabay'
							link='https://pixabay.com/'
							icon='/external-apps/pixabay.png'
							bg='#4ca84c'
						/>

						<AppCardSeccondary
							key='ifonts'
							title='ifonts'
							link='https://ifonts.xyz/'
							icon='/external-apps/ifonts.bmp'
							bg='#000'
						/>

						<AppCardSeccondary
							key='Icons8'
							title='Icons8'
							link='https://icons8.com/'
							icon='/external-apps/icons8.png'
							bg='#1fb141'
						/>


						<AppCardSeccondary
							key='mockupworld'
							title='Mockup World'
							link='https://www.mockupworld.co/'
							icon='/external-apps/mockupworld.png'
							bg='#fff'
						/>

						<AppCardSeccondary
							key='mockupworld'
							title='Mockup World'
							link='https://www.mockupworld.co/'
							icon='/external-apps/mockupworld.png'
							bg='#fff'
						/>
					</ul>

				</div>
			</main>
		</div>
	)
}

function AppCard({ title, link, icon, comingSoon = false }) {
	return (
		<li className={comingSoon && "comingSoon"}>
			<a href={link}>
				<img src={icon} alt={title} />
				<h3>{title}</h3>
			</a>
		</li>
	)
}

function AppCardSeccondary({ title, link, icon, comingSoon = false, bg = '' }) {
	return (
		<li className={comingSoon && "comingSoon"}>
			<a href={link + '?ref=https://www.xn--diseamela-o6a.com/'} target="_blank" style={{ backgroundColor: bg }}>
				<img src={icon} alt={title} />
			</a>
			<h3>{title}</h3>
		</li>
	)
}