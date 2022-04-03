export const createRandomId = () => {
	const randomNumber = (Math.random() * 1000000).toString();
	const now = new Date().getTime().toString();
	return (randomNumber + now)
		.split('')
		.map(char =>
			Math.random() > 0.5
				? String.fromCharCode(char.charCodeAt(0) ^ Math.round(Math.random() * 100))
				: ''
		)
		.join('');
};
