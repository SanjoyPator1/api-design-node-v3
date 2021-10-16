import { Router } from 'express'

// creating controller
const controller = (req, res) => {
  res.send({ message: 'hello' })
}

const router = Router()

// /api/item equivalent
router
  .route('/')
  .get(controller)
  .post(controller)

// /api/item/:id equivalent
router
  .route('/')
  .put(controller)
  .delete(controller)
  .get(controller)

// exporting as default so I can import as anything
export default router
