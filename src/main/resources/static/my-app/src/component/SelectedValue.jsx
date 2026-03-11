export const selectData = (selectedValue) => {
    if (selectedValue === '') {
        return 'getMovieByTitle/300'
    }
    if(selectedValue === '1' ) {
        return 'getMovieByTitle/'
    }
    if(selectedValue === '2') {
        return 'getMovieByCast/'
    }
    if(selectedValue === '3') {
        return 'getMovieByDirector/'
    }
    if(selectedValue === '4') {
        return 'getMovieByGenre/'
    }
    if(selectedValue === '5') {
        return 'getMovieByYear/'
    }
    if(selectedValue === '6') {
        return 'getMovieByRatingAndGenre?'
    }
    if(selectedValue === '7') {
        return 'getMovieByYearAndGenre?'
    }
};