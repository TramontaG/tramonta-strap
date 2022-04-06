import { FASTElement, customElement, attr } from '@microsoft/fast-element';
import template from './template';

@customElement({
	name: 'toggable-button',
	template,
})
export default class TogglableButton extends FASTElement {
	@attr text = 'Test';
	@attr active = true;
}
