import createUser from "../../useCases/createUser";
import getUser from "../../useCases/getUser";
import updateUser from "../../useCases/updateUser";
import deleteUser from "../../useCases/deleteUser";
import dynamoDbClient from "../../frameworks/dynamoDbClient";

const userController = {
  createUser: async (req, res) => {
    try {
      const user = await createUser(dynamoDbClient, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Could not create user" });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await getUser(dynamoDbClient, req.params.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: "User not found" });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await updateUser(dynamoDbClient, req.params.userId, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Could not update user" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await deleteUser(dynamoDbClient, req.params.userId);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Could not delete user" });
    }
  },
};

export default userController;