import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSumary from "./MealsSummary";

const Meals = () => {
  return <Fragment>
    <MealsSumary />
    <AvailableMeals />
  </Fragment>
};

export default Meals;