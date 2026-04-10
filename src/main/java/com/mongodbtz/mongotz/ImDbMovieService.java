package com.mongodbtz.mongotz;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import java.util.Arrays;
import java.util.List;

@Service
public class ImDbMovieService {
    private final IMDbMovieRepository imDbMovieRepository;

    private static final Logger logger = LogManager.getLogger(ImDbMovieService.class);

    public ImDbMovieService(IMDbMovieRepository imDbMovieRepository) {
        this.imDbMovieRepository = imDbMovieRepository;
    }

    private final String logInfo = "The filter values are ";

    @Cacheable(value = "cache_min_1", key = "{#year, #genre}")
    public List<IMDbMovie> findMovieByYearAndGenre(String year,String genre) {
        List<IMDbMovie> imDbMovies = imDbMovieRepository.findMovieByYearAndGenre(year,genre);
        Object [] str = {"findMovieByYearAndGenre",year, genre};
        logger.info("{}{}", logInfo, Arrays.toString(str));
        logger.info(imDbMovies);
        return imDbMovies;
    }

    @Cacheable(value = "cache_min_1", key = "#name")
    public List<IMDbMovie> findMovieByTitle(String name) {
        List<IMDbMovie> imDbMovies = imDbMovieRepository.findMovieByTitle(name);
        Object [] str = {"findMovieByTitle",name};
        logger.info("{}{}", logInfo, Arrays.toString(str));
        logger.info(imDbMovies);
        return imDbMovies;
    }

    @Cacheable(value = "cache_min_1", key = "#year")
    public List<IMDbMovie> findMovieByYear(String year) {
        List<IMDbMovie> imDbMovies = imDbMovieRepository.findMovieByYear(year);
        Object [] str = {"findMovieByYear",year};
        logger.info("{}{}", logInfo, Arrays.toString(str));
        logger.info(imDbMovies);
        return imDbMovies;
    }

    @Cacheable(value = "cache_min_1", key = "#genre")
    public List<IMDbMovie> findMovieByGenre(String genre) {
        List<IMDbMovie> imDbMovies = imDbMovieRepository.findMovieByGenre(genre);
        logger.info(imDbMovies);
        return imDbMovies;
    }

    @Cacheable(value = "cache_min_1", key = "#director")
    public List<IMDbMovie> findMovieByDirector(String director) {
        List<IMDbMovie> imDbMovies = imDbMovieRepository.findMovieByDirectorLike(director);
        Object [] str = {"findMovieByDirector",director};
        logger.info("{}{}", logInfo, Arrays.toString(str));
        logger.info(imDbMovies);
        return imDbMovies;
    }

    @Cacheable(value = "cache_min_1", key = "#cast")
    public List<IMDbMovie> findMovieByCast(String cast) {
        List<IMDbMovie> imDbMovies = imDbMovieRepository.findMovieByCastName(cast);
        Object [] str = {"findMovieByCast",cast};
        logger.info("{}{}", logInfo, Arrays.toString(str));
        logger.info(imDbMovies);
        return imDbMovies;
    }

    @Cacheable(value = "cache_min_1", key = "#ratingValue")
    public List<IMDbMovie> findMovieByRatingList(String ratingValue) {
        List<IMDbMovie> imDbMovies = imDbMovieRepository.findMovieByRating(ratingValue);
        logger.info(imDbMovies);
        return imDbMovies;
    }

    @Cacheable(value = "cache_min_1", key = "{#ratingValue, #genre}")
    public List<IMDbMovie> findMovieByRatingListAndGenre(String ratingValue, String genre) {
        List<IMDbMovie> imDbMovies = imDbMovieRepository.findMovieByRatingAndGenre(ratingValue, genre);
        Object [] str = {"findMovieByRatingListAndGenre",ratingValue,genre};
        logger.info("{}{}", logInfo, Arrays.toString(str));
        logger.info(imDbMovies);
        return imDbMovies;
    }

    @Cacheable(value = "cache_min_1", key = "{#year, #ratingValue}")
    public List<IMDbMovie> findMovieByYearAndRatingList(String year, String ratingValue) {
        List<IMDbMovie> imDbMovies = imDbMovieRepository.findMovieByYearAndRating(year, ratingValue);
        Object [] str = {"findMovieByYearAndRatingList",year,ratingValue};
        logger.info("{}{}", logInfo, Arrays.toString(str));
        logger.info(imDbMovies);
        return imDbMovies;
    }


}
