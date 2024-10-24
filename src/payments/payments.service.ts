import { Injectable } from '@nestjs/common';
import { envs } from 'src/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService 
{
    private readonly stripe = new Stripe(envs.stripeSecret)


    async createPaymentSession()
    {
        const session = await this.stripe.checkout.sessions.create({
            
            payment_intent_data : {
                metadata : {}
            },

            line_items : [
                {
                    price_data : {
                        currency : 'mxn',
                        product_data : {
                            name : 'PSP 3000'
                        },
                        unit_amount : 200000, //200 dlls

                    }, 
                    quantity : 2
                }
            ],
            mode : 'payment',
            success_url : 'http://localhost:3003/payments/success',
            cancel_url : 'http://localhost:3003/payments/cancel'


        });
        return session;

    }
}
