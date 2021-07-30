import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

// export const ExampleComponent = ({ text }) => {
//   return <div className={'test'}>miamam Component: {text}</div>
// }


export function PillSwitcher({ name, options, onChange, activeColor, ...props }) {
	// const name = props.name;
	// const options = props.options;
	const defaultRef = useRef();
	const [defaultValue, setDefaultValue] = useState(typeof options[0] === 'object' ? options[0].label : options[0])
	const [value, setValue] = useState(typeof options[0] === 'object' ? options[0].label : options[0])
	const [sizes, setSizes] = useState()

	useEffect(() => {
		if (defaultRef.current) {
			setSizes({
				width: defaultRef.current.clientWidth,
				height: defaultRef.current.clientHeight,
				left: defaultRef.current.offsetLeft,
				top: defaultRef.current.offsetTop,
				transition: 'none',
			})

			setTimeout(function () {
				if (defaultRef.current) {
					setSizes({
						width: defaultRef.current.clientWidth,
						height: defaultRef.current.clientHeight,
						left: defaultRef.current.offsetLeft,
						top: defaultRef.current.offsetTop,
						transition: 'none',
					})
				}
			}, 500);
		}
	}, [defaultRef.current, props.toggle]);

	function onChangeHandle(e) {
		const val = e.target.value
		setValue(val)
		onChange && onChange(val)

	}

	function onClick(e) {
		let active = e.target;
		setSizes({
			width: active.clientWidth,
			height: active.clientHeight,
			left: active.offsetLeft,
			top: active.offsetTop,
		})
	}

	return <div className={classNames('pillSwitcher', { '--full': props.full })}>
		{options.map((opt, i) => {
			const id = name + '-' + i + Date.now();
			const isObject = typeof opt === 'object' ? true : false
			const actualOption = isObject ? opt.label : opt
			// console.log(actualOption + ' - ' + value)
			return (
				<div
					key={i}
					ref={opt === defaultValue || (isObject && opt.label === defaultValue) ? defaultRef : null}
					className={classNames('switcher__tab', { 'active': value === actualOption }, 'switcher__tab', { 'active': value === actualOption })}
				>
					<label htmlFor={id} className={classNames('switcher__label', 'switcher__label')} onClick={onClick}>
						{isObject ?
							<div className={classNames('switcher__labelInner', 'switcher__labelInner')}>
								{opt.icon && <span className={classNames('switcher__icon', 'switcher__icon')}>{opt.icon}</span>}
								<span className={classNames('switcher__labelText', 'switcher__labelText')}>{opt.label}</span>
							</div>
							:
							opt
						}
					</label>
					<input
						type='radio'
						name={name}
						id={id}
						value={actualOption}
						className={classNames('switcher__input', 'switcher__input')}
						onChange={(e) => onChangeHandle(e)}
					/>
				</div>
			)
		})}

		<span className={classNames('switcher__bg', 'switcher__bg')} style={{ ...sizes, backgroundColor: activeColor || null }}></span>
	</div>
}
