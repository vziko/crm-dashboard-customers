import WOW from "wow.js";
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

let wow = new WOW(
	{
		boxClass:     'wow',      // default
		animateClass: 'animate__animated', // default
		offset:       0,          // default
		mobile:       true,       // default
		live:         true        // default
	}
)

wow.init();

const $body = document.querySelector('body');
const $menuBurger = document.querySelector('.menu-burger');
const $menuBackdrop= document.querySelector('.menu-backdrop');
const $searchInput = document.querySelector('.search__input');
const $searchButton = document.querySelector('.search__button');


[ $menuBurger, $menuBackdrop ].forEach(element => {
	element.addEventListener('click', (e) => {
		$body.classList.toggle('open-mobile-menu');
	});
})

let table = new DataTable('#customers-table', {
	dom: '<"customer-table__body"t><"customer-table__footer"ip>',
	ordering: false,
	lengthMenu: [8],
	bLengthChange : false,
	responsive: {
		details: {
			type: 'column'
		}
	},
	pagingType: 'simple_numbers',
	language: {
		search: '_INPUT_',
		searchPlaceholder: 'Search'
	},
	searchPanes: {
		collapse: false
	}
});

const searchTable = () => {
	table.search($searchInput.value).draw();
}

$searchInput.addEventListener('keyup',  event => {
	if (event.keyCode === 13) {
		searchTable();
	}
});

$searchButton.addEventListener('click', searchTable);