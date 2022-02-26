import { NextApiRequest, NextApiResponse } from "next";
import {services} from '../../data'

export default (req:NextApiRequest,res:NextApiResponse)=>{
    console.log('API', services)
    //by deafault get requist
    res.status(200).json({services})

}