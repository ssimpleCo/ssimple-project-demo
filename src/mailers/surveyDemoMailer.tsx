import { render } from '@react-email/render';
import { Resend } from 'resend';
import { uid } from 'uid';

import SurveyDemoEmail from './templates/SurveyDemoEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const newId = uid(16);

const surveyDemoMailer = async (email: string) => {
	try {
		const emailHtml = render(
			<SurveyDemoEmail id={newId} email={email} />, {
			pretty: true,
		});

		const data = await resend.emails.send({
			from: 'ssimple Survey Demo <demo@ssimple.co>',
			to: [email],
			subject: 'How satisfied are you with this demo?',
			html: emailHtml,
		});

		return data;
	} catch (error: any) {
		return error.message;
	}
}

export default surveyDemoMailer;