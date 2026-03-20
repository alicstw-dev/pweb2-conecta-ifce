
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from '@/components/ui/accordion'

const faq = [
	{
		question: 'Quem pode participar do ConectaIFCE?',
		answer:
			'Todos os membros da comunidade IFCE: alunos, professores, técnicos administrativos e egressos. Basta ter uma conta para acessar a plataforma.',
	},
	{
		question: 'Como funciona a formação de grupos de estudo?',
		answer:
			'Você pode explorar a plataforma e buscar por interesses em comum para encontrar ou criar grupos de estudo com outros usuários.',
	},
	{
		question: 'Posso divulgar meu projeto de pesquisa?',
		answer:
			'Sim, você pode compartilhar seus projetos, pesquisas e trabalhos acadêmicos com a comunidade para obter visibilidade e colaboração.',
	},
	{
		question: 'A plataforma está disponível em dispositivos móveis?',
		answer:
			'Sim, a plataforma é responsiva e pode ser acessada normalmente por celulares, tablets e computadores.',
	},
	{
		question: 'Como funcionam as badges e conquistas?',
		answer:
			'As badges são conquistas obtidas conforme sua participação na plataforma, como interações, publicações e contribuições na comunidade.',
	},
]

function FaqSection() {
	return (
		<section className="bg-card py-20">
			<div className="container-main max-w-3xl">
				<div className="mx-auto text-center">
					<p className="text-primary uppercse text-sm font-semibold tracking-wide">
						FAQ
					</p>
					<h2 className="mt-3 text-4xl font-bold text-balance text-foreground tracking-tight">
						Perguntas Frequentes
					</h2>
				</div>

				<Accordion type='single' collapsible className='w-full mt-16'>
					{faq.map((item) => (
						<AccordionItem key={item.question} value={item.question}>
							<AccordionTrigger className='text-base font-medium text-foreground hover:text-primary'>
								{item.question}
							</AccordionTrigger>

							<AccordionContent className='text-sm leading-relaxed text-muted-foreground'>
								{item.answer}

							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	)
}

export default FaqSection
