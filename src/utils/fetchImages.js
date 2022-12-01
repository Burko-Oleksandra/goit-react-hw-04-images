export default async function fetchImages(query, page) {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=30847710-2a74f0266730d3c25fa6c5c5e&image_type=photo&orientation=horizontal&per_page=12`
    );

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
