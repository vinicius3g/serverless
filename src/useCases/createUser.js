import { v4 as uuidv4 } from "uuid";
import User from "../entities/User";

const createUser = async (dynamoDbClient, { name, age, position_name }) => {
  const userId = uuidv4();
  const user = new User({ userId, name, age, position_name });

  const params = {
    TableName: process.env.USERS_TABLE,
    Item: user,
  };

  await dynamoDbClient.put(params).promise();
  return user;
};

export default createUser;