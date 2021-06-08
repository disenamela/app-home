import classNames from "classnames";
import { useState } from "react";

export default function NavTabs(props) {
	const name = props.name;
	const options = props.options;
	const [value, setValue] = useState(props.default || options[0])

	function onChange(e) {
		let val = e.target.value;
		setValue(val);
		props.onChange && props.onChange(val)
	}

	return (
		<div className="nav-tabs">
			{
				options.map((opt, i) => {
					const id = name + '-' + i;
					return (
						<div className={classNames("tabs__tab", {'--active': value === opt})}>
							<label htmlFor={id} className="tabs__label">{opt}</label>
							<input type="radio" name={name} id={id} value={opt} className="tabs__input" onChange={(e) => onChange(e)} />
						</div>
					)
				})
			}
		</div>
	)
}