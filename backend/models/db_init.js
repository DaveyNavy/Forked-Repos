import "dotenv/config";
import { neon } from "@neondatabase/serverless";
const sql = neon(process.env.DATABASE_URL);

await sql.query(`CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) 
)`);

await sql.query(`CREATE TABLE IF NOT EXISTS recipes (
    id INTEGER UNIQUE GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255), 
    author VARCHAR(255) REFERENCES users(username),
    description TEXT,
    instructions TEXT
)`);

await sql.query(`CREATE TABLE IF NOT EXISTS ingredients (
    id INTEGER UNIQUE GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255)
)`);

await sql.query(`CREATE TABLE IF NOT EXISTS recipe_ingredients (
    recipe_id INTEGER REFERENCES recipes(id),
    ingredient_id INTEGER REFERENCES ingredients(id)
)`);

await sql.query(`CREATE TABLE IF NOT EXISTS tags (
    id INTEGER UNIQUE GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255)
)`);

await sql.query(`CREATE TABLE IF NOT EXISTS recipe_tags (
    recipe_id INTEGER REFERENCES recipes(id),
    tag_id INTEGER REFERENCES tags(id)
)`);

await sql.query(`CREATE TABLE IF NOT EXISTS recipe_ratings (
    recipe_id INTEGER REFERENCES recipes(id),
    author VARCHAR(255) REFERENCES users(username),
    rating INTEGER 
)`);

await sql.query(`CREATE TABLE IF NOT EXISTS recipe_comments (
    recipe_id INTEGER REFERENCES recipes(id),
    author VARCHAR(255) REFERENCES users(username),
    comment TEXT
)`);
