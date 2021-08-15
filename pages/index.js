import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
	return (
	<>
		<div className="my-8 container">
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
					key='Croma'
					title='Croma'
					link='https://croma.diseñamela.com'
					icon='/AppCroma.svg'
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
		<div className="container-md pb-6 pt-4">
			<h2 className="text-lg text-center dark:text-white my-4">Apps de terceros</h2>
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
			</ul>
		</div>
	</>
	)
}

Home.Layout = MainLayout

function AppCard({ title, link, icon, comingSoon = false }) {
	return (
		<li className={comingSoon ? "comingSoon" : ""}>
			<a href={link}>
				<img src={icon} alt={title} />
				<h3>{title}</h3>
			</a>
		</li>
	)
}

function AppCardSeccondary({ title, link, icon, comingSoon = false, bg = '#fff' }) {
	return (
		<li className={comingSoon ? "comingSoon" : ""}>
			<a href={link + '?ref=www.diseñamela.com'} target="_blank" style={{ backgroundColor: bg }}>
				<img src={icon} alt={title} />
			</a>
			<h3>{title}</h3>
		</li>
	)
}