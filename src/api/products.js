const API_URL = 'http://localhost:5000/api/products';

export const fetchProducts = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const fetchProductById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};
