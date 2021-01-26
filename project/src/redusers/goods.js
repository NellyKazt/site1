const goods = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GOODS':
           return [
               ...state,
               {
                   id: action.id,
                   title: action.title,
                   image: action.image,
                   description: action.description
               }
           ]
           default: return state;
    }
} 

export default goods;