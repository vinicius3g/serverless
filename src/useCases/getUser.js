import User from "../entities/User";

const getUser = async (dynamoDbClient, userId) => {
  const params = {
    TableName: process.env.USERS_TABLE,
    Key: { userId },
  };

  const { Item } = await dynamoDbClient.get(params).promise();
  if (Item) {
    return new User(Item);
  } else {
    throw new Error("User not found");
  }
};

export default getUser;