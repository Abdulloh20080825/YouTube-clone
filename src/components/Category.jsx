import React from 'react';

const Category = ({ data, setSelectCategory }) => {
	return (
		<div className='bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 transition duration-200 cursor-pointer' onClick={() => setSelectCategory(data)}>
			<p className='text-xl font-bold'>{data}</p>
		</div>
	);
};

export default Category;
