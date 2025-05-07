import "dotenv/config";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

/**
 * Inserts a recipe into the recipes table. Does not insert associated tags or ingredients.
 * @param {String} name - The name of the recipe.
 * @param {String} author - The username of the user uploading the recipe. Must be a valid username.
 * @param {String} description
 * @param {String} instructions
 * @returns {Number} Returns the id of the inserted recipe.
 */
async function addRecipe(name, author, description, instructions) {
  try {
    const result = await sql.query(
      `INSERT INTO recipes (name, author, description, instructions) VALUES ($1, $2, $3, $4) RETURNING id`,
      [name, author, description, instructions]
    );
    return result[0]["id"];
  } catch (err) {
    throw new Error("Uploader username does not exist!");
  }
}

/**
 * Inserts tags associated with a particular recipe.
 * @param {Number} id - The id of the associated recipe.
 * @param {Array<String>} tags - An array of tag names. All tag names must be valid.
 */
async function addTags(id, tags) {
  try {
    tags.forEach(async (tag) => {
      const result = await sql.query(`SELECT id FROM tags WHERE name = $1`, [
        tag,
      ]);
      const tag_id = result[0]["id"];
      await sql.query(`INSERT INTO recipe_tags VALUES ($1, $2)`, [id, tag_id]);
    });
  } catch (err) {
    throw new Error("Invalid tag name!");
  }
}

/**
 * Inserts ingredients associated with a particular recipe.
 * @param {Number} id - The id of the associated recipe.
 * @param {Array<String>} ingredients - An array of ingredient names.
 */
async function addIngredients(id, ingredients) {
  ingredients.forEach(async (ingredient) => {
    const result = await sql.query(
      `SELECT id FROM ingredients WHERE name = $1`,
      [ingredient]
    );
    let ingredient_id;
    if (result.length > 0) {
      ingredient_id = result[0]["id"];
    } else {
      ingredient_id = await sql.query(
        `INSERT INTO ingredients (name) VALUES ($1) RETURNING id`,
        [ingredient]
      );
      ingredient_id = ingredient_id[0]["id"];
    }
    await sql.query(`INSERT INTO recipe_ingredients VALUES ($1, $2)`, [
      id,
      ingredient_id,
    ]);
  });
}

export { addRecipe, addTags, addIngredients };
