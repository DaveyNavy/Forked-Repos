import "dotenv/config";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

/**
 * Gets all comments for a particular recipe.
 * @param {Number} recipeId - The id of the recipe.
 * @returns {Array<Object>} - An array of objects, containing the comment and author
 */
async function getComments(recipeId) {
  const result = await sql.query(
    "SELECT * FROM recipe_comments WHERE recipe_id = $1",
    [recipeId]
  );
  return result;
}

async function addComment(recipeId, comment, author) {
  try {
    const result = await sql.query(
      `INSERT INTO recipe_comments (recipe_id, author, comment) VALUES ($1, $2, $3)`,
      [recipeId, author, comment]
    );
  } catch (err) {
    throw new Error("Author username does not exist!");
  }
}

export { getComments, addComment };
