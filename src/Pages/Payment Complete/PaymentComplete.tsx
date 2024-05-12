import React from "react";
import HeaderMenu from "../Menu/HeaderMenu";

function PaymentCompletePage() {    
    return (<div className="App">
        <HeaderMenu />
        <div>
            <h1>Payment Complete</h1>
            <p>Thank you for your payment. Your transaction has been completed and we've emailed you a receipt for your purchase. Log in to your PayPal account to view transaction details.</p>
        </div>
    </div>)
}

export default PaymentCompletePage;