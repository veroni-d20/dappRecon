import { Logger } from "@maticnetwork/chain-indexer-framework/logger";
import { BlockProducerError } from "@maticnetwork/chain-indexer-framework/errors/block_producer_error";
import startTransforming from "./matic_transfer_data_transformer.js";
import { MaticTransferMapper } from "./mappers/matic_transfer_mapper.js";
import dotenv from "dotenv";
import path from "path";
const { MongoClient } = require("mongodb");
const schedule = require("node-schedule");

dotenv.config();

Logger.create({
  sentry: {
    dsn: process.env.SENTRY_DSN,
    level: "error",
  },
  datadog: {
    api_key: process.env.DATADOG_API_KEY,
    service_name: process.env.DATADOG_APP_KEY,
  },
});

/**
 * Initialise the transform service with producer topic, proto file names,
 *  producer config, consumer topic and consumer proto files
 */
try {
  class MongoDBFetcher {
    constructor(dbName, collectionName) {
      this.url = "mongodb://localhost:27017";
      this.dbName = dbName;
      this.collectionName = collectionName;
    }

    async connect() {
      this.client = new MongoClient(this.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      this.collection = this.db.collection(this.collectionName);
    }

    async fetch() {
      // Fetch data from MongoDB
      const data = await this.collection.findOne();
      return data;
    }

    async close() {
      await this.client.close();
    }
  }

  class DataProcessor {
    constructor(data) {
      this.data = data;
    }

    process() {
      // Your data processing logic here
      // For demonstration, let's just log the data
      console.log("Processing data:", this.data);
    }
  }

  async function job() {
    // Create an instance of MongoDBFetcher
    const mongoFetcher = new MongoDBFetcher(
      "your_db_name",
      "your_collection_name"
    );

    try {
      // Connect to MongoDB
      await mongoFetcher.connect();

      // Fetch data from MongoDB
      const data = await mongoFetcher.fetch();

      // Create an instance of DataProcessor
      const dataProcessor = startTransforming(
        {
          "bootstrap.servers":
            process.env.KAFKA_CONNECTION_URL || "localhost:9092",
          "group.id": "matic.transfer.transformer",
          "security.protocol": "plaintext",
          "message.max.bytes": 26214400,
          "fetch.message.max.bytes": 26214400,
          coders: {
            fileName: "block",
            packageName: "blockpackage",
            messageType: "Block",
          },
          topic: process.env.CONSUMER_TOPIC || "polygon.1.blocks",
        },
        {
          topic: process.env.PRODUCER_TOPIC || "apps.1.matic.transfer",
          "bootstrap.servers":
            process.env.KAFKA_CONNECTION_URL || "localhost:9092",
          "security.protocol": "plaintext",
          "message.max.bytes": 26214400,
          coder: {
            fileName: "matic_transfer",
            packageName: "matictransferpackage",
            messageType: "MaticTransferBlock",
            fileDirectory: path.resolve("dist", "./schemas/"),
          },
        },
        new MaticTransferMapper()
      );

      // Process the data
      dataProcessor.process();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Close the MongoDB connection
      await mongoFetcher.close();
    }
  }

  // Schedule the job to run every 5 minutes
  const jobSchedule = schedule.scheduleJob("/5 * * *", job);

  // Log a message when the job is scheduled
  console.log("Job scheduled to run every 5 minutes. Waiting for execution...");
} catch (e) {
  Logger.error(BlockProducerError.createUnknown(e));
}
