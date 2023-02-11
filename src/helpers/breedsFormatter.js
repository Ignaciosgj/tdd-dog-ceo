export const breedsFormatter = (data) => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) return [];
    
    return Object.keys(data).map((breed) => ({
        breed,
        subBreeds: data[breed]
    }))

}