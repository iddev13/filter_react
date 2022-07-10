import './Filter.css';
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion"

const Filter = ({ filterFunc, menuItem, buttons }) => {


	return (
		<div className="filter">
			<div className="filter__buttons">
				{
					buttons.map((elem, index) => {
						return <button
							type="button"
							onClick={() => filterFunc(elem)}
							className="filter__btn" key={index.toString()}
						>{elem}</button>
					})
				}
			</div>

			<motion.div
				layout
				className="filter__list">
				<AnimatePresence>

					{
						menuItem.map((item) => {
							return <motion.div
								// animate={{ y: 100 }}
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								layout
								className="filter__item"
								key={item.id}>
								<div className="filter__item-body">
									<div className="filter__item-image-btn" >
										<a href="#">
											<img src={item.image} alt="Alt" />
										</a>
									</div>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</motion.div>
						})
					}
				</AnimatePresence>
			</motion.div>
		</div>
	)
}

export default Filter;