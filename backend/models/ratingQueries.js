import "dotenv/config";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

/**
 * Gets the ratings for a particular recipe.
 * @param {Number} recipeId - The id of the recipe.
 * @returns {Array<Object>} - An array of objects, containing the rating and author
 */
async function getRatings(recipeId) {
  const result = await sql.query(
    "SELECT * FROM recipe_ratings WHERE recipe_id = $1",
    [recipeId]
  );
  return result;
}

/**
 * Inserts a comment into the comments table for a particular recipe.
 * @param {Number} recipeId - The id of the recipe.
 * @param {Number} rating - The rating.
 * @param {String} author - The username of the user posting.
 */
async function addRating(recipeId, rating, author) {
  try {
    const result = await sql.query(
      `INSERT INTO recipe_ratings (recipe_id, author, rating) VALUES ($1, $2, $3)`,
      [recipeId, author, rating]
    );
  } catch (err) {
    throw new Error("Author/recipe does not exist!");
  }
}

export { getRatings, addRating };
