import { useEffect, useState } from "react"
import axios from 'axios'
import AddressList from "../component/AllAddresses/Addresses";

export default function SelectAddress() {
    const [AllAddresses, setAllAddresses] = useState([]);
    useEffect(() => {

        const fetchedAddress = async ()=> {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('token missing please login');
            }
            const response = await axios.get(
                `http://localhost:8080/user/add-adresses?token=${token}`
            );
            console.log(response.data.userInfo);
            setAllAddresses(response.data.userInfo.address);
        };
        fetchedAddress();
    }, []);
    return (
        <div>
         <AddressList addresses={AllAddresses} />;
        </div>
    );
}

