import express, { Application, Request, Response } from "express"
import cors from "cors"
import { ProductRouter } from "./app/modules/product/product.route";
import { OrderRouter } from "./app/modules/order/order.route";
const app : Application = express()
 
// parser
app.use(express.json());
app.use(cors())

// application routes
app.use("/api", ProductRouter)
app.use("/api", OrderRouter)


const getAController = (req : Request, res : Response) => {
    const a = 10
    res.send(a)
  }

app.get('/',  getAController)

export default app