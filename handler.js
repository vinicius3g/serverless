import AWS from "aws-sdk";
import express from "express";
import serverless from "serverless-http";
import { v4 as uuidv4 } from "uuid";

const app = express();
const USERS_TABLE = process.env.USERS_TABLE;
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

app.use(express.json());

app.get("/users/:userId", async (req, res) => {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  };

  try {
    const { Item } = await dynamoDbClient.get(params).promise();

    if (Item) {
      const { userId, name, age, position_name } = Item;

      return res.json({
        userId,
        name,
        age,
        position_name
      });
    } else {
      return res
        .status(404)
        .json({ error: 'Could not find user with provided "userId"' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not retreive user" });
  }
});

app.post("/users", async (req, res) => {
  const { name, age, position_name } = req.body;
  const userId = uuidv4();

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId,
      name,
      age,
      position_name
    },
  };

  try {
    await dynamoDbClient.put(params).promise();
    return res.json({
      userId,
      name,
      age,
      position_name
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Could not create user" });
  }
});

app.put("/users/:userId", async (req, res) => {
  const { name, age, position_name } = req.body;

  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
    UpdateExpression: "set #name = :name, #age = :age, #position_name = :position_name",
    ExpressionAttributeNames: {
      "#name": "name",
      "#age": "age",
      "#position_name": "position_name"
    },
    ExpressionAttributeValues: {
      ":name": name,
      ":age": age,
      ":position_name": position_name
    },
    ReturnValues: "ALL_NEW",
  };

  try {
    const { Attributes } = await dynamoDbClient.update(params).promise();
    return res.json(Attributes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Could not update user" });
  }
});

app.delete("/users/:userId", async (req, res) => {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId,
    },
  };

  try {
    await dynamoDbClient.delete(params).promise();
    return res.status(204).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Could not delete user" });
  }
});

app.use((_, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);