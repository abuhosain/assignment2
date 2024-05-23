import express, { Application, Request, Response } from "express"
import cors from "cors"
import { ProductRouter} from "./app/modules/product/product.route";
import { OrderRouter  } from "./app/modules/order/order.route";
import { notFoundRouter } from "./notFoundRouter";
const app : Application = express()
 
// parser
app.use(express.json());
app.use(cors())

// application routes
app.use("/api", ProductRouter)
app.use("/api", OrderRouter)

const getAController = (req : Request, res : Response) => {
  res.status(200).json({
    message : "server is running"
  })
}

app.get('/',  getAController)

 
// not found router
app.use("*",notFoundRouter)



 


export default app