import { createRandomId } from '../helpers';
import { BaseComponentConstructorOptions } from './models';

class ComponentBase {
	protected id: string;
	protected parent: HTMLElement;
	protected node: HTMLDivElement;
	constructor({ parent }: BaseComponentConstructorOptions) {
		this.id = createRandomId();

		//DOM manipulation
		this.parent = parent || document.body;
		this.node = document.createElement('div');
		this.node.id = this.id;
		this.parent.appendChild(this.node);
	}

	delete() {
		this.parent.removeChild(this.node);
	}
}

export default ComponentBase;
