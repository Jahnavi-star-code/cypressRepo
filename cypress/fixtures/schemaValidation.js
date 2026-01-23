export default class schemaValidation {
  static createUserReq = {
    type: "array",
    items: {
      type: "object",
      properties: {
        id: { type: "number" },
        username: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        email: { type: "string" },
        password: { type: "string" },
        phone: { type: "number" },
        userStatus: { type: "number" },
      },
      required: [
        "id",
        "username",
        "firstName",
        "lastName",
        "email",
        "password",
        "phone",
        "userStatus",
      ],
    },
  };
  static createUserRes = {
    type: "object",
    properties: {
      code: { type: "number" },
      type: { type: "string" },
      message: { type: "string" },
    },
    required: ["code", "type", "message"],
    additionalProperties: false,
  };
  static getUserRes = {
    type: "object",
    properties: {
      code: { type: "number" },
      type: { type: "string" },
      message: { type: "string" },
    },
  };
}
