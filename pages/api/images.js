import { wedding_url } from "../../src/store/bridal_page1"

export default (req, res) => {
    res.json(wedding_url.link)
}