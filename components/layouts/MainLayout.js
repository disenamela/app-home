import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Heading from "../../adapters/Headings";
import GithubLogo from "../GithubLogo";
import { PillSwitcher } from "react-pill-switcher";
import logo from '../../public/logo-disenamela.png';


export default function MainLayout({children, className}) {
	const [theme, setTheme] = useState();

	return (
		<div className={classNames({ 'dark': theme && theme.toLowerCase() === 'dark', className })}>
			<Head>
				{Heading()}
			</Head>

			<main>
				<header>
					<div className="container-fluid">
						<div className="row">
							<div className="col-auto">
								<Link href="/">
									<a className="logo"><img src={logo} alt="Diseñamela.com" /></a>
								</Link>
							</div>
							<div className="col flex justify-end gap-4 center-v">
								<Link href='/about'>
									<a className='link'>
										<i class="uil uil-user"></i>
										Nosotros
									</a>
								</Link>
								<a className='link' href='https://cafecito.app/disenamela' target='_blank'>
									<i class="uil uil-coffee"></i>
									Invitanos un cafe
								</a>
								<a href='https://github.com/disenamela' target='_blank'>
									<i class="uil uil-github" style={{ fontSize: '2em' }}></i>
								</a>
								<div>
									<PillSwitcher name={'theme'} onChange={(e) => setTheme(e)}
										options={[
											{
												icon: <i class="uil uil-sun" style={{ fontSize: '1.2em' }}></i>,
												value:'light',
											},
											{
												icon: <i class="uil uil-moon" style={{ fontSize: '1.2em' }}></i>,
												value:'dark'
											},
										]} />
								</div>

							</div>
						</div>
					</div>
				</header>
				{children}
			</main>
		</div>
	)
}