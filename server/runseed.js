const {createTable, seedDataBase} = require('./seed');
const runSeed = async () => {

    try {
      // await dropTables();
      await createTable();
      await seedDataBase();
    } catch (err) {
      console.error("Error running seed script:", err);
    } finally {
    //   await pool.end();
      console.log("Pool ended, seeding complete.");
    }
  };

  module.exports = runSeed