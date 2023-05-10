/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
    const menu = {
        fetchMenu : () => object,
        consumption : [],
        order : (item) => {
            const foodsAndDrink = Object.values(menu.fetchMenu());
            for(let x = 0; x < foodsAndDrink.length; x += 1){
                if (foodsAndDrink[x]=== item){
                    menu.consumption.push(item);
                }
            }
            return 'Item indisponível';
        },
        pay : () => {
            let count = 0;
            for(i of consumption){
                count += consumption[i]
            };  
        return (count * 1.1);
        }
    }
    return menu;   
};

module.exports = createMenu;
