import { html } from '@microsoft/fast-element';
import ToggableButton from '.';

const template = html<ToggableButton>`
	<div>
		<button active="${x => x.active}">${x => x.text}</button>
	</div>
`;

export default template;
