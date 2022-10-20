import { BaseDatabase } from "../BaseDatabase";
import { ProductDatabase } from "../ProductDatabase";
import { products, productsWithTags, tags } from "./data";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");

      console.log("Populating tables with seed...");
      await this.insertData();
      console.log("Tables populated successfully.");

      console.log("Migrations completed.");
    } catch (error) {
      console.log("FAILED! Error in migrations...");
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      console.log("Ending connection...");
      BaseDatabase.connection.destroy();
      console.log("Connection closed graciously.");
    }
  };

  createTables = async () => {
    await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_TAGS};
        DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCTS_TAGS};
CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS} (
            id VARCHAR(255) UNIQUE,
            name VARCHAR(255) PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_TAGS} (
            tag VARCHAR(255) PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS_TAGS} (
            name_product VARCHAR (255) NOT NULL,
            name_tags VARCHAR (255) NOT NULL,
            FOREIGN KEY (name_product) REFERENCES ${ProductDatabase.TABLE_PRODUCTS}
            FOREIGN KEY (name_tags)  REFERENCES ${ProductDatabase.TABLE_TAGS}
        );
        `);
  };

  insertData = async () => {
    await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert(
      products
    );

    await BaseDatabase.connection(ProductDatabase.TABLE_TAGS).insert(tags);

    await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS_TAGS).insert(
      productsWithTags
    );
  };
}

const migrations = new Migrations();
migrations.execute();
