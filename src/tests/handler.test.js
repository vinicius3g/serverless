import request from "supertest";
// import AWS from "aws-sdk-mock";
import { handler } from "../../handler";

jest.useRealTimers();

describe("User API Endpoints", () => {
  // beforeAll(() => {
  //   AWS.mock("DynamoDB.DocumentClient", "get", (params, callback) => {
  //     const userId = params.Key.userId;
  //     if (userId === "existingUserId") {
  //       callback(null, {
  //         Item: {
  //           userId: "existingUserId",
  //           name: "Existing User",
  //           age: 30,
  //           position_name: "Developer",
  //         },
  //       });
  //     } else {
  //       callback(null, { Item: null });
  //     }
  //   });

  //   AWS.mock("DynamoDB.DocumentClient", "put", (params, callback) => {
  //     const userId = params.Item.userId;
  //     callback(null, {
  //       userId,
  //       ...params.Item,
  //     });
  //   });

  //   AWS.mock("DynamoDB.DocumentClient", "update", (params, callback) => {
  //     callback(null, {
  //       Attributes: {
  //         userId: params.Key.userId,
  //         ...params.UpdateExpression.set,
  //       },
  //     });
  //   });

  //   AWS.mock("DynamoDB.DocumentClient", "delete", (params, callback) => {
  //     callback(null, {});
  //   });
  // });

  // afterAll(() => {
  //   AWS.restore("DynamoDB.DocumentClient");
  // });

  // it("should get an existing user", async () => {
  //   const response = await request(handler)
  //     .get("/users/existingUserId")
  //     .expect(200);

  //   expect(response.body).toEqual({
  //     userId: "existingUserId",
  //     name: "Existing User",
  //     age: 30,
  //     position_name: "Developer",
  //   });
  // });

  // it("should return 404 for non-existing user", async () => {
  //   const response = await request(handler)
  //     .get("/users/nonExistingUserId")
  //     .expect(404);

  //   expect(response.body).toEqual({
  //     error: 'Could not find user with provided "userId"',
  //   });
  // });

  it("should create a new user", async () => {
    const data = {
      name: "John Doe",
      age: 25,
      position_name: "Tester",
    };

    const response = await request(handler)
      .post("/users")
      .send(data)
      .expect(200);

    expect(response.body).toEqual({
      userId: expect.any(String),
      name: "John Doe",
      age: 25,
      position_name: "Tester",
    });
  }, 10000);

  // it("should update an existing user", async () => {
  //   const data = {
  //     name: "Updated User",
  //     age: 35,
  //     position_name: "Senior Developer",
  //   };

  //   const response = await request(handler)
  //     .put("/users/existingUserId")
  //     .send(data)
  //     .expect(200);

  //   expect(response.body).toEqual({
  //     userId: "existingUserId",
  //     name: "Updated User",
  //     age: 35,
  //     position_name: "Senior Developer",
  //   });
  // });

  // it("should delete an existing user", async () => {
  //   await request(handler)
  //     .delete("/users/existingUserId")
  //     .expect(204);
  // });

  // it("should return 404 for delete on non-existing user", async () => {
  //   const response = await request(handler)
  //     .delete("/users/nonExistingUserId")
  //     .expect(404);

  //   expect(response.body).toEqual({
  //     error: 'Could not find user with provided "userId"',
  //   });
  // });
});
