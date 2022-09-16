import { app } from "./app";
import { UserEndpoint } from "./endpoints/User";

const user = new UserEndpoint();

app.post("/user", user.createUser);
app.post("/login", user.login);
app.get("/user/profile", user.getProfile);
app.get("/user/:id", user.pegarOutroPerfil);
