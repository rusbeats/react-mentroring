const SIZES = {
    big: {
        padding: '15px 80px'
    },

    medium: {
        padding: '5px 40px'
    },

    small: {
        padding: '5px 20px'
    }
};

const constants = {
    fonts: {
        calibri: 'calibri'
    },

    colors: {
        lightPink: '#d15c6e',
        grey: '#a0a0a0',
        lightGrey: '#c1c1c1',
        lighterGrey: '#e2e2e2',
        white: '#ffffff',
        lightBlack: '#414141',
        black: '#010101'
    },

    getPaddingBySize: size => SIZES[size].padding
};

export default constants;
