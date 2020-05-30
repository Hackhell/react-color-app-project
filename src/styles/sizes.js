export default {
    up() {

    },

    down(size) {
        const sizes = {
            sm: '576px',
            md: '992px',
            lg: '1200px' 
        }

        return `@media (max-width: ${sizes[size]})`
    }
}