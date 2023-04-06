const allInputs = document.querySelectorAll('input');
const dayInp = document.querySelector('#day');
const monthInp = document.querySelector('#month');
const yearInp = document.querySelector('#year');
const calcBtn = document.querySelector('.calculator__line-btn');

const yearParagraph = document.querySelector('.calculator__info-year span');
const monthParagraph = document.querySelector('.calculator__info-month span');
const dayParagraph = document.querySelector('.calculator__info-day span');

const reg = /^\d+$/;
const today = new Date();
const monthsDaysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthsArr = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const showError = (input, msg) => {
	const dateBox = input.parentElement;
	const errorMsg = dateBox.querySelector('.error-info');
	dateBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = input => {
	const dateBox = input.parentElement;
	dateBox.classList.remove('error');
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, `This field is required`);
		} else {
			clearError(el);
		}
	});
};

const checkDate = (input, min) => {
	if (!input.value === reg.test(input.value)) {
		showError(input, `Wrong format, numbers only`);
	} else if (Number(input.value) > min) {
		showError(input, `Must be a valid ${input.previousElementSibling.innerText.toLowerCase()}`);
	}
};

const checkDay = (input, month) => {
	checkDate(dayInp, 31);
	if (monthsDaysArr[month.value - 1] === 30 && input.value > 30) {
		showError(input, `There are ${monthsDaysArr[month.value - 1]} days in ${monthsArr[month.value - 1]}`);
	} else if (monthsDaysArr[month.value - 1] === 28 && input.value > 28) {
		showError(input, `There are ${monthsDaysArr[month.value - 1]} days in ${monthsArr[month.value - 1]}`);
	}
};

const checkYear = input => {
	if (!input.value === reg.test(input.value)) {
		showError(input, `Wrong format, numbers only`);
	} else if (today - new Date(yearInp.value, monthInp.value - 1, dayInp.value) <= 0) {
		showError(input, 'Must be in the past');
	}
};

const calculateAge = (year, month, day) => {
	const birthDate = new Date(birthYear, month.value - 1, day.value);

	let ageInMilliseconds = today - birthDate;
	let ageInYears = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);

	console.log(ageInYears);

	const birthDateThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
	birthDateThisYear.setFullYear(birthDateThisYear.getFullYear() - 1);

	let ageInMonths =
		today.getMonth() + 12 * today.getFullYear() - (birthDateThisYear.getMonth() + 12 * birthDateThisYear.getFullYear());
	ageInMonths -= today.getDate() < birthDateThisYear.getDate() ? 1 : 0;

	let ageInDays = today.getDate() - birthDateThisYear.getDate();
	ageInDays += ageInDays < 0 ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() : 0;

	const monthsInYear = ageInMonths % 12;
	if (ageInYears > 1) {
		ageInYears += Math.floor(ageInMonths / 12);
	}

	yearParagraph.textContent = ageInYears;
	monthParagraph.textContent = monthsInYear;
	dayParagraph.textContent = ageInDays;
};

const checkErrors = () => {
	const dateBoxes = document.querySelectorAll('.calculator__data-box');
	let errorCount = 0;
	dateBoxes.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		calculateAge(yearInp, monthInp, dayInp);
	}
};

const main = () => {
	checkForm(allInputs);
	checkDay(dayInp, monthInp);
	checkDate(monthInp, 12);
	checkYear(yearInp);
	checkErrors();
};

const enterKeyCheck = event => {
	if (event.key === 'Enter') {
		main();
	}
};

calcBtn.addEventListener('click', () => {
	main();
});

allInputs.forEach(input => input.addEventListener('keyup', enterKeyCheck));
