import { Button } from '../ui/button'

function Navbar() {
	return (
	<header>
		<nav>
			<a href="/">Logo</a>
			<div>
				<a href="/">Início</a>
				<a href="/#feature-section">Recursos</a>
				<a href="/#faq-section">Perguntas Frequentes</a>
			</div>

			<div>
				<Button variant = "ghost" size= "lg" asChild>
					<a href="/login">Entrar</a>
				</Button>

				<Button size = "lg" asChild>
					<a href="/login">Criar Conta</a>
				</Button>
			</div>
		</nav>
	</header>
	)
}

export default Navbar
