export default async function handler(request, response) {
  if (request.method === 'GET') {
    const currentTime = new Date().toLocaleString();

    return response.status(200).json({ currentTime });
  } else return response.status(400).json('실패');
}
