export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );

  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message}`)(data.status);

  const { recipe } = data.data;

  state.recipe = {
    id: recipe.id,
    cookingTime: recipe.cooking_time,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    source: recipe.source_url,
    title: recipe.title,
  };

  console.log(state.recipe);
};
