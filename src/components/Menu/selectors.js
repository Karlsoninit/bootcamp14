export const getMenu = state => state.counter.menu;
export const getValueCategory = state => state.counter.category;

export const filterMenu = (menu, category) => {
  return menu.filter(elem => elem.ingredients === category);
};
