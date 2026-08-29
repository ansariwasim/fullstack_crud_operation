
// Create server

import express from 'express'
const app = express()
import postModel from './models/post.model.js'
import { imageKitUpload } from './services/storage.service.js'
import multer from 'multer'

// MIDDLEWARE 
app.use(express.json())
const upload = multer({storage: multer.memoryStorage()})




// Create post 
app.post('/create_post', upload.single("image"),async (req, res)=>{

let result =  await imageKitUpload(req.file.buffer)



  const post =  await postModel.create({
        image: result.url,
        caption: req.body.caption

    })

    res.status(201).json({
        message: "new Post Createed",
        post
    })


})


app.get('/posts', async(req,res)=>{

  const allPost =  await postModel.find()
  console.log(allPost)

  res.status(200).json({
    message: "Patching all post",
    allPost
  })

})




export default app;