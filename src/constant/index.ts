export const baseUrl = "https://jsonplaceholder.typicode.com"
export const blogsPostsDataEndpoint = `${baseUrl}/posts`
export const blogsCommentsEndpoint = `${baseUrl}/comments`
export const getBlogDetailsEndpoint = (id:number) => `${blogsPostsDataEndpoint}/${id}`