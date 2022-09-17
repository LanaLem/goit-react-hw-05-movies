export const cleanedArray = (movies) =>
    movies.map(({ title, poster_path: poster, vote_average: vote, id }) => ({
        title,
        poster,
        vote,
        id,
    })
    );

