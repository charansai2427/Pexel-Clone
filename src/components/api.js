import { useEffect , useState } from "react";
import axios from 'axios';

export default function Banner (){
    const[apidata , setApidata] = useState([])
    const apiKey = 'lmgDHJohapHCJwo2BCoH4Mf6Zqq8jre7wWH7a6gNtfNhd95Sdxpla3W0';
    const apiEndpoint = 'https://api.pexels.com/v1/search?query=people';
}