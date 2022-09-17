import { app } from "./app";
import { UserEndpoint } from "./endpoints/User";
import { RecipeEndpoint } from "../src/endpoints/Recipes";

const user = new UserEndpoint();
const recipe = new RecipeEndpoint();

//criar usuario
app.post("/user", user.createUser);

// fazer login
app.post("/login", user.login);

// criar receita
app.post("/recipe", recipe.create);

// pegar o seu usuario
app.get("/user/profile", user.getProfile);
// pegar outro usuario
app.get("/user/:id", user.pegarOutroPerfil);
