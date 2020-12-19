const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src**/*.tsx'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				// rose: colors.rose,
				// fuchsia: colors.fuchsia,
				violet: colors.violet,
				black: colors.black,
				white: colors.white,
				gray: colors.gray,
				red: colors.red,
				yellow: colors.yellow,
				green: colors.green,
				// emerald: colors.emerald,
				blue: colors.blue,
				indigo: colors.indigo,
				purple: colors.purple,
				// pink: colors.pink,
				// lime: colors.lime,
				// warmgray: colors.warmGray,
				// truegray: colors.trueGray,
				// bluegray: colors.blueGray,
				// coolgray: colors.coolGray,
				// orange: colors.orange,
				// lightblue: colors.lightBlue,
				// teal: colors.teal,
				// amber: colors.amber,
				cyan: colors.cyan,
				almostBlack: '#060707',
			},
			flex: {
				1: '1 1 0%',
				2: '2 2 0%',
				3: '3 3 0%',
				4: '4 4 0%',
				5: '5 5 0%',
			},
			height: (theme) => ({
				'10vh': '10vh',
				'20vh': '20vh',
				'30vh': '30vh',
				'40vh': '40vh',
				'50vh': '50vh',
				'60vh': '60vh',
				'70vh': '70vh',
				'80vh': '80vh',
				'90vh': '90vh',
			}),
			minWidth: (theme) => ({
				'10vw': '10vw',
				'20vw': '20vw',
				'30vw': '30vw',
				'40vw': '40vw',
				'50vw': '50vw',
				'60vw': '60vw',
				'70vw': '70vw',
				'80vw': '80vw',
				'90vw': '90vw',
			}),
			opacity: {
				0: '0',
				5: '0.05',
				10: '0.1',
				20: '0.2',
				25: '0.25',
				30: '0.3',
				40: '0.4',
				50: '0.5',
				60: '0.6',
				70: '0.7',
				75: '0.75',
				80: '0.8',
				90: '0.9',
				95: '0.95',
				100: '1',
			},
			fontFamily: {
				inter: ['"Inter"', 'sans-serif'],
				poppins: ['"Poppins"', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {
			ringColor: ['hover'],
			ringOffsetColor: ['hover'],
			ringOffsetWidth: ['hover'],
			ringOpacity: ['hover'],
			ringWidth: ['hover'],
		},
		accessibility: ['responsive', 'focus-within', 'focus'],
		alignContent: ['responsive'],
		alignItems: ['responsive'],
		alignSelf: ['responsive'],
		animation: ['responsive'],
		appearance: ['responsive'],
		backgroundAttachment: ['responsive'],
		backgroundClip: ['responsive'],
		backgroundColor: ['responsive', 'dark', 'hover', 'focus'],
		backgroundImage: ['responsive'],
		backgroundOpacity: ['responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		borderCollapse: ['responsive'],
		borderColor: ['responsive', 'dark', 'hover', 'focus'],
		borderOpacity: ['responsive', 'hover', 'focus'],
		borderRadius: ['responsive'],
		borderStyle: ['responsive'],
		borderWidth: ['responsive'],
		boxShadow: ['responsive', 'hover', 'focus'],
		boxSizing: ['responsive'],
		clear: ['responsive'],
		container: ['responsive'],
		cursor: [],
		display: ['responsive'],
		divideColor: ['responsive', 'dark'],
		divideOpacity: ['responsive'],
		divideStyle: ['responsive'],
		divideWidth: ['responsive'],
		fill: ['responsive'],
		flex: ['responsive'],
		flexDirection: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: [],
		flexWrap: [],
		float: [],
		fontFamily: ['responsive'],
		fontSize: ['responsive'],
		fontSmoothing: [],
		fontStyle: ['responsive'],
		fontVariantNumeric: [],
		fontWeight: ['responsive'],
		gap: ['responsive'],
		gradientColorStops: [],
		gridAutoColumns: ['responsive'],
		gridAutoFlow: ['responsive'],
		gridAutoRows: ['responsive'],
		gridColumn: ['responsive'],
		gridColumnEnd: ['responsive'],
		gridColumnStart: ['responsive'],
		gridRow: ['responsive'],
		gridRowEnd: ['responsive'],
		gridRowStart: ['responsive'],
		gridTemplateColumns: ['responsive'],
		gridTemplateRows: ['responsive'],
		height: ['responsive'],
		inset: [],
		justifyContent: ['responsive'],
		justifyItems: ['responsive'],
		justifySelf: ['responsive'],
		letterSpacing: ['responsive'],
		lineHeight: ['responsive'],
		listStylePosition: [],
		listStyleType: ['responsive'],
		margin: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		objectFit: ['responsive'],
		objectPosition: ['responsive'],
		opacity: ['focus-within', 'hover', 'focus'],
		order: ['responsive'],
		outline: ['responsive', 'focus-within', 'focus'],
		overflow: ['responsive'],
		overscrollBehavior: ['responsive'],
		padding: ['responsive'],
		placeContent: [],
		placeItems: [],
		placeSelf: [],
		placeholderColor: [],
		placeholderOpacity: [],
		pointerEvents: [],
		position: [],
		resize: [],
		ringColor: ['responsive', 'dark', 'focus', 'hover'],
		ringOffsetColor: ['responsive', 'dark', 'focus', 'hover'],
		ringOffsetWidth: ['responsive', 'focus', 'hover'],
		ringOpacity: ['responsive', 'focus', 'hover'],
		ringWidth: ['responsive', 'focus', 'hover'],
		rotate: ['responsive', 'hover', 'focus'],
		scale: ['responsive', 'hover', 'focus'],
		skew: [],
		space: [],
		stroke: [],
		strokeWidth: [],
		tableLayout: [],
		textAlign: ['responsive'],
		textColor: ['responsive', 'dark', 'hover', 'focus'],
		textDecoration: ['responsive', 'hover', 'focus'],
		textOpacity: ['responsive', 'hover', 'focus'],
		textOverflow: [],
		textTransform: ['responsive'],
		transform: ['responsive'],
		transformOrigin: ['responsive'],
		transitionDelay: ['responsive'],
		transitionDuration: ['responsive'],
		transitionProperty: ['responsive'],
		transitionTimingFunction: ['responsive'],
		translate: [],
		userSelect: [],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: [],
		width: ['responsive'],
		wordBreak: [],
		zIndex: [],
	},
	plugins: [require('@tailwindcss/custom-forms')],
};
