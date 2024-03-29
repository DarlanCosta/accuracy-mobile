import { extendTheme } from 'native-base'

export const THEME = extendTheme({
	colors: {
		blue: {
			700: '#364D9D',
			500: '#647AC7'
		},
		gray: {
			700: '#0F1621',
			600: '#3E3A40',
			500: '#5F5B62',
			400: '#9F9BA1',
			300: '#D9D8DA',
			200: '#EDECEE',
			100: '#F7F7F8'
		},
		bgColor: '#1A1A1A',

		red: {
			400: '#EE7979'
		},

		buttonCollect: '#f5e500bc',
	
		buttonColor: '#f5e500d8'

	},
	fonts: {
		heading: 'Karla_700Bold',
		body: 'Karla_400Regular'
	},
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
		xl: 24,
		'2xl': 32
	},
	sizes: {
		14: 56,
		33: 148
	}
})