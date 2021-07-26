import './Filter.css';

const Filter = ({ filterFunc, menuItem, buttons }) => {
	return (
		<div className="filter">
			<div className="filter__buttons">
				{
					buttons.map((elem, index) => {
						return <button type="button" onClick={() => filterFunc(elem)} className="filter__btn" key={index.toString()}>{elem}</button>
					})
				}
			</div>

			<div className="filter__list">
				{
					menuItem.map((item) => {
						return <div className="filter__item" key={item.id}>
							<div className="filter__item-body">
								<div className="filter__item-image-btn" >
									<a href="/"></a>
									<img src={item.image} alt="" />
								</div>
								<h2>{item.title}</h2>
								<p>{item.description}</p>
							</div>
						</div>
					})
				}
			</div>
		</div>
	)
}

export default Filter;