const deleteUser = async (dynamoDbClient, userId) => {
  const params = {
    TableName: process.env.USERS_TABLE,
    Key: { userId },
  };

  await dynamoDbClient.delete(params).promise();
};

export default deleteUser;