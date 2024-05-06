import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

const main = {
	backgroundColor: '#FFFFFF',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

export default function SurveyDemoEmail({ id, email }: { id: string, email: string }) {
	return (
		<Html>
			<Preview>We would love to hear from you</Preview>
			<Tailwind>
				<Head />
				<Body className="text-gray-700" style={main}>
					<Container className="p-4 lg:py-16">
						<Section className="my-6">
							<div className="mb-6">
								<Heading className="font-medium text-2xl">
									{/* {submitData.title} */}
									How satisfied are you with this ssimple Survey demo?
								</Heading>
							</div>
							<div className="mb-12">
								<Text className="text-base">
									This is an example of a survey your customer will receive. Choose any of the satisfaction ratings below to continue.
								</Text>
							</div>
							<div className="flex text-center mb-6">
								<div className="w-24">
									<div className="mb-8">
										<Link href={`https://feedback.ssimple.co/survey-demo?s=1&sid=O2v2kx2UQNFnJW0q&i=${id}&e=${email}`} className="px-4 py-3 bg-sky-100 rounded-lg font-bold text-sky-500 text-base text-center">
											1
										</Link>
									</div>
									<div className="font-medium">Not Satisfied</div>
								</div>
								<div className="w-24">
									<div className="mb-8">
										<Link href={`https://feedback.ssimple.co/survey-demo?s=2&sid=O2v2kx2UQNFnJW0q&i=${id}&e=${email}`} className="px-4 py-3 bg-sky-200 rounded-lg font-bold text-sky-500 text-base text-center">
											2
										</Link>
									</div>
								</div>
								<div className="w-24">
									<div className="mb-8">
										<Link href={`https://feedback.ssimple.co/survey-demo?s=3&sid=O2v2kx2UQNFnJW0q&i=${id}&e=${email}`} className="px-4 py-3 bg-sky-300 rounded-lg font-bold text-white text-base text-center">
											3
										</Link>
									</div>
									<div className="font-medium">Just Okay</div>
								</div>
								<div className="w-24">
									<div className="mb-8">
										<Link href={`https://feedback.ssimple.co/survey-demo?s=4&sid=O2v2kx2UQNFnJW0q&i=${id}&e=${email}`} className="px-4 py-3 bg-sky-400 rounded-lg font-bold text-white text-base text-center">
											4
										</Link>
									</div>
								</div>
								<div className="w-24">
									<div className="mb-8">
										<Link href={`https://feedback.ssimple.co/survey-demo?s=5&sid=O2v2kx2UQNFnJW0q&i=${id}&e=${email}`} className="px-4 py-3 bg-sky-500 rounded-lg font-bold text-white text-base text-center">
											5
										</Link>
									</div>
									<div className="font-medium">Satisfied</div>
								</div>
							</div>
						</Section>
						<Hr className="mt-8 border-zinc-200" />
						<Section className="mt-10">
							<Text className="text-sm text-gray-400">
								Powered by <Link href={'https://survey.ssimple.co'} className="text-gray-400 underline">ssimple Survey</Link>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
