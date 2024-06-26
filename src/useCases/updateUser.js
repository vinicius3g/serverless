const updateUser = async (dynamoDbClient, userId, { name, age, position_name }) => {
  const params = {
    TableName: process.env.USERS_TABLE,
    Key: { userId },
    UpdateExpression: "set #name = :name, #age = :age, #position_name = :position_name",
    ExpressionAttributeNames: {
      "#name": "name",
      "#age": "age",
      "#position_name": "position_name",
    },
    ExpressionAttributeValues: {
      ":name": name,
      ":age": age,
      ":position_name": position_name,
    },
    ReturnValues: "ALL_NEW",
  };

  const { Attributes } = await dynamoDbClient.update(params).promise();
  return Attributes;
};

export default updateUser;