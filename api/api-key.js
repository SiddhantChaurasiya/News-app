export default function handler(req, res) {
    res.send(process.env.NEWS_API_KEY);
}