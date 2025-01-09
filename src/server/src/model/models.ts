import { User } from "./users";
import { Product } from "./products";

// Relaciones uno a muchos (un usuario tiene muchos productos, un producto pertence a un solo usuario)
User.hasMany(Product);
Product.belongsTo(User);

export { User, Product };
