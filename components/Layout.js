import NavBar from './NavBar'
import Head from 'next/head'

const Layout = props => (
	<div>
		<Head>
			<title>BitzPrice</title>
			<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
		</Head>
		<NavBar/>
		{props.children}
	</div>
)

export default Layout