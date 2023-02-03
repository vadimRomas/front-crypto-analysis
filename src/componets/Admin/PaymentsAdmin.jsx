import {useEffect, useState} from "react";
import $api from "../../services/intercaptor";
import type {PaymentInterface} from "../../interface/PaymentInterface";
// todo add to admin panel for check bots
export const PaymentsAdmin = () => {
    const [listPayments: Array<PaymentInterface>, setListPayments] = useState([]);

    useEffect(() => {
        $api.get('admin/my_payments')
            .then(response => setListPayments(response.data))
            .catch(error => alert(error));
    }, []);

  return (
      <div>
          {listPayments.map(value => <p>{value.status}</p>)}
      </div>
  );
}
