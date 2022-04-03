import ComponentBase from 'src/componentBase';
import { createRandomId } from 'src/helpers';
import { AlertConstructorOptions } from './models';

class Alert extends ComponentBase {
	private showTime: number;
	private showing: boolean;

	constructor({ showtime, parent }: AlertConstructorOptions) {
		super({ parent });
		this.showTime = showtime * 1000;
		this.showing = false;
		this.message = '';
	}

	showError(message: string) {
		this.message = message;
		this.show();
		setTimeout(this.hide, this.showTime);
	}

	showSuccess(message: string) {
		this.message = message;
		this.show();
		setTimeout(this.hide, this.showTime);
	}

	set message(message: string) {
		this.message = message;
	}

	toggle() {
		this.showing = !this.showing;
	}

	show() {
		this.showing = true;
	}

	hide() {
		this.showing = false;
	}
}

export default Alert;
