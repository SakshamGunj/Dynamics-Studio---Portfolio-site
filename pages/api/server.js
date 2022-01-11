import fs from 'fs'

export default async (req, res) => {
    const url = {
        link:[]
    }
    res.json({hello: 'hello'})
    const resa = await fetch("https://api.pexels.com/v1/search?query=wedding", {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': '563492ad6f91700001000001f6d4aaa376014c918c26a01e44fefb20',
            'Content-Type': 'application/json'
        }
    })
    const data = await resa.json()
    data.photos.map((p) => {
        url.link.push(p.src.medium)
        fs.writeFile('./src/store/wedding_page1.json', JSON.stringify(url), (err) => {
            if(err)console.log(err)
            console.log('file written')
        })
    })
}