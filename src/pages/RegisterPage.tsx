import Brand from '@/components/shared/brand'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'

function RegisterPage() {
	const [showPass, setShowPass] = useState<boolean>(false)
	return (
		<section className="flex-1 flex items-center justify-center py-20 ">
			<Card className="max-w-md border-border w-md">
				<CardHeader className="text-center">
					<div className="w-full flex justify-center mb-4">
						<Brand />
					</div>

					<CardTitle className="text-2xl font-bold text-foreground">
						Criar sua conta
					</CardTitle>

					<CardDescription className="text-muted-foreground">
						Preencha os dados para entrar na comunidade
					</CardDescription>
				</CardHeader>

				<CardContent>
					<form className="flex flex-col gap-4 ">
						<div className="flex items-center gap-4">
							<div className="flex flex-col gap-2">
								<Label htmlFor="nome" className="text-foreground">
									Nome
								</Label>
								<Input
									id="nome"
									name="nome"
									type="text"
									placeholder="Seu nome"
									required
									className="h-11 bg-background"
								/>
							</div>

							<div className="flex flex-col gap-2">
								<Label htmlFor="sobrenome" className="text-foreground">
									Sobrenome
								</Label>
								<Input
									id="sobrenome"
									name="sobrenome"
									type="text"
									placeholder="Seu sobrenome"
									required
									className="h-11 bg-background"
								/>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<Label htmlFor="email" className="text-foreground">
								E-mail institucional
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="seu.nome@ifce.edu.br"
								required
								className="h-11 bg-background"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="role" className="text-foreground">
								Vínculo
							</Label>
							<Select required>
								<SelectTrigger className="bg-background w-full h-11" id="role">
									<SelectValue placeholder="Selecione seu vínculo com o IFCE"></SelectValue>
								</SelectTrigger>

								<SelectContent>
									<SelectItem value="student">Estudante</SelectItem>
									<SelectItem value="professor">Docente</SelectItem>
									<SelectItem value="techniciam">Técnico(a)</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="flex flex-col gap-2">
							<Label htmlFor="campus" className="text-foreground">
								Campus
							</Label>
							<Select required>
								<SelectTrigger
									className="bg-background w-full h-11"
									id="campus"
								>
									<SelectValue placeholder="Selecione seu Campus do IFCE"></SelectValue>
								</SelectTrigger>

								<SelectContent>
									<SelectItem value="acarau">Acaraú</SelectItem>
									<SelectItem value="acopiara">Acopiara</SelectItem>
									<SelectItem value="aracati">Aracati</SelectItem>
									<SelectItem value="baturite">Baturité</SelectItem>
									<SelectItem value="boa_viagem">Boa Viagem</SelectItem>
									<SelectItem value="camocim">Camocim</SelectItem>
									<SelectItem value="caninde">Canindé</SelectItem>
									<SelectItem value="caucaia">Caucaia</SelectItem>
									<SelectItem value="cedro">Cedro</SelectItem>
									<SelectItem value="crateus">Crateús</SelectItem>
									<SelectItem value="crato">Crato</SelectItem>
									<SelectItem value="fortaleza">Fortaleza</SelectItem>
									<SelectItem value="guaramiranga">Guaramiranga</SelectItem>
									<SelectItem value="horizonte">Horizonte</SelectItem>
									<SelectItem value="iguatu">Iguatu</SelectItem>
									<SelectItem value="itapipoca">Itapipoca</SelectItem>
									<SelectItem value="jaguaribe">Jaguaribe</SelectItem>
									<SelectItem value="jaguaruana">Jaguaruana</SelectItem>
									<SelectItem value="juazeiro_do_norte">
										Juazeiro do Norte
									</SelectItem>
									<SelectItem value="limoeiro_do_norte">
										Limoeiro do Norte
									</SelectItem>
									<SelectItem value="maracanau">Maracanaú</SelectItem>
									<SelectItem value="maranguape">Maranguape</SelectItem>
									<SelectItem value="mombaca">Mombaça</SelectItem>
									<SelectItem value="morada_nova">Morada Nova</SelectItem>
									<SelectItem value="paracuru">Paracuru</SelectItem>
									<SelectItem value="pecem">Pecém</SelectItem>
									<SelectItem value="quixada">Quixadá</SelectItem>
									<SelectItem value="sobral">Sobral</SelectItem>
									<SelectItem value="tabuleiro_do_norte">
										Tabuleiro do Norte
									</SelectItem>
									<SelectItem value="taua">Tauá</SelectItem>
									<SelectItem value="tiangua">Tianguá</SelectItem>
									<SelectItem value="ubajara">Ubajara</SelectItem>
									<SelectItem value="umirim">Umirim</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="flex flex-col gap-2">
							<Label htmlFor="password" className="text-foreground">
								Senha
							</Label>

							<div className="relative">
								<Input
									id="password"
									name="password"
									type={showPass ? 'text' : 'password'}
									placeholder="Digite sua senha"
									required
									className="h-11 bg-background"
								></Input>

								<button
									className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
									type="button"
									onClick={() => setShowPass((prev) => !prev)}
								>
									{showPass ? (
										<EyeOffIcon className="size-4" />
									) : (
										<EyeIcon className="size-4" />
									)}
								</button>
							</div>

							<p className="text-xs text-muted-foreground">
								Mínimo de 8 caracteres com letras e números
							</p>
						</div>

						<Button type="submit" className="mt-2 h-11">
							{' '}
							Criar conta
						</Button>
					</form>
				</CardContent>

				<CardFooter className="border-t border-border ">
					<p className="text-sm text-muted-foreground text-center w-full">
						Já tem conta?{' '}
						<a href="/login" className="text-primary">
							Entrar
						</a>
					</p>
				</CardFooter>
			</Card>
		</section>
	)
}

export default RegisterPage
