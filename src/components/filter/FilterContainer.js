import { useState } from 'react';
import Filter from "./Filter";
import DB from '../../DB';

const allCategories = ['All', ...new Set(DB.map(item => item.category))];

console.log(allCategories);

const FilterContainer = () => {

	const [menuItem, setMenuItem] = useState(DB);
	const [buttons, setButtons] = useState(allCategories);

	const filterFunc = (button) => {

		if (button === 'All') {
			setMenuItem(DB);
			return;
		}

		const filteredData = DB.filter(item => item.category === button);
		setMenuItem(filteredData)
	}

	return (
		<>
			<Filter filterFunc={filterFunc} menuItem={menuItem} buttons={buttons} />
		</>
	)
}

export default FilterContainer;