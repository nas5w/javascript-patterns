class RecipeBook {
  static findFromDish(dishName) {
    let recipe;

    switch (dishName) {
      case 'pizza':
        recipe = { name: 'pizza', procedure: ['a long procedure for the Chef'] };
        break;
      case 'carbonara':
        recipe = { name: 'carbonara', procedure: ['a long procedure for the Chef'] };
        break;
    }

    return recipe;
  }
}

class Assistant {
  static getIngredients(recipe) {
    let ingredients;

    switch (recipe.name) {
      case 'pizza':
        ingredients = ['mozzarella', 'tomato purees', 'dough', 'salt'];
        break;
      case 'carbonara':
        ingredients = ['cheek lard', 'spaghetti', 'egg yolks', 'salt', 'pepper', 'pecorino'];
        break;
    }

    return ingredients;
  }
}

class Chef {
  static prepareDish(recipe, ingredients) {
    // long procedure to produce the final dish
    return new Promise(resolve => {
      setTimeout(() => resolve({ recipe, ingredients }), 1000);
    });
  }
}

// Kitchen facade
class Kitchen {
  static async makeFood(dishName) {
    const recipe = RecipeBook.findFromDish(dishName);
    if (!recipe) throw new Error('Cannot find any recipe associated to this dish');
    const ingredients = Assistant.getIngredients(recipe);
    const dish = await Chef.prepareDish(recipe, ingredients);
    return dish;
  }
}

module.exports = Kitchen;