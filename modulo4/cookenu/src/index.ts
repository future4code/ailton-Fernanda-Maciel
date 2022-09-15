import { app } from "./app";
import { UserEndpoint } from "./endpoints/User";

const user = new UserEndpoint();

app.post("/user", user.createUser);
app.post("/user/login", user.login);
